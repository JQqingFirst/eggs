<template>
    <div class="index" v-title='"我的鸡笼"'>
        <div class="top">
            <div class="topmenu">
                <span><img src="./images/retrospect.png" alt=""></span>
                <span><img src="./images/knowledge.png" alt=""></span>
            </div>
            <div class="rightmeun">
                <router-link to="/adopt" class='fr'><img src="./images/lychecken.png" alt=""></router-link>
                <router-link to="/friend" class='fr'><img src="./images/labour_2.png" alt=""></router-link>
            </div>
            <div class="home">
                <div class="tips">
                    <ul>
                        <li>
                            <span>温度</span>
                            <p>24°C</p>
                        </li>
                        <li>
                            <span>湿度</span>
                            <p>60%</p>
                        </li>
                        <li>
                            <span>光照</span>
                            <p>60Lux</p>
                        </li>
                    </ul>
                </div>
                <div class="chickens">
                    <dl>
                        <dt><img src="./images/chicken.png" alt=""></dt>
                        <dt><img src="./images/chicken.png" alt=""></dt>
                        <dt><img src="./images/chicken_2.png" alt=""></dt>
                        <dd class="eggs"><img src="./images/eggs.png" alt=""></dd>
                        <dd class="egg2">
                            <img src="./images/egg_2.png" alt="">
                            <div class="egg2-tip">
                                <span>喜蛋进度</span>
                                <p>{{inforesult.xi_egg}}%</p>
                            </div>
                        </dd>
                    </dl>
                </div>
            </div>
        </div>
        <div class="egg">
            <img src="./images/basket.png" alt="">
            <p>共<span> {{inforesult.egg_num}} </span>枚蛋</p>
            <router-link to="/address" class='fr'>提蛋 <i class="el-icon-arrow-right"></i></router-link>
        </div>
        <div class="friend">
            <h2>好友动态</h2>
            <ul>
                <li v-for='item in friendinfo' class="clearfix">
                    <span class="fl">{{item.friend_info.wx_nick_name}}</span>
                    <em class="fr">{{item.friend_info.update_at}}</em>
                    <strong v-if='item.action==1'>帮你喂鸡一次</strong>
                    <strong v-if='item.action==2'>偷你一枚喜蛋</strong>
                </li>
                <li class="text-center" v-if='friendinfo.length'>
                    <div class="clear10"></div>
                    <router-link to="/friend">查看更多</router-link>
                </li>
            </ul>
        </div>
        <foot></foot>
    </div>
</template>
<script>
    import foot from '../common/footer/footer.vue'
    import {info,gameLogList} from '../../service/getdata.js'
    import {mapState, mapMutations} from 'vuex'
export default {
  name: 'mycoop',
  data () {
    return {
        chickenNum:2,//我领养鸡的数量
        inforesult: {
              "id": "1",
              "user_id": "1",
              "chicken_num": "3", //鸡的数量
              "egg_num": "11",    //蛋的数量
              "update_at": "",    //更新时间
              "xi_egg": 0         //喜蛋进度
        },
        friendinfo:[]
    }
  },
    computed: {
        ...mapState([
            'userId',
        ]),
    },
    components:{
        foot
    },
    methods: {
        init() {
            let _this = this;
            let infojson = {
                user_id:this.$store.state.usreId
            }
            let x = info(infojson);
            (async function(){
                let info = await x;
                var req = info.data;
                if(req.code===1){
                    _this.inforesult = {...req.result};
                }
            })();
            let y = gameLogList(infojson);
            (async function(){
                let info = await y;
                console.log(info);
                var req = info.data;
                if(req.code===1){
                    _this.friendinfo = {...req.result};
                }else{
                    _this.$message(info.data.msg);
                }
            })();
        },
        showchange:function(data){
            console.log(data);
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
.top{position:relative;min-height:400px;background:url(./images/bg.png) no-repeat;background-size:100% 100%;}
.topmenu{position:absolute;top:20px;left:30px;width:200px;height:60px;}
.topmenu span img{width:40px;height: 40px;}
.rightmeun{position:absolute;top:60px;right:0;width:100px;height:100px;z-index: 5;}
.rightmeun img{margin-bottom:20px;height:40px;}
.home{position:absolute;bottom:0;left:0;width:100%;height:300px;background:url(./images/checkenhome.png) no-repeat;background-size:100% 100%;-webkit-background-size:100% 100%;}
.tips{width: 40px; height:150px;background:url(./images/tip.png) no-repeat;background-size: 100% 100%;position: absolute;left: 18px;bottom:10px;}
.tips ul{padding-top: 30px;}
.tips li{color: #fff;margin-bottom: 10px;text-align: center;}
.tips li span{font-size: 11px;}
.tips li p{font-size: 12px;margin-top: 4px;}
.chickens{position:absolute;bottom:0;left:10%;width:80%;height:180px;}
.chickens dl{width:90%;height:100%;margin: 0 auto;}
.chickens dt{float:left;width:33.33%;height:80px;text-align: center;}
.chickens dt img{margin-left:10px;height:90%;margin-top: 5%;}
.chickens .eggs{float:left;margin-top:20px;margin-left:30px;width:50%;}
.chickens .eggs img{width:100%;height:100%;}
.chickens .egg2{position:relative;float:left;margin-top:10px;margin-left:10px;width:33.33%;height:60px;}
.chickens .egg2 img{height:100%;}
.egg2-tip{position:absolute;top:-30px;right:-40px;width:100px;height:60px;background:url(./images/bubble.png) no-repeat;background-size:100% 100%;padding-top:8px;padding-left: 20px;}
.egg2-tip span{color:#fff;font-size:14px;}
.egg2-tip p{color:#fff;font-weight:700;font-size:16px;margin-top: 6px;font-size: 18px;}
.egg{overflow:hidden;height:60px;background-color:#f7ebd5;line-height:60px;}
.egg img{float:left;height: 80px;}
.egg p{float:left;}
.egg p span{color:red;font-weight:700;font-size:20px;}
.egg a{color: #a6a09d;margin-right: 10px;}
.friend{padding: 20px;}
.friend h2{font-weight:700;color:#5a463a;margin-bottom:20px;}
.friend li{color: #98877d;margin-bottom: 15px;}
.friend li a{color: #98877d;}
.friend span{font-weight:700;color:#5a463a;font-size: 16px;margin-right: 6px;}
</style>
