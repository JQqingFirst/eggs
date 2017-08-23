<template>
    <div class="adoptPay" v-title='"确认订单"'>
        <div class="top">
            <div class="bg"></div>
            <div class="unadd" v-if='!address.user_name'>
                <router-link to='/address'>
                    <i class="el-icon-plus"></i>请添加姓名，电话，地址
                </router-link>
            </div>
            <div class="address" v-if='address.user_name'>
                <p>
                    <span>{{address.user_name}}</span>
                    <span>{{address.tel}}</span>
                </p>
                <div>
                    <router-link to='/address'>
                        <img src="./img/add.png" class="fl">
                        <i class="el-icon-arrow-right fr"></i>
                        <span>
                            {{address.address}}
                        </span>
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
            <el-button type="warning" @click='pay'>去支付</el-button>
            <p>待支付：<span>¥{{good.totleprice}}</span></p>
        </footer>
    </div>
</template>
<script>
    import {getDefault,order,wxpay} from '../../service/getdata.js'
    import {mapState, mapMutations} from 'vuex'
export default {
  name: 'adoptPay',
  data () {
    return {
        address:{
            user_name: '',
            tel:'',
            // address:'',
            address:'',
            status:1      //是否默认
        },
        good:{
            price:520,
            num:this.$store.state.chickennum,
            totleprice:520*this.$store.state.chickennum,
            name:'快乐的鸡'
        }

    }
  },
    methods: {
         ...mapMutations([
           'RECORD_ADDRESS'
        ]),
        init() {
            let _this = this;
            if(this.$store.state.chickennum == 2){
                this.good.totleprice = 998;
            }else if (this.$store.state.chickennum == 4){
                this.good.totleprice = 1950;
            }
            let user_id = window.localStorage.getItem('user_id')
            let infojson =  {
                user_id:user_id
            }
            let x = getDefault(infojson);
            (async function(){
                let info = await x;
                _this.address = {...info.data.result}
            })()
        },
        async pay(){
//            if(!this.address.user_name){
//               this.$message('请填写地址');
//                return false;
//            }
            let _this =this;
            let user_id = window.localStorage.getItem('user_id')
            let chickennum = this.$store.state.chickennum;
            let product_id;
            switch(chickennum){
                case 1:
                    product_id=34;
                break;
                case 2:
                    product_id=35;
                break;
                default:
                    product_id=36;
            }
            let json  = {
                user_id: user_id,
                product_id:product_id,
                payable:this.good.totleprice.toFixed(2)
            }
            let info = await order(json);
            if(info.data.code==1){
                console.log(info);
                let infojson2 = {
                    order_sn:info.data.result.order_sn,
                    total_fee:_this.good.totleprice.toFixed(2)
                }
//                let info2 = await wxpay(infojson2);
                window.location.href = 'http://weixin.yangjiguanjia.com/wxpay2/example/jsapi2.php?order_sn='+infojson2.order_sn+'&total_fee='+infojson2.total_fee
            }else{
//               this.$message(info.data.msg);
            }
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
