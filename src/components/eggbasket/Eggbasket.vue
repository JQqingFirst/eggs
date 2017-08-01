<template>
    <div class="mycoop" v-title='"我的蛋筐"'>
        <div class="top">
            <i class="el-icon-information"></i>
            20枚鸡蛋方可卖出或送好友
        </div>
        <div>
            <ul>
                <li v-for='item in goodlist'>{{item.good}}</li>
            </ul>
        </div>
    </div>
</template>
<script>
    import {info} from '../../service/getdata.js'
    import {mapState, mapMutations} from 'vuex'
export default {
  name: 'mycoop',
  data () {
    return {
        goodlist:[
            {
                good:'鸡蛋',
                id:"112",
                num:3,
            },
            {
                good:'鸡汤',
                id:"113",
                num:3,
            },
            {
                good:'鸡蛋',
                id:"112",
                num:20,
            },
 
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
