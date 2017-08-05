<template>
    <div class="friend" v-title='"好友榜"'>
        <div class="top">
            <img src="./img/warning.png">
            20枚鸡蛋方可卖出或送好友
        </div>
        <banner></banner>
        <div class="clear10"></div>
        <ul class="friend-list">
            <li v-for='item in friends' class="clearfix">
                <!-- <img :src='item.img' alt=""> -->
                <img src="./img/1.png" alt="" class="fl">
                <div class="info fl">
                    <h2>{{item.name}}</h2>
                    <p>{{item.chickenNum}}</p>
                </div>
                <div class='right fr'>
                    <span>
                        <img src="./img/egg.png" v-if='item.egg' @click='storeeggdialog'>
                    </span>
                    <span>
                        <img src="./img/feed.png" v-if='item.feed' @click='feedcheckendialog'>
                    </span>
                </div>
            </li>
        </ul>
        <el-dialog title="" :visible.sync="storeegg">
            <div class="dialog-info storeegg">
                <img src="./img/storeegg.png" alt="">
                <p>恭喜您成功偷取好友一枚喜蛋</p>
            </div>
        </el-dialog>
        <el-dialog title="" :visible.sync="feedchecken" class='help'>
            <div class="dialog-info helpfriend">
                <img src="./img/helpfriend.png" alt="">
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
    import {info} from '../../service/getdata.js'
    import {mapState, mapMutations} from 'vuex'
export default {
  name: 'mycoop',
  data () {
    return {
        fodder:true,           //每天只能替好友喂鸡3次
        storeegg:false,         //恭喜您成功偷取好友一枚喜蛋
        feedchecken:false,       //喂鸡成功弹窗
        friends:[
            {
                name:'dhy',
                img:'/assets/logo.png',
                chickenNum:1,
                egg:1,
                feed:0,
                userid:112,
            },
            {
                name:'dhy',
                img:'',
                chickenNum:1,
                egg:0,
                feed:1,
                userid:112,
            },
            {
                name:'dhy',
                img:'',
                chickenNum:1,
                egg:1,
                feed:1,
                userid:112,
            },
            {
                name:'dhy',
                img:'',
                chickenNum:1,
                egg:0,
                feed:1,
                userid:1125,
            }
        ],
        goodlist:[
            {
                good:'鸡蛋',
                id:"112",
                num:3,
                category:1,
            },
            {
                good:'鸡汤',
                id:"113",
                num:3,
                category:2,
            },
            {
                good:'鸡蛋',
                id:"114",
                num:20,
                category:1,
            }
        ]
    }
  },
    methods: {
         ...mapMutations([
           'RECORD_ADDRESS' 
        ]),
        init() {
            let infojson = {
                'user_id':'1',
            }
            let x = info(infojson);
            (async function(){
                let info = await x;
                console.log(info)
            })()
        },
        checkListss(val){
            console.log(val);
        },
        sold(){     //点击卖出
            this.dialogFormVisible = true
        },
        storeeggdialog(){
            this.storeegg = true
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
.helpfriend{}
.helpfriend img{width: 80%;margin-left: 10%;}
</style>