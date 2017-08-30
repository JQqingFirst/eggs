<template>
	<div class="friend" v-title='"好友榜"'>
		<!--<div class="top">-->
			<!--<img src="./img/warning.png"> 20枚鸡蛋方可卖出或送好友-->
		<!--</div>-->
		<banner></banner>
		<div class="clear10"></div>
		<ul class="friend-list">
			<li v-for='(item,index) in userFriendList.data' class="clearfix">
				<!-- <img :src='item.img' alt=""> -->
				<img :src="item.friend_info.wx_pic" alt="" class="fl">
				<div class="info fl">
					<h2>{{item.friend_info.wx_nick_name}}</h2>
					<p>{{item.friend_info.chicken_num}}只鸡</p>
				</div>
				<div class='right fr'>
					<span>
                        <img src="./img/egg.gif" v-if='item.friend_info.xiegg_num' @click='storeeggdialog(item.user_id,item.friend_id,index)'>
                    </span>
					<span>
                        <img src="./img/feed.png" v-if='item.friend_info.chicken_num' @click='feeddialog(item.user_id,item.friend_id)'>
                    </span>
				</div>
			</li>
		</ul>
		<el-dialog title="" :visible.sync="storeegg">
			<div class="dialog-info storeegg">
				<img src="./img/storeegg.png" alt="">
				<p>{{storemsg}}</p>
			</div>
		</el-dialog>
		<el-dialog title="" :visible.sync="feedchecken" class='help'>
			<div class="dialog-info helpfriend">
				<img src="./img/helpfriend.png" alt="">
				<p>{{feedmsg}}</p>
			</div>
		</el-dialog>
		<el-dialog title="" :visible.sync="fodder">
			<div class="dialog-info storeegg">
				<img src="./img/fodder.png" alt="">
				<p>每天只能替好友喂鸡3次</p>
			</div>
		</el-dialog>
	</div>
</template>
<script>
	import banner from '../common/banner/banner.vue'
	import { userFriendList, feed, stealEgg, weichat } from '../../service/getdata.js'
	import { mapState } from 'vuex'
	export default {
		name: 'mycoop',
		data() {
			return {
			  userId:'',
			  share:{},
				storemsg: '恭喜您成功偷取好友一枚喜蛋',
				feedmsg: '成功帮好友提高30%产蛋率',
				fodder: false, //每天只能替好友喂鸡3次
				storeegg: false, //恭喜您成功偷取好友一枚喜蛋
				feedchecken: false, //喂鸡成功弹窗
				userFriendList: {
//			        "current_page": 1,
//			        "total_count": "2",
//			        "perPage_count": 20,
//			        "totalPage_count": 1,
//			        "data": [
//		            	{
//			                "id": "1",
//			                "user_id": "1",
//			                "friend_id": "11",
//			                "friend_info": {
//			                    "mobile": "",
//			                    "wx_open_id": "wwe121221",
//			                    "wx_pic": "http://dl.bizhi.sogou.com/images/1920x1080/2015/02/12/1087113.jpg",
//			                    "wx_nick_name": "sdsd",
//			                    "xiegg_num": "1",  //喜蛋数量
//			                    "chicken_num": "2"  //鸡的数量
//			                }
//			            }
//			        ]
			   },
				shareImg: 'http://weixin.yangjiguanjia.com/LaneWeChat/yangjiguanjia/send_happyegg/assets/img/imgurl.jpg'
			}
		},
		methods: {
			async init() {
				let _this = this;
				_this.userId = window.localStorage.getItem('user_id')
				let infojson = {
					user_id: window.localStorage.getItem('user_id')
				}
				let info = await userFriendList(infojson);
				let req = info.data;
				if(req.code === 1) {
					_this.userFriendList = { ...req.result};
				} else if(req.code === 0) {
						_this.$message(req.msg);
				}
			},
			async wxshare(){
				let _this = this;
		        let infojson1 = {
		          url: window.location.href.split('#')[0]
		        }
		        let share = await weichat(infojson1);
		         _this.share = {...share.data};
				//微信分享
				wx.config({
					debug: false,
					 appId: _this.share.appId,
					 timestamp: _this.share.timestamp,
					 nonceStr: _this.share.nonceStr,
					 signature: _this.share.signature,
					jsApiList: [
						'onMenuShareAppMessage', 'onMenuShareTimeline'
					]
				});
				//处理验证失败的信息
//				wx.error(function(res) {
//					logUtil.printLog('验证失败返回的信息:', res);
//				});
				//处理验证成功的信息
				wx.ready(function() {
					//分享到朋友圈
					wx.onMenuShareTimeline({
						title: '快乐鸡舍',
						link: 'http://weixin.yangjiguanjia.com/LaneWeChat2/kuailededan/dist/index.php?user_id=' + _this.userId,
						imgUrl: _this.shareImg,
						success: function(res) {
							// 用户确认分享后执行的回调函数
							alert("分享成功!")
						},
						cancel: function(res) {
							// 用户取消分享后执行的回调函数
						}
					});
					//分享给朋友
					wx.onMenuShareAppMessage({
						title: '快乐鸡舍',
						desc: '和我一起来养鸡',
						link: 'http://weixin.yangjiguanjia.com/LaneWeChat2/kuailededan/dist/index.php?user_id=' + _this.userId,
						imgUrl: _this.shareImg,
						type: '', // 分享类型,music、video或link，不填默认为link
						dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
						success: function(res) {
							// 用户确认分享后执行的回调函数
              alert("分享成功!")
//							alert("分享给朋友成功返回的信息为:", res);
						},
						cancel: function(res) {
							// 用户取消分享后执行的回调函数
						}
					});

				});
			},
			sold() { //点击卖出
				this.dialogFormVisible = true
			},
			storeeggdialog(user_id, friend_id,index) {
				let _this = this;
				(async function() {
					let infojson = {
						user_id: user_id,
						friend_id: friend_id
					}
					let info = await stealEgg(infojson);
					let req = info.data;
					// if(req.code===1){
					// }else{
					// _this.storemsg = '已经偷过了，放过他吧'
          			_this.storemsg = req.msg
					// }
					_this.storeegg = true;
					if(req.code===1){
						_this.userFriendList.data[index].friend_info.xiegg_num=0
					}
				})()
			},
			feeddialog(user_id, friend_id) {
				let _this = this;
				(async function() {
					let infojson = {
						user_id: user_id,
						friend_id: friend_id
					}
					let info = await feed(infojson);
					let req = info.data;
					// if(req.code===1){
					// }else{
					// _this.storemsg = '已经偷过了，放过他吧'
          _this.feedmsg = req.msg
					// }
					_this.feedchecken = true;
				})()
			},
			feedcheckendialog() {
				this.feedchecken = true
			}
		},
		components: {
			banner
		},
		created() {
			// this.init()
		},
		mounted() {
			this.init();
			this.wxshare();
		}
	}
