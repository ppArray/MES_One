<template>
  <div>
    <el-pagination background layout="prev, pager, next" :total="10">
    </el-pagination>

  </div>
</template>
<script>
//这个是分页组件
export default {
  name: 'Paging',
  props: {
    //有多少条数据
    currentPage: {
      default: 10,
      type: Number
    },
    presenting: {
      default: 1,
      type: Number
    }
  },
}
</script>
<style lang="less" scoped>

</style>