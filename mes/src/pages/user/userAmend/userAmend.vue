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
          <p><input type="text" placeholder="请用输入用户名" v-model="user.username" /></p>
          <p><input type="text" placeholder="请用输入手机号" v-model="user.userphone" /></p>
          <p><input type="text" placeholder="请用输入账号" v-model="user.userID" /></p>
          <p>
            <b-form-select id="input-3" v-model="user.userSex" required :options="sex"></b-form-select>
          </p>
          <p class="role">
            <input type="radio" name="role" id="role" class="roleRadio"><label for="role">超级管理员</label>
            &nbsp;&nbsp;&nbsp;
            <input type="radio" name="role" id="roletwo" class="roleRadio"><label for="roletwo">普通角色</label>

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
            <p> <input type="text" placeholder="请输入归属部门" v-model="user.department" /></p>
            <p><input type="email" placeholder="请输入邮箱" v-model="user.email" /></p>
            <p><input type="password" placeholder="请输入密码" v-model="user.pas" /></p>
            <p>
              <el-switch v-model="user.userStatus" active-color="#69c0ff">
              </el-switch>
            </p>

          </div>
        </div>
      </div>
    </div>
    <div style="text-align: center;">
      <b-button variant="primary" @click="present">修改</b-button>
      &nbsp;
      <b-button variant="danger" @click="reset">重置</b-button>
    </div>

  </div>
</template>
<script>
export default {
  name: 'userAmend',
  data () {
    return {
      user: {
        //用户名
        username: '',
        //手机号
        userphone: '',
        //用户账号
        userID: '',
        //用户性别
        userSex: '',
        //用户状态
        userStatus: true,
        //用户岗位
        station: true,
        //部门
        department: '',
        //邮箱
        email: '',
        //密码
        pas: '',
      },
      sex: ['男', '女'],
      queryid: '001'
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
        username: '',
        //手机号
        userphone: '',
        //用户账号
        userID: '',
        //用户性别
        userSex: '',
        //用户状态
        userStatus: true,
        //用户岗位
        station: true,
        //部门
        department: '',
        //邮箱
        email: '',
        //密码
        pas: '',
      }
      this.user = users
    },
    //提交按钮
    present () {
      if (this.user.username !== '' && this.user.userID !== '' && this.user.pas !== '') {
        //判断三个必填都写了
        if (this.testID() && this.testPas() && this.testPhone()) {
          this.$http({
            method: 'POST',
            url: 'http://localhost:3000/',
            data: this.user
          }).then((res) => {
            console.log(res)
          })
        }
      } else {
        alert('请输入必填选项')
      }
    },
    //校验手机号
    testPhone () {
      if (this.user.userphone !== '') {
        var pattern = /^1[8|5|9]\d{9}/
        if (!pattern.test(this.user.userphone))
          alert('手机号格式错误')
        return false
      }
      return true
    },
    //账号校验
    testID () {
      var pattern = /^\d{9}/
      if (!pattern.test(this.user.userID)) {
        alert('账号格式应该是9位的纯数字')
        return false
      }
      return true
    },
    //密码校验
    testPas () {
      var pattern = /^\d{6,15}/
      if (!pattern.test(this.user.pas)) {
        return false
      }
      return true
    },
    //发送用户查询asiox请求(POST)
    beg () {
      this.$http({
        method: 'POST',
        url: 'http://localhost:3000/userQuery',
        data: {
          queryid: this.queryid
        }
      }).then((res) => {
        console.log(res)
      })
    }
  },
  created () {
    this.queryid = this.$route.query.userid
    this.beg()
  }

}
</script>
<style lang="less" scoped>
@import url(@/layout.less);
@import url(@/font.less);

.userDiv {
  margin: 1px;
  background: #f5f5f5;
  min-height: 993px;
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
    padding-left: 230px;

    .left_input {
      min-width: 610px;
      // background: gainsboro;
      padding: 10px;

      .role {
        text-align: left;
        display: flex;

        input {
          width: 25px;
        }

        .roleRadio {
          width: 20px;
          height: 20px;
        }
      }

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