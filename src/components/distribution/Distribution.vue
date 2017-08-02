<template>
    <div class="distribution" v-title='"配送"'>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="第一次配送" name="first">第一次配送</el-tab-pane>
        <el-tab-pane label="第二次配送" name="second">第二次配送</el-tab-pane>
        <el-tab-pane label="第三次配送" name="third">第三次配送</el-tab-pane>
      </el-tabs>

    </div>
</template>
<script>
import {info} from '../../service/getdata.js'
export default {
  name: 'distribution',
  data () {
    return {
        activeName: 'second',
        distribution:{
          delay:'',
          data:'2019.11.09',
          num:3
        }
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
        handleClick(tab, event) {
          console.log(tab, event);
        }
    },
    watch:{

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

</style>
