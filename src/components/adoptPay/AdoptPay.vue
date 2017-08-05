<template>
    <div class="adoptPay" v-title='"确认订单"'>
        <div class="top">
            <div class="bg"></div>
            <div class="unadd" v-if='!address.name'>
                <router-link to='/address'>
                    <i class="el-icon-plus"></i>请添加姓名，电话，地址
                </router-link>
            </div>
            <div class="address" v-if='address.name'>
                <p>
                    <span>{{address.name}}</span>
                    <span>{{address.mobile}}</span>
                </p>
                <div>
                    <router-link to='/address'>
                        <img src="./img/add.png" class="fl">
                        <i class="el-icon-arrow-right fr"></i>
                        <span>                        
                            {{address.address}}{{address.detialAdd}}
s                        </span>
                    </router-link>
                </div>
            </div>
            <div class="bg"></div>
        </div>
        <el-card class="box-card">
            <div class="good clearfix">
                <img src="./img/checken.gif" alt="">
                <div class="info">
                    <h2>{{good.name}}</h2>
                    <p><span>¥{{good.price}}</span>×{{good.num}}</p>
                </div>
            </div>
        </el-card>
        <footer>
            <el-button type="warning">去支付</el-button>
            <p>待支付：<span>¥{{good.totleprice}}</span></p>
        </footer>
    </div>
</template>
<style scoped>
    .adoptPay{height:100%;background-color: #f2f2f2;}
    .top{background-color:#fff;font-weight:700;font-size:20px;}
    .unadd i{float:left;margin-top:5px;margin-right:10px;padding:3px;border:solid 2px #f7ab26;border-radius:100%;font-size:13px;}
    .unadd a{display:block;padding-left:20px;height:30px;color:#f7ab26;line-height:30px;}
    .address{ padding-left: 10px; padding-right: 20px;}
    .address p{color: #5a463a;font-size: 16px;font-weight: bold;}
    .address p span{margin-right: 20px;}
    .address i{margin-top: 15px;}
    .top .bg{margin-bottom:10px;width:100%;height:4px;background:url(./img/bg.png) repeat-x;}
    .address p{padding-left:50px;line-height:40px;}
    .address p span{color:#8e837d;font-size:20px;}
    .address a{display:block;padding-bottom:20px;color:#8e8e8e;font-weight:400;font-size:16px;line-height:40px;}
    .address a img{margin-right:14px;}
    .address a span{display:block;padding-right:30px;}
    .box-card{width: 96%;margin-left: 2%;}
    .good{ padding: 10px; }
    .good img{float: left;width: 100px;height: 100px;border-radius: 6px;margin-right:15px;}
    .good .info{float: left;}
    .good .info h2{color: #5a463a;margin-bottom: 10px;padding-top: 15px;font-weight: 500;}
    .good .info p{}
    .good .info p span{font-size: 20px;font-weight: bolder;color: #ff0000;}
    footer{position:fixed;bottom:0;left:0;width:100%;height:36px;background-color:#f2f2f2;line-height:36px;}
    footer p{float:right;text-align:right;}
    footer p span{margin:0 10px;color:#ff5400;}
    footer button{float:right;}
</style>
<script>
    import {info} from '../../service/getdata.js'
    import {mapState, mapMutations} from 'vuex'
export default {
  name: 'adoptPay',
  data () {
    return {
        address:{
            name:'ddd',
            mobile:'13070109282',
            address:'河北省/保定市/涞水县',
            detialAdd:'王村乡/辛庄头村148号'
        },
        good:{
            price:520,
            num:3,
            totleprice:1560,
            name:'快乐的鸡'
        }

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
        }
    },
    created() {
        // this.init()
    },
    mounted(){
        this.init();
    }
}
</script>
