<template>
    <div class="goldchange" v-title='"填写地址"'>
   <el-form :model="form" :rules="rules" ref="form" label-width="100px" class="demo-ruleForm">
      <el-form-item label="收货人"  prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>

      <el-form-item label="手机号码" prop="miobile">
        <el-input type="miobile" v-model.number="form.miobile" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="收货地址"  prop="address">
        <el-input v-model="form.address" @focus = "showdistpicker=true"></el-input>
        </el-form-item>
      <el-form-item label="楼号门牌"  prop="detialAdd">
        <el-input v-model="form.detialAdd"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="warning" class='saveform' @click="submitForm('form')" size="large" :disabled="!isform">确定</el-button>
      </el-form-item>
</el-form> 
<v-distpicker type="mobile" @selected="onSelected" v-show='showdistpicker'></v-distpicker>
    </div>
</template>
<script>
    import {info} from '../../service/getdata.js'
    import VDistpicker from 'v-distpicker'
export default {
  name: 'goldchange',
  data () {
    return {
        showdistpicker:false,
        form: {
          name: '',
          miobile:'',
          address:'',
          detialAdd:''
        },
        isform:false,
        rules: {
          name: [
            { required: true, message: '请输入收货人', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
          ],
          miobile:[
             { required: true, message: '手机不能为空'},
             { type: 'number', message: '手机必须为数字值'}
          ],
          address:[
             { required: true, message: '地址不能为空'}
          ],
          detialAdd: [
            { required: true, message: '请填写楼号门派', trigger: 'blur' }
          ]
        }
      }
  },
  components: { VDistpicker },
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
          submitForm(formName) {
            this.$refs[formName].validate((valid) => {
              if (valid) {
                alert('submit!');
              } else {
                console.log('error submit!!');
                return false;
              }
            });
          },
          resetForm(formName) {
            this.$refs[formName].resetFields();
          },
          onSelected(data){
            this.form.address=data.province.value+' / '+data.city.value+' / '+data.area.value;
            this.showdistpicker =false
          }
    },
    watch:{
        form:{
            handler(val,oldval){
                console.log(val);
　　　　　　　　if(val.name&&val.miobile&&val.address&&val.detialAdd){
                    this.isform = true
                }else{
                    this.isform = false
                }
　　　　　　},
　　　　　　deep:true
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
    .goldchange{
        padding: 10px 15px;
    }
    .saveform{
        margin-left: -100px;
    }
    .top{
        height: 354px;
        background-color: #fff;
    }
</style>
