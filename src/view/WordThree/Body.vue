<template>
  <div class="select">
    <!--    <span>123</span>-->
    <div class="a"><span>音乐排行榜榜单显示</span></div>
    <el-form-item label="">
      <el-select v-model="formInline.region" placeholder="喜力电音榜">
        <el-option v-for="(i,index) in urlNum" :label="index" :value="index" :key="i"/>
        <!--        <el-option label="Zone two" value="beijing"/>-->
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button
          type="primary"
          @click="onSubmit"
          :disabled="isDisplay">Query
      </el-button>
    </el-form-item>
  </div>

  <el-table
      :data="tableData"
      style="width: 100%"
  >
    <el-table-column prop="songtitle" label="Songtitle" sortable/>
    <el-table-column prop="hot" label="Hot"/>
    <el-table-column prop="author" label="Author"/>
    <el-table-column prop="time" label="Time"/>
    <el-table-column prop="rank" label="Rank"/>
  </el-table>
</template>
<script>
import elmnts from "@/view/WordThree/elmnts";
import {get} from "@/api/myRequest";


export default {
  name: "BodyVue",
  setup() {


    get('api/music?name=喜力电音榜').then(data => tableData.value = data['喜力电音榜'])
    const {isDisplay, formInline, urlNum, onSubmit, tableData} = elmnts();


    return {
      tableData, formInline, onSubmit,
      urlNum, isDisplay
    }
  }
}
</script>

<style scoped>
.a {
  position: absolute;
  left: 300px;
  text-align: center;
  line-height: 30px;
}

.a span {
  color: #CDD0D6;
  font-size: 18px;
}

.select {
  display: flex;
  justify-content: center;
}

.el-select {
  left: -200px;
}

::v-deep(.el-form-item__content ) {
  right: -200px;
}
</style>
