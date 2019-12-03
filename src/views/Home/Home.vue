<template>
  <div>
    <i-form :model="formValidate" :rules="ruleValidate">
      <i-form-item label="用户名" prop="name">
        <i-input v-model="formValidate.name"></i-input>
      </i-form-item>
      <i-form-item label="邮箱" prop="mail">
        <i-input v-model="formValidate.mail"></i-input>
      </i-form-item>
    </i-form>
    <Parent></Parent>
    <md-time></md-time>
    <div>组件 A</div>
    <components-b></components-b>
  </div>
</template>
<script>
import iForm from './form'
import iFormItem from './form-item'
import iInput from '../../components/input'
import Parent from './parent'
import MdTime from 'components/Time'
import componentsB from './components-b'
export default {
  name: 'componentA',
  components: {
    iForm,
    iFormItem,
    iInput,
    Parent,
    MdTime,
    componentsB
  },
  data () {
    return {
      formValidate: {
        name: '',
        mail: ''
      },
      ruleValidate: {
        name: [
          { required: true, message: '用户名不能为空', trigger: 'blur' }
        ],
        mail: [
          { required: true, message: '邮箱不能为空', trigger: 'blur' },
          { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    sayHell () {
      console.log('hell vue.jg')
    }
  }
}
</script>
