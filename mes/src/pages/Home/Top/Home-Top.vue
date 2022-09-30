<template>
  <div class="div_header flex_both">
    <div class="title_div">
      <h2>MES后台管理系统</h2>
    </div>
    <div class="marRigth">
      <div class="div_img">
        <img src="@/assets/images/img/logins.jpg" alt="" srcset="">
      </div>
      <span>
        {{user_name}}
      </span>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      user_name: ' 若依'
    }
  }
}
</script>
<style lang="less" scoped>
@import url(@/font.less);
@import url(@/layout.less);

* {
  margin: 0;
  padding: 0;
}

.div_header {
  height: 40px;
  line-height: 40px;
  background-color: @backColor;

  .title_div {
    padding-left: 10px;

    h2 {
      line-height: 40px;
      font-size: 20px;
      font-weight: 700;
    }
  }

  .marRigth {
    // margin-right: 5px;
    padding: 0px 10px 0px 25px;
    background-color: #40a9ff;
    display: flex;
    align-items: center;

    .div_img {
      width: 25px;
      vertical-align: middle;
      overflow: hidden;
      border-radius: 50%;
      height: 25px;
      line-height: 0;

      img {
        height: 100%;
      }
    }

    span {
      margin-left: 5px;
      font-size: @fontSize;
      color: white
    }
  }
}
</style>