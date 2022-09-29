<template>
  <div class="test_body">
    <HomeTop></HomeTop>
    <div class=" test_details">
      <div class="left_comp">
        <HomeLeft></HomeLeft>
      </div>
      <div class="right_comp">2</div>
    </div>
  </div>

</template>
<script>
import HomeTop from '../Home-Top/Home-Top'
import HomeLeft from '../Home-Left/Home-Left.vue'
export default {
  name: 'Home',
  components: {
    HomeTop,HomeLeft
  }
}
</script>
<style lang="less" scoped>
@import url(@/layout.less);

.test_body {
  .test_details {
    display: flex;

    .left_comp {
    width: 215px;

    }

    .right_comp {
      flex: 1;
    }
  }

}
</style>