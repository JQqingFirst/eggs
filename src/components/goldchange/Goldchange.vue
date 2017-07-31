<template>
    <div class="goldchange" v-title='"金币对换"'>
        <div class="top">
            <span>{{name}}</span>
            <span @click='alertss()'>{{latitude}}ss</span>
        </div>
        <ul>
            <li>
            </li>
            <li>
            </li>
        </ul>
    </div>
</template>
<script>
    import {info} from '../../service/getdata.js'
    import {mapState} from 'vuex'
export default {
  name: 'goldchange',
  data () {
    return {
        name:'隔壁老王',
        address:'北京市 海淀区 永丰屯',
        gold:'800'
    }
  },
        computed: {
            ...mapState([
                'latitude'
            ]),
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
        alertss(){
            alert(this.latitude)
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
