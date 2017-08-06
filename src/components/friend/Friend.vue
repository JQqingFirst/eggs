<template>
    <div class="friend" v-title='"好友榜"'>
        <div class="top">
            <img src="./img/warning.png">
            20枚鸡蛋方可卖出或送好友
        </div>
        <banner></banner>
        <div class="clear10"></div>
        <ul class="friend-list">
            <li v-for='item in userFriendList.data' class="clearfix">
                <!-- <img :src='item.img' alt=""> -->
                <img :src="item.friend_info.wx_pic" alt="" class="fl">
                <div class="info fl">
                    <h2>{{item.friend_info.wx_nick_name}}</h2>
                    <p>{{item.friend_info.chicken_num}}只鸡</p>
                </div>
                <div class='right fr'>
                    <span>
                        {{item.friend_info.user_id}}
                        <img src="./img/egg.png"  @click='storeeggdialog(item.user_id,item.friend_id)'>
                    </span>
                    <span>
                        <img src="./img/feed.png" @click='feeddialog(item.user_id,item.friend_id)'>
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
    import {userFriendList,feed,stealEgg} from '../../service/getdata.js'
    import {mapState} from 'vuex'
export default {
  name: 'mycoop',
  data () {
    return {
        storemsg:'恭喜您成功偷取好友一枚喜蛋',
        feedmsg:'成功帮好友提高30%产蛋率',
        fodder:false,           //每天只能替好友喂鸡3次
        storeegg:false,         //恭喜您成功偷取好友一枚喜蛋
        feedchecken:false,       //喂鸡成功弹窗
        userFriendList:{
        }
    }
  },
    methods: {
        async init(){
            let _this = this;
            let infojson = {
                user_id:this.$store.state.usreId
            }
            let info = await userFriendList(infojson);
            let req = info.data;
            console.log(req);
            if(req.code===1){
                _this.userFriendList = {...req.result};
            }else if(req.code===0){

            }
        },
        checkListss(val){
            console.log(val);
        },
        sold(){     //点击卖出
            this.dialogFormVisible = true
        },
        storeeggdialog(user_id,friend_id){
            let _this = this;
            (async function(){
                let infojson = {
                    user_id:user_id,
                    friend_id:friend_id
                }
                let info = await stealEgg(infojson);
                let req = info.data;
                // if(req.code===1){
                // }else{
                    // _this.storemsg = '已经偷过了，放过他吧'
                    _this.feedmsg =req.msg
                // }
                    _this.storeegg = true;
            })()
        },
        feeddialog(user_id,friend_id){
            let _this = this;
            (async function(){
                let infojson = {
                    user_id:user_id,
                    friend_id:friend_id
                }
                let info = await feed(infojson);
                let req = info.data;
                // if(req.code===1){
                // }else{
                    // _this.storemsg = '已经偷过了，放过他吧'
                    _this.storemsg =req.msg
                // }
                    _this.feedchecken = true;
            })()
        },
        feedcheckendialog(){
            this.feedchecken = true
        }
    },
    components:{
        banner
    },
    created() {
        // this.init()
    },
    mounted(){
        this.init();
    }
}
</script>
<style>
    span.el-checkbox__label{display:none;}
    .el-dialog__footer{box-sizing:content-box;}
    .el-dialog{border-radius:3px;}
    .el-dialog--small{width:80%;}
    .help .el-dialog{background: transparent;box-shadow:none;}
</style>
<style scoped>
.friend{height: 100%;background-color: #f2f2f2;}
.top{height:40px;color:red;text-align:center;line-height:40px;background-color: #fae3d2;color: #f39500;font-size: 16px;}
.top img{width:18px;height: 18px;margin-right: 4px;margin-top: -4px;}
.friend-list li{margin: 6px;background-color: #fff;padding: 10px 0 10px 45px;}
.friend-list li:nth-child(1){ background:#fff url(./img/f1.png) no-repeat 8px center;background-size: 25px 25px;}
.friend-list li:nth-child(2){ background:#fff url(./img/f2.png) no-repeat 8px center;background-size: 25px 25px;}
.friend-list li:nth-child(3){ background:#fff url(./img/f3.png) no-repeat 8px center;background-size: 25px 25px;}
.friend-list li>img{width: 80px;height: 80px;margin-right: 10px;}
.info h2{font-size: 20px;font-weight: bolder;color:#5a463a;margin-bottom: 10px;margin-top: 15px;}
.info p{color: #a6a09d;font-size: 16px;}
.friend-list li .right img{width: 55px;margin-top:15px;margin-right: 10px;}
.storeegg{position: relative;height: 100px;}
.storeegg img{position: absolute;width: 150px;left: 50%;margin-left: -75px;top:-120px;}
.storeegg p{padding-top: 50px;text-align: center;font-size: 14px;color: #5a463a;font-weight: 500;}
.helpfriend{position: relative;}
.helpfriend img{width: 80%;margin-left: 10%;}
.helpfriend p{position: absolute;left: 0;width: 40%;margin-left: 30%;top: 60%;font-size: 16px;font-weight: bolder;text-align: center;line-height: 20px;color: #eee;}
</style>