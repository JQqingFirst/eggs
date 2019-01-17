<template>
    <div class="subUser">
        <ul>
            <li>
                <div class="block">
                    <span class="demonstration">显示总数</span>
                    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :page-size="100" layout="total, prev, pager, next" :total="1000">
                    </el-pagination>
                </div>
            </li>
            <li>{{msg2}}</li>
            <li>{{num}}</li>
            <li>{{subNum}}
                <button @click='sendDel' name='btn'>click</button>
            </li>
            <li>
                <el-button @click.native="visible = true">按钮</el-button>
            </li>
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
    </div>
</template>
<script>
import {
    Button,
    Select
} from 'element-ui'
export default {
    name: 'subUser',
    props: {
        msg2: String, //定义字符串类型
        num: Number,
    },
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
            subNum: 1000,
            visible: false
        }
    },
    methods: {
        sendDel() {
            this.subNum--;
            this.$emit('listenChange', this.subNum);
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        }
    },
    component: {}
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
