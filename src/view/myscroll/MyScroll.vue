<template>
  <div>
    <v-form-render :form-json="formJson" :form-data="formData" :option-data="optionData" ref="vFormRef">
    </v-form-render>
    <el-button type="primary" @click="submitForm">Submit</el-button>
  </div>
</template>

<script setup>
import {ref, reactive} from 'vue'
import {ElMessage} from 'element-plus'
import data from './ScrollData'

const formJson = reactive(data)
const formData = reactive({})
const optionData = reactive({})
const vFormRef = ref(null)

const submitForm = () => {
  vFormRef.value.getFormData().then(formData => {
    console.log(formData)
    // Form Validation OK
    alert(JSON.stringify(formData))
  }).catch(error => {
    // Form Validation failed
    ElMessage.error(error)
  })
}
</script>