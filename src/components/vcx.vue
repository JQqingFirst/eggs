<template>
    <div class="hello" v-title='"这是标题"'>
        <h1>{{ msg }}</h1>
        <h2>Essential Links</h2>
        <router-link :to="{ name: 'user', params: { userId: 123,password:'123456'}}">User</router-link>
        <ul>
            <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
            <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
            <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
            <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
            <br>
            <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
        </ul>
        <h2>Ecosystem</h2>
        <ul>
            <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
            <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
            <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
            <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
        </ul>  
        <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
        <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
      </el-tabs>
    </div>
</template>
<script>
    import {getBrands} from '../service/getdata.js'
export default {
    name: 'vcx',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
             activeName: 'second'
        }
    },
    methods: {
        init() {
            let reportlistjson = {
                'a': 0,
            }

            let questionjson = {
                'boardType':'ksa'
            }
            let x = getBrands({});
            (async function(){
                let findTeamsetup1 = await x;
                console.log(findTeamsetup1)
            })()
        },
           handleClick(tab, event) {
            console.log(tab, event);
          }
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
