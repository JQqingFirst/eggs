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
                                <p>{{progress}}%</p>
                            </div>
                        </dd>
                    </dl>
                </div>
            </div>
        </div>
        <div class="egg">
            <img src="./images/basket.png" alt="">
            <p>共<span>{{eggNum}}</span>枚蛋</p>
            <router-link to="/address" class='fr'>提蛋 ></router-link>
        </div>
        <div class="friend">
            <h2>好友动态</h2>
            <ul>
                <li v-for='item in friendinfo'><span class="fl">{{item.name}}</span><em class="fr">{{item.time}}</em>帮您喂鸡{{item.num}}次</li>
                <li>
                    <router-link to="/friend" class='fr'>查看更多</router-link>
                </li>
            </ul>
        </div>
        <foot></foot>
    </div>
</template>
<script>
    import foot from '../common/footer/footer.vue'
    import {info} from '../../service/getdata.js'
    import {mapState, mapMutations} from 'vuex'
export default {
  name: 'mycoop',
  data () {
    return {
        progress:'',//进度
        chickenNum:2,//我领养鸡的数量
        eggNum:20,
        friendinfo:[
            {
                name:'dhy',//姓名
                action:'', //朋友做的动作
                num:2,//次数
                time:'11:00'
            },
            {
                name:'dhy',//姓名
                action:'', //朋友做的动作
                num:22,//次数
                time:'11:00'
            }
        ]
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
  .top{position:relative;min-height:400px;background:url(./images/bg.png) no-repeat;background-size:100% 100%;-webkit-background-size:100% 100%;}
.home{position:absolute;bottom:0;left:0;width:100%;height:300px;background:url(./images/checkenhome.png) no-repeat;background-size:100% 100%;-webkit-background-size:100% 100%;}
.chickens{position:absolute;bottom:0;left:10%;width:80%;height:200px;}
.chickens dl{width:100%;height:100%;}
.chickens dt{float:left;width:33.33%;height:100px;}
.chickens dt img{margin-left:10%;height:100%;}
.chickens .eggs{float:left;margin-top:20px;margin-left:30px;width:50%;}
.chickens .eggs img{width:100%;height:100%;}
.chickens .egg2{position:relative;float:left;margin-top:10px;margin-left:10px;width:33.33%;height:60px;}
.chickens .egg2 img{height:100%;}
.egg2-tip{position:absolute;top:-30px;right:-40px;width:100px;height:60px;background:url(./images/bubble.png) no-repeat;background-size:cover;-webkit-background-size:cover;}
.egg2-tip span{color:#fff;font-size:14px;}
.egg2-tip p{color:#fff;font-weight:700;font-size:16px;}
.egg{overflow:hidden;height:60px;background-color:#f7ebd5;line-height:60px;}
.egg img{float:left;}
.egg p{float:left;}
.egg p span{color:red;font-weight:700;font-size:20px;}
.friend h2{font-weight:700;}

</style>
