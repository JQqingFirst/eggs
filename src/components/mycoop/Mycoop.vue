<template>
    <div class="mycoop" v-title='"我的鸡笼"'>
        <div class="top">
            <img src="./images/bg.png" class="bg">
            <div class="info">
                <img src="./images/mypic.png" height="121" width="120" class="head">
                <span>{{name}}</span>
            </div>
        </div>
        <ul>
            <li class="clearfix">
                <span class="fl">
                        <img src="./images/coin.png">
                        {{gold}} 金币
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
                    {{address}}
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
    import {info} from '../../service/getdata.js'
    import {mapState, mapMutations} from 'vuex'
export default {
  name: 'mycoop',
  data () { 
    return {
        name:'隔壁老王',
        address:'北京市 海淀区 永丰屯',
        gold:'800'
    }
  },
  components:{
    foot
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
