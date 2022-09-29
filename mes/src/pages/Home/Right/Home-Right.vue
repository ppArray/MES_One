<template>
  <div>
   <HomeRightTop></HomeRightTop>
     <HomeRightbody></HomeRightbody>
  </div>
</template>
<script>
import HomeRightTop from '@/pages/Home/Right/Top/Home_Right-Top.vue'
import HomeRightbody from '@/pages/Home/Right/Body/Home-Right-body.vue'
export default {
  name: 'Home-Right',
  components: {
    HomeRightTop,
    HomeRightbody
  }
}
</script>
<style lang="less" scoped>

</style>