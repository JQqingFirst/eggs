<template>
    <div class="getegg" v-title='"领蛋"'>
    	<p> {{friend}}送给你20枚蛋，已存入您的蛋筐</p>
    	<p>关注公众号"快乐的蛋"，查看我的蛋筐</p>
    	<img :src='imgUrl'>
        <router-link to="/address" class='fr'>去填写配送地址</router-link>
    </div>
</template>
<script>
    import {info} from '../../service/getdata.js'
    import {mapState} from 'vuex'
export default {
  name: 'goldchange',
  data () {
    return {
    	friend:'',
    	num:'',
    	imgUrl:''
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
    },
    watch:{
        num:function(val,oldval){
            val>0 ?this.ischange = true : this.ischange = false
        }
    },
    filters:{
        maxfiler(v){
            return Math.ceil(v/120)
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
        height: 150px;
        background-color: #fff;
    }
    .top img{
        width: 100%;
    }
    .changesuccess img{
        width: 100%;
    }
</style>
