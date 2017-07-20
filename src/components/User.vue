<template>
    <div class="hello" v-title='"这是标题"'>
        <h1>{{ msg }} {{this.$route.params}}</h1>
        <h2>Essential Links</h2>
        <button @click='handerClick'>click</button>
        <sub-user :msg2='message' :num='num' v-on:listenChange='showchange'></sub-user>
    </div>
</template>
<script>
import subUser from './children/subUser.vue'
export default {
    name: 'vcx',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
            message:'我叫董海洋',
            num:1
        }
    },
    methods: {
        init() {
        },
        handerClick(){
            this.num++
        },
        showchange:function(data){
            console.log(data);
        }
    },
    components:{
        subUser
    },
    watch: { //深度 watcher
    },
    created() {
        this.init()
    },
    directives: { //打开弹窗后自动焦点
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1,
    h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
