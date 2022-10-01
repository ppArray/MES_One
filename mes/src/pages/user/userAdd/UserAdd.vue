<template>
  <div class="userDiv">
    <div class="userAdd_top flex_both">
      <h2>基本信息</h2>
      <b-button variant="outline-primary" @click="getBack" size="sm">返回上一级</b-button>
    </div>

    <hr />
    <div class="userAdd_body flex_both">
      <div class="left_input flex_both">
        <div>
          <p><span>*</span>用户名称：</p>
          <p>手机号码：</p>
          <p><span>*</span>登录账号：</p>
          <p>用户性别：</p>

          <p>角色：</p>
        </div>
        <div>
          <p><input type="text" placeholder="请用输入用户名" v-model="user.user_name" /></p>
          <p><input type="text" placeholder="请用输入手机号" v-model="user.phonenumber" /></p>
          <p><input type="text" placeholder="请用输入账号" v-model="user.login_name" /></p>
          <p>
            <b-form-select id="input-3" v-model="user.sex" required :options="sex"></b-form-select>
          </p>

          <p>
            <b-form-checkbox id="checkbox-1" v-model="user.role" name="checkbox-1">&nbsp;
              普通角色
            </b-form-checkbox>
          </p>
        </div>
      </div>
      <div>
        <div class="left_input flex_both">
          <div>
            <p><span></span>归属部门：</p>
            <p>邮箱：</p>
            <p><span>*</span>登录密码：</p>
            <p>用户状态：</p>

          </div>
          <div>
            <p> <input type="text" placeholder="请输入归属部门" v-model="user.dept" /></p>
            <p><input type="email" placeholder="请输入邮箱" v-model="user.email" /></p>
            <p><input type="password" placeholder="请输入密码" v-model="user.passwrod" /></p>
            <p>
              <el-switch v-model="user.status" active-color="#69c0ff">
              </el-switch>
            </p>

          </div>
        </div>
      </div>
    </div>
    <div style="text-align: center;">
      <b-button variant="primary" @click="present">提交</b-button>
      &nbsp;
      <b-button variant="danger" @click="reset">重置</b-button>
    </div>

  </div>
</template>
<script>
export default {
  name: 'UserAdd',
  data () {
    return {
      user: {
        //用户名
        user_name: '',
        //手机号
        phonenumber: '',
        //用户账号
        login_name: '',
        //用户性别
        sex: '男',
        //用户状态
        status: true,
        //用户角色
        role: true,
        //部门
        dept: '',
        //邮箱
        email: '',
        //密码
        passwrod: '',
      },
      sex: ['男', '女']
    }
  },
  methods: {
    //把回上一个网页
    getBack () {
      window.history.back()
    },
    //重置按钮
    reset () {
      var users = {
        //用户名
        user_name: '',
        //手机号
        phonenumber: '',
        //用户账号
        login_name: '',
        //用户性别
        sex: '',
        //用户状态
        status: true,
        //用户岗位
        station: true,
        //部门
        dept: '',
        //邮箱
        email: '',
        //密码
        password: '',
      }
      this.user = users
    },
    //提交按钮
    present () {
      
      if (this.user.user_name !== '' && this.user.login_name !== '' && this.user.passwrod !== '') {
        //判断三个必填都写了
        // console.log(this.testPhone())
        if (this.testID()&&this.testPas()&&this.testPhone()) {
          this.$http({
            method: 'POST',
            url: '/users/userAdd',
            data:this.user
          }).then((res) => {
            if(res.status===200){
              alert('用户增加成功')
              this.getBack()
            }else{
              alert('用户增加失败')
            }
          })
        }
      } else {
        alert('请输入必填选项')
      }
    },
     //校验手机号
    testPhone () {
      if (this.user.phonenumber !== '') {
        var pattern = /^1[8|5|9]\d{9}/
        if (!pattern.test(this.user.phonenumber))
        alert('手机号格式错误')
          return false
      }
      return true
    },
    //账号校验
    testID () {
      var pattern = /^\d{9}/
      if (!pattern.test(this.user.login_name)) {
        alert('账号格式应该是9位的纯数字')
        return false
      }
      return true
    },
    //密码校验
    testPas () {
      var pattern = /^\d{5,10}/
      if (!pattern.test(this.user.passwrod)) {
        return false
      }
      return true
    }
  }
}
</script>
<style lang="less" scoped>
@import url(@/layout.less);
@import url(@/font.less);

.userDiv {
  margin: 1px;
  background: #f5f5f5;
  // min-height: 993px;
  height: 99vh;
  padding: 5px 25px;

  hr {
    margin: 5px !important;
  }

  .userAdd_top {

    h2 {
      font-size: 20px;
      margin: 0;
      padding: 0;
      color: @backColor;
    }
  }

  .userAdd_body {
    // padding-left: 230px;

    .left_input {
      min-width: 610px;
      // background: gainsboro;
      padding: 10px;

      div:first-child {
        text-align: right;
        line-height: 33px;

        p {
          span {
            color: red;
          }
        }
      }

      div:last-child {
        min-width: 450px;
        text-align: left;

        input {
          width: 100%;
          padding-left: 10px;
          height: 35px;
        }
      }

    }
  }
}
</style>