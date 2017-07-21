<template>
    <div class="mycoop" v-title='"我的鸡笼"'>
        <div class="top">
            <img src="./images/mypic.png" height="121" width="120">
            <span>我的名字</span>
        </div>
        <ul>
            <li><a><img src="./images/coin.png" height="30" width="30"></a></li>
            <li><a><img src="./images/address.png" height="30" width="30"></a></li>
        </ul>
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="text">文字按钮</el-button>
    </div>
</template>
<script>
    import {info} from '../../service/getdata.js'
export default {
  name: 'mycoop',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
    methods: {
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
    },
    created() {
        // this.init()
    },
    mounted(){
        this.init();
    },
    watch: { //深度 watcher
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .top{
        height: 354px;
        background-color: #fff;
    }
</style>
