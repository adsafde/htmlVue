<template>
  <TopBar class="mylist" ref="myRef" :is-active="4"></TopBar>
  <el-table :data="data" style="width: 100%">
    <!--    <el-table-column prop="date" label="Date" width="180" />-->
    <!--    <el-table-column prop="name" label="Name"/>-->
    <el-table-column label="Name" width="300">
      <template #default="scope">
        <span v-if="!scope.row.isShow">{{ scope.row.name }}</span>
        <input type="text" v-model="scope.row.name" v-else/>
      </template>
    </el-table-column>
    <el-table-column prop="type" label="type"/>
    <el-table-column prop="province" label="province"/>
    <el-table-column prop="create_time" width="200px" label="createTime"/>
    <el-table-column prop="update_time" width="200px" label="updateTime"/>
    <el-table-column label="操作" width="300px" prop="address" align="center">
      <template #default="scope">
        <el-button type="warning" @click="edit(scope.row)">编辑</el-button>
        <el-button type="danger" @click="save(scope.row)">保存</el-button>
        <!--          <input type="text" v-model="scope.row.address" v-show="scope.row.iseditor" />-->
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
      :pager-count="11"
      layout="prev, pager, next"
      :page-count="page"
      v-model:current-page="nowPage"
      prev-text="上一页"
      next-text="下一页"
  ></el-pagination>

</template>
<script>
import {get} from "@/api/myRequest";
import {ref, watch} from "vue";
import {useRouter} from 'vue-router'
import TopBar from "@/components/TopBar";
import {ElMessage} from "element-plus";

const myRef = ref()
const data = ref([])
const page = ref()
const getData = async () => {
  try {
    const value = (await get('/api/auth/1'))
    data.value = value.datas
    page.value = value.page_len
    console.log(page.value)
  } catch (e) {
    console.log(e.message)
  }
}


const nowPage = ref(1)
watch(nowPage,
    async (pages) => {
      data.value = []
      try {
        const value = (await get(`/api/auth/${pages}`))
        data.value = value.datas
      } catch (e) {
        console.log(e, 123)
      }
    })

const error = () => {
  ElMessage({
    message: 'Warning, this is a warning message24hh.',
    type: 'error',
  })
}


const edit = (scope) => {
  scope.isShow = true
  console.log(scope)
}
const save = (scope) => {
  scope.isShow = false
}
export default {
  name: "MyEcharts",
  components: {TopBar},
  setup() {
    const route = useRouter()
    const push = () => {
      route.push('http://localhost/api/index')
    }
    getData()
    return {
      data, push, myRef, page,
      nowPage, error, edit, save
    }
  }
}
</script>

<style scoped>
.el-table--fit {
  height: 840px;
}

:deep(.cell) {
  color: #0c5460;
}

.el-pagination {
  justify-content: center;
  position: relative;
  bottom: -30px;
}

.el-row {
  justify-content: center;
}

/*.mb-2 {*/
/*  position: absolute;*/
/*  left: 0;*/
/*  right: 0;*/
/*  bottom: -10px;*/
/*}*/

.disTest {
  display: flex;
}

:deep(.el-pager li.is-active) {
  font-size: 16px;
}

</style>
