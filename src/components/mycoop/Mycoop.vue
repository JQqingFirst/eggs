<template>
    <div class="mycoop" v-title='"我的鸡笼"'>
        <div class="top">
            <img src="./images/mypic.png" height="121" width="120">
            <span>{{name}}</span>
        </div>
        <ul>
            <li>
                    <span class="fl">
                        <img src="./images/coin.png" height="30" width="30">
                        {{gold}} 金币
                    </span>
                <router-link to="/goldchange">
                    <span class="fr">
                        去兑换 >
                    </span>
                </router-link>
            </li>
            <li>
                <span class="fl">
                    <img src="./images/address.png" height="30" width="30">
                    {{address}}
                </span>
                <router-link to="/address">
                    <span class="fr">
                        更改 >
                    </span>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
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
    .top{
        height: 354px;
        background-color: #fff;
    }
</style>
