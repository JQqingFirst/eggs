<template>
    <div class="goldchange" v-title='"填写地址"'>
   <el-form :model="form" :rules="rules" ref="form" label-width="100px" class="demo-ruleForm">
      <el-form-item label="收货人"  prop="user_name">
        <el-input v-model="form.user_name" placeholder='收货人'></el-input>
      </el-form-item>
      <el-form-item label="手机号码" prop="tel">
        <el-input type="tel" v-model.number="form.tel" auto-complete="off"  placeholder='手机号码'></el-input>
      </el-form-item>
      <el-form-item label="收货地址"  prop="address">
        <el-input v-model="form.address" placeholder='收货地址'></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="warning" class='saveform' @click="submitForm('form')" size="large">确定</el-button>
      </el-form-item>
</el-form>
    </div>
</template>
<script>
    import {info,add,getDefault} from '../../service/getdata.js'
export default {
  name: 'address',
  data () {
    return {
        form: {
          user_id:'',
          user_name: '',
          tel:'',
          address:'',
          status:1      //是否默认
        },
        isform:false,
        rules: {
          user_name: [
            { required: true, message: '请输入收货人', trigger: 'blur' },
            { min: 1, max: 4, message: '长度在 1 到 4 个字符', trigger: 'blur' }
          ],
          tel:[
             { required: true, message: '手机不能为空'},
             { type: 'number', message: '手机必须为数字值'}
          ],
          address: [
            { required: true, message: '请填写楼号门派', trigger: 'blur' }
          ]
        }
      }
  },
    methods: {
        async sendform(){
            this.form.user_id = window.localStorage.getItem('user_id')
            let info = await add(this.form);
           if(info.data.code==1){
           		window.history.go(-1)
           }else{
       	    	this.$message(info.data.msg);
       		}
        },
        init() {
            let _this = this;
            let infojson={
            	user_id:window.localStorage.getItem('user_id') || 'WX123456'
            }
            let x = getDefault(infojson);
            (async function(){
                let info = await x;
                _this.form = {...info.data.result}
            })()
        },
        submitForm(formName) {
            let _this = this;
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    _this.sendform();
                } else {
                    _this.$message('提交错误');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        onSelected(data){
            this.form.address=data.province.value+' / '+data.city.value+' / '+data.area.value;
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
	.goldchange{padding:10px 15px;}
	.saveform{margin-left:-100px;}
	.top{height:354px;background-color:#fff;}
	.el-form-item{text-align:center;}
	.el-form-item__content{width:100%;}
	.el-form-item__content button{width:100%;}
</style>
