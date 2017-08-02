<template>
    <div class="adoptPay" v-title='"领养"'>
        <div class="top">
            <div class="bg"></div>
            <div class="unadd">
                <router-link to='/address' v-if='!address.name'>
                    <i class="el-icon-plus"></i>请添加姓名，电话，地址
                </router-link>
            </div>
            <div class="address">
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
            <div class="good">
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
<script>
    import {info} from '../../service/getdata.js'
    import {mapState, mapMutations} from 'vuex'
export default {
  name: 'adoptPay',
  data () {
    return {
        address:{
            name:'dhy',
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
<style scoped>
    .adoptPay{
        height: 100%;
    }
    .top{
        background-color: #fff;
        font-size: 20px;
        font-weight: bold;
    }
    .unadd i{
        padding: 3px;
        font-size: 13px;
        border: solid 2px #f7ab26;
        border-radius: 100%; 
        float: left;
        margin-top: 5px;
        margin-right: 10px;
    }
    .unadd a{
        color: #f7ab26;
        display: block;
        height: 30px;
        line-height: 30px;
        padding-left: 20px;
    }
    .top .bg{
        width: 100%;
        height:4px;
        background: url(./img/bg.png) repeat-x;
        margin: 10px 0;
    }
    .address{

    }
    .address p{
        padding-left: 40px;
        line-height: 40px;
    }
    .address p span{
        font-size: 20px;
        color: #8e837d;
    }
    .address a{
        font-size: 16px;
        font-weight: normal;
        line-height: 40px;
        color: #8e8e8e;
        display: block;
        padding-bottom: 20px;
    }
    .address a img{
        margin-right: 10px;
    }
    .address a span{
        display: block;
        padding-right: 30px;
    }
    footer{
        position:fixed;
        bottom: 0;
        width: 100%;
        left: 0;
        height: 36px;
        line-height: 36px;
        background-color: #f2f2f2;
    }
    footer p{
        float: right;
        text-align: right;
    }
    footer p span{
        color: #ff5400;
        margin:0 10px;
    }
    footer button{
        float: right;
    }
</style>
