<template>
    <div class="index" v-title='"我的鸡笼"'>
        <div class="top">
            <div class="topmenu">
                <span><img src="./images/retrospect.png" alt=""></span>
                <span><img src="./images/knowledge.png" alt=""></span>
            </div>
            <div class="rightmeun">
                <router-link to="/adopt" class='fr'><img src="./images/lychecken.png" alt=""></router-link>
                <router-link to="/Friend" class='fr'><img src="./images/labour_2.png" alt=""></router-link>
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
                                <p>100%</p>
                            </div>
                        </dd>
                    </dl>
                </div>
            </div>
        </div>
        <div class="egg">
            <img src="./images/basket.png" alt="">
            <p>共<span>20</span>枚蛋</p>
            <router-link to="/address" class='fr'>提蛋 ></router-link>
        </div>
        <div class="friend">
            <h2>好友动态</h2>
            <ul>
                <li><span class="fl">dhy</span><em class="fr">11:00</em>帮您喂鸡2次</li>
                <li><span class="fl">dhy</span><em class="fr">11:00</em>帮您喂鸡2次</li>
                <li><span class="fl">dhy</span><em class="fr">11:00</em>帮您喂鸡2次</li>
                <li>
                    <router-link to="/friend" class='fr'>查看更多</router-link>
                </li>
            </ul>
        </div>
        <foot></foot>
    </div>
</template>
<script>
    import foot from './footer.vue'
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
    .top{        min-height: 400px;
        background:url(./images/bg.png) no-repeat;
        -webkit-background-size: 100% 100%;
        background-size: 100% 100%;
        position: relative;    }
    .home{        position:absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 300px;
        background:url(./images/checkenhome.png) no-repeat;
        -webkit-background-size: 100% 100%;
        background-size: 100% 100%;    }
    .chickens{
        width: 80%;
        position: absolute;
        bottom: 0;
        left: 10%;
        height: 200px;
    }
    .chickens dl{
        width: 100%;
        height: 100%;
    }
    .chickens dt{
        float: left;
        width: 33.33%;
        height:100px;
    }
    .chickens dt img{height: 100%;margin-left: 10%;}
    .chickens .eggs{   width: 50%;float: left;margin-left: 30px; margin-top:20px; }
    .chickens .eggs img{ width: 100%;height: 100%;}
    .chickens .egg2{height:60px; width: 33.33%; float: left; position:relative;margin-left: 10px;margin-top: 10px; }
    .chickens .egg2 img{height: 100%;}
    .egg2-tip{
        width: 100px;
        height: 60px;
        background:url(./images/bubble.png) no-repeat;
        -webkit-background-size: cover;
        background-size: cover;
        position: absolute;
        right:-40px;
        top:-30px;
    }
    .egg2-tip span{color: #fff;font-size: 14px;}
    .egg2-tip p{font-weight: bold;font-size: 16px;color: #fff;}
    .egg{background-color: #f7ebd5;height: 60px;line-height: 60px;overflow: hidden;}
    .egg img{ float: left;}
    .egg p{float: left;}
    .egg p span{color: #ff0000;font-size: 20px;font-weight: bold;}
    .friend{      }
    .friend h2{font-weight: bold; }
</style>
