<template>
    <div class="mycoop" v-title='"我的鸡笼"'>
        <div class="top">
            <img src="./images/bg.png" class="bg">
            <div class="info">
                <img :src="this.headimgurl" height="121" width="120" class="head">
                <span>{{this.user_name}}</span>
            </div>
        </div>
        <ul>
            <li class="clearfix">
                <span class="fl">
                        <img src="./images/coin.png">
                        {{infodata.gold_num}} 金币
                    </span>
                <router-link to="/goldchange">
                    <span class="fr">
                        去兑换 >
                    </span>
                </router-link>
            </li>
            <li class="clearfix">
                <span class="fl">
                    <img src="./images/address.png" >
                    {{infodata.address}}
                </span>
                <router-link to="/address">
                    <span class="fr">
                        更改 >
                    </span>
                </router-link>
            </li>
        </ul>
        <foot></foot>
    </div>
</template>
<script>
    import foot from '../common/footer/footer'
    import {main} from '../../service/getdata.js'
    import {mapState, mapMutations} from 'vuex'
export default {
  name: 'mycoop',
  data () {
    return {
        user_name:window.localStorage.getItem('nickname'),
        headimgurl:window.localStorage.getItem('headimgurl'),
        infodata:{
            address:'请设置地址'
        }
    }
  },
  components:{
    foot
  },
    methods: {
         ...mapMutations([
           'CHANGE_GOODNUM'
        ]),
        async init() {

            let infojson = {
                'user_id':window.localStorage.getItem('user_id'),
            }
            let info = await main(infojson);
            if(info.data.code==1){
              if(!info.data.result.address){
                info.data.result.address = '请设置地址'
              }
                this.infodata = {...info.data.result}
                this.CHANGE_GOODNUM(info.data.result.gold_num);
            }else{
               this.$message(info.data.msg);
            }
        },
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
.mycoop{height:100%;}
.top{position:relative;height:214px;background-size:100% 100%;background:linear-gradient(rgba(255,255,255,.6),rgba(255,255,255,1));}
.info{position:absolute;top:80px;left:50%;margin-left:-120px;}
.info span{color:#5a463a;font-weight:700;font-size:20px;}
.info img{margin-right:10px;width:80px;height:80px;border-radius:100%;}
.top .bg{position:absolute;top:0;left:0;z-index:-1;width:100%;height:100%;}
ul{padding:0 40px;}
ul li{font-size: 16px;margin:30px 0;}
li span{color: #5a463a;margin-top: 10px;}
li a span{padding-top: 4px;}
li span img{max-height: 30px; max-width:20px;margin-right: 20px;margin-top: -4px;}
</style>
