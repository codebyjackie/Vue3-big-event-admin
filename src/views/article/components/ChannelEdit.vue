<script setup>
import {
  articleAddChannelService,
  articleEditChannelService
} from '@/api/article'
import { ref } from 'vue'

const dialogVisible = ref(false)
const formModel = ref({
  cate_name: '',
  cate_alias: ''
})
const rules = {
  cate_name: [
    { required: true, message: '请输入分类名称' },
    { pattern: /^\S{1,10}$/, message: '分类名称不能超过10个字符' }
  ],
  cate_alias: [
    { required: true, message: '请输入分类别名' },
    {
      pattern: /^[a-zA-Z0-9]{1,15}$/,
      message: '分类别名必须是不超过15位的字母或数字'
    }
  ]
}
const formRef = ref()

const open = (row) => {
  if (formRef.value) {
    formRef.value.resetFields()
  }
  dialogVisible.value = true
  formModel.value = { ...row }
}
const emit = defineEmits(['success'])
const onSubmit = async () => {
  await formRef.value.validate()
  const isEdit = formModel.value.id
  if (isEdit) {
    await articleEditChannelService(formModel.value)
    ElMessage.success('编辑成功')
  } else {
    await articleAddChannelService(formModel.value)
    ElMessage.success('添加成功')
  }
  dialogVisible.value = false
  emit('success')
}

defineExpose({
  open
})
</script>

<template>
  <el-dialog
    v-model="dialogVisible"
    :title="formModel.id ? '编辑分类' : '添加分类'"
    width="30%"
  >
    <el-form
      :model="formModel"
      :rules="rules"
      label-width="100px"
      style="padding-right: 30px"
      ref="formRef"
    >
      <el-form-item label="分类名称" prop="cate_name">
        <el-input
          placeholder="请输入分类名称"
          v-model="formModel.cate_name"
        ></el-input>
      </el-form-item>
      <el-form-item label="分类别名" prop="cate_alias">
        <el-input
          placeholder="请输入分类别名"
          v-model="formModel.cate_alias"
        ></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="onSubmit"> 确认 </el-button>
      </div>
    </template>
  </el-dialog>
</template>
