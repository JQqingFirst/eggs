<template>
	<div class="basket" v-title='"最近一期配送"'>
		<div class="give" v-show='give' @click='give=false'>
			<img src="./img/give1.jpg" alt="">
		</div>
		<div class="clear1"></div>
		<div class="info">
			<ul>
				<li v-for='item in nearestDelivery'>
					<img :src='item.goods_pic'>
					<div>
						<span>{{item.goods_name}} <br>{{item.time}}&nbsp;&nbsp; {{item.date}}</span>
					</div>
				</li>
			</ul>
		</div>
		<footer>
			<ul class="clearfix">
				<li>
					<a @click='Delay(nearestDelivery[0].id)'>
						<img src="./img/add.gif"> 延迟配送
					</a>
				</li>
				<li>
					<a @click='give=true'>
						<img src="./img/gift.gif"> 送给朋友
					</a>
				</li>
			</ul>
		</footer>
		<el-dialog title="" :visible.sync="dialogFormVisible">
			<div class="dialog-info">
				<p>原价2元一枚的蛋，现帮您以1000金币卖出，您可以在“
					<router-link to='/mycoop'>
						个人中心
					</router-link>
					”查看</p>
			</div>
			<div slot="footer" class="dialog-footer">
				<el-button type="warning" @click="dialogFormVisible = false">确 定</el-button>
			</div>
		</el-dialog>
	</div>
</template>
<script>
	import { nextDelivery,weichat,delayedDelivery} from '../../service/getdata.js'
	import { mapState, mapMutations, } from 'vuex'
	export default {
		name: 'mycoop',
		data() {
			return {
        		userId:'',
				give: false,
				dialogFormVisible: false, 		//卖出弹窗
				checkList: ['选中且禁用', '复选框 A'],
				nearestDelivery: [						//最近配送
		            {
		              "is_gift": 1,
		              "goods_name": "鸡蛋20枚",
		              "goods_pic": "http://123.57.65.163/data/uploads/egg_goods/34_5979945a01a0d.png",
		              "status": "1",
		              "time" : "第-1-期",
		              "date":"2017-08-20",
		              "status_info": "已赠送好友",
		              "id": "2"
		            },
		            {
		              "is_gift": 1,
		              "goods_pic": "http://123.57.65.163/data/uploads/egg_goods49",
		              "goods_name": "赠品！快乐de蛋围裙",
		              "status": "1",
		              "time" : "第-1-期",
		              "date":"2017-08-20",
		              "status_info": "待配送",
		              "id": "2"
		            }
            	],
        shareImg: 'http://weixin.yangjiguanjia.com/LaneWeChat/yangjiguanjia/send_happyegg/assets/img/imgurl.jpg'
			}
		},
		methods: {
			...mapMutations([
				'RECORD_ADDRESS'
			]),
	        async Delay(id){                                        //延期配送
        	 	if(this.nearestDelivery[0].is_gift==1 || this.nearestDelivery[0].status!=1){
					this.$message('不能延期配送');
        	 		return false;
        	 	}
	            let infojson = {
	                id:id
	            }
	            let delayedDeliveryData = await delayedDelivery(infojson);
	            if(delayedDeliveryData.data==1){
	                this.init()
	            }else{
	                this.$message(delayedDeliveryData.data.msg);
	            }
	        },
			async init() {
		        let _this = this;
				let infojson = {
					'user_id': window.localStorage.getItem('user_id')
				}
				let info = await nextDelivery(infojson);
				if(info.data.code == 1) {
					this.nearestDelivery = { ...info.data.result}
				} else {
					this.$message(info.data.msg);
				}
				//分享
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
					jsApiList: ['onMenuShareAppMessage', 'onMenuShareTimeline','onMenuShareQQ', 'onMenuShareQZone']
		        });
		        //处理验证失败的信息
//		        wx.error(function(res) {
//		          logUtil.printLog('验证失败返回的信息:', res);
//		        });
		        //处理验证成功的信息
		        wx.ready(function() {
		        	let shareinfo = {
						title: '快乐鸡舍', 				// 分享标题
						desc: '赠给你一个鸡蛋大礼包', 		// 分享描述
						link: 'http://weixin.yangjiguanjia.com/LaneWeChat2/kuailededan/dist/#/getegg?info_id=' + _this.nearestDelivery[0].id, 					// 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
						imgUrl: _this.shareImg, 	// 分享图标
						success: function(res) {	//用户确认分享后执行的回调函数
							alert("分享成功!")
						},
						cancel: function(res) {//用户取消分享后执行的回调函数
							//alert("取消分享到朋友圈返回的信息为:", res);
						}
		          }
		          //分享到朋友圈
		          wx.onMenuShareTimeline(shareinfo);
		          //分享给朋友
		          wx.onMenuShareAppMessage(shareinfo);
		          //分享到QQ
		          wx.onMenuShareQQ(shareinfo);
		          //分享到QQ空间
		          wx.onMenuShareQZone(shareinfo);
		        });
			},
			sold() { //点击卖出
				this.dialogFormVisible = false
			}
		},
		created() {
			// this.init()
		},
		mounted() {
			this.init();
		}
	}
</script>
<style>
	span.el-checkbox__label{display:none;}
	.el-dialog__footer{box-sizing:content-box;}
	.el-dialog{border-radius:3px;}
	.el-dialog--small{width:80%;}
	.el-checkbox__inner{border-radius:100%;}
	.is-focus{border-color:#f7ab26;}
	.el-checkbox__inner{border-color:#f7ab26;}
	.el-checkbox__inner:hover{border-color:#f7ab26;}
	.el-checkbox__input.is-checked .el-checkbox__inner{border-color:#f7ab26;background-color:#f7ab26;}
</style>
<style scoped>
	.basket{height:100%;background-color:#f2f2f2;}
	.top{height:40px;background-color:#fae3d2;color:red;color:#f39500;text-align:center;font-size:16px;line-height:40px;}
	.top img{margin-top:-4px;margin-right:4px;width:18px;height:18px;}
	.give{position:fixed;top:0;right:0;bottom:0;left:0;z-index:33;height:100%;background-color:rgba(0,0,0,.4);}
	.give img{float:right;margin:20px 30px 0 0;width:70%;}
	.info li{margin:10px;height:100px;border-radius:3px;background-color:#fff;color:#5a463a;}
	.info li img{float:left;margin-right:20px;width:80px;height:80px;border-radius:3px;margin:10px;}
	.info li div{float:left;line-height: 30px;margin-top: 20px;margin-left:20px;}
	.info li label{margin-top:40px;margin-right:30px;}
	footer{position:fixed;bottom:0;left:0;z-index:2;width:100%;height:50px;background-color:#fff;line-height:50px;}
	footer ul{height:50px;}
	footer li{float:left;width:50%;}
	footer li.on{background-color:#fbfbfb;}
	footer li a{position:relative;display:block;padding-left:20px;height:50px;color:#000;color:#5a463a;text-align:center;line-height:50px;}
	footer li a img{position:absolute;top:10px;left:50%;margin-left:-55px;width:27px;}
	.dialog-footer{width:100%;}
	.dialog-footer button{width:100%;}
	.dialog-info{font-size:14px;line-height:30px;}

</style>