</script>
<style>
	span.el-checkbox__label {
		display: none;
	}

	.el-dialog__footer {
		box-sizing: content-box;
	}

	.el-dialog {
		border-radius: 3px;
	}

	.el-dialog--small {
		width: 80%;
	}

	.help .el-dialog {
		background: transparent;
		box-shadow: none;
	}
</style>
<style scoped>
	.friend {
		height: 100%;
		background-color: #f2f2f2;
	}

	.top {
		height: 40px;
		color: red;
		text-align: center;
		line-height: 40px;
		background-color: #fae3d2;
		color: #f39500;
		font-size: 16px;
	}

	.top img {
		width: 18px;
		height: 18px;
		margin-right: 4px;
		margin-top: -4px;
	}

	.friend-list li {
		margin: 6px;
		background-color: #fff;
		padding: 10px 0 10px 45px;
	}

	.friend-list li:nth-child(1) {
		background: #fff url(./img/f1.png) no-repeat 8px center;
		background-size: 25px 25px;
	}

	.friend-list li:nth-child(2) {
		background: #fff url(./img/f2.png) no-repeat 8px center;
		background-size: 25px 25px;
	}

	.friend-list li:nth-child(3) {
		background: #fff url(./img/f3.png) no-repeat 8px center;
		background-size: 25px 25px;
	}

	.friend-list li>img {
		width: 80px;
		height: 80px;
		margin-right: 10px;
	}

	.info h2 {
		font-size: 20px;
		font-weight: bolder;
		color: #5a463a;
		margin-bottom: 10px;
		margin-top: 15px;
	}

	.info p {
		color: #a6a09d;
		font-size: 16px;
	}

	.friend-list li .right img {
		width: 55px;
		margin-top: 15px;
		margin-right: 10px;
	}

	.storeegg {
		position: relative;
		height: 100px;
	}

	.storeegg img {
		position: absolute;
		width: 150px;
		left: 50%;
		margin-left: -75px;
		top: -120px;
	}

	.storeegg p {
		padding-top: 50px;
		text-align: center;
		font-size: 14px;
		color: #5a463a;
		font-weight: 500;
	}

	.helpfriend {
		position: relative;
	}

	.helpfriend img {
		width: 80%;
		margin-left: 10%;
	}

	.helpfriend p {
		position: absolute;
		left: 0;
		width: 40%;
		margin-left: 30%;
		top: 60%;
		font-size: 16px;
		font-weight: bolder;
		text-align: center;
		line-height: 20px;
		color: #eee;
	}
</style>
