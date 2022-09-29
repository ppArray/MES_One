<template>
  <div class="topDiv">
    <div class="oneDiv">
      <div>
        <b-input-group>
          <template #prepend>
            <b-input-group-text>登录名称:</b-input-group-text>
          </template>
          <b-form-input></b-form-input>
        </b-input-group>
      </div>
      <div>
        <b-input-group>
          <template #prepend>
            <b-input-group-text>手机号码:</b-input-group-text>
          </template>
          <b-form-input></b-form-input>
        </b-input-group>
      </div>
      <div>
        <b-input-group>
          <template #prepend>
            <b-input-group-text>用户状态:</b-input-group-text>
          </template>
          <b-form-input></b-form-input>
          <template #append>
            <b-dropdown variant="outline-secondary">
              <b-dropdown-item>Action A</b-dropdown-item>
              <b-dropdown-item>Action B</b-dropdown-item>
            </b-dropdown>
          </template>
        </b-input-group>
      </div>
      <div>
        <b-input-group>
          <template #prepend>
            <b-input-group-text>创建时间:</b-input-group-text>
          </template>
          <b-form-input type="date"></b-form-input> 
          &nbsp;---&nbsp;
           <b-form-input type="date"></b-form-input>
        </b-input-group>
      </div>
    </div>
    <div class="twoDiv">
     
  <b-button pill variant="primary" size="md">
    <b-icon icon="search" ></b-icon>
    搜索
  </b-button>
  &nbsp;&nbsp;
  <b-button pill variant="warning"  size="md" style="color:aliceblue"> 
    <b-icon icon=" gear-wide" ></b-icon>
    重置
  </b-button>
    </div>
  </div>


</template>
<script>

</script>
<style lang="less" scoped>
@import url(@/font.less);
@import url(@/layout.less);

.topDiv {
  background: @backc;
  padding: 10px;
  margin: 5px;
  border-radius: 10px;
  .oneDiv{
    display: flex;
    justify-content:space-between ;
  }
  .twoDiv{
    margin-top:5px;
    text-align: center;
  }
}
</style>