<template>
  <div class="test">

    <div class="test_login">
      <header class="textAlign">
        <h2>登录小工单</h2>
      </header>
      <div class="phoneAndName flex_both">
        <span v-if="form.phone_show" style="font-weight:700"> 手机号登录 </span>
        <span @click="chap" v-else id="phoneche"> 手机号登录 </span>
        <span v-if="form.name_show" style="font-weight:700"> 账号登录 </span>
        <span @click="chap" v-else id="nameche"> 账号登录 </span>
      </div>
      <div class="row flex_vertical ">
        <b-form @submit="onSubmit">
          <b-input-group class="mb-2 mr-sm-2 mb-sm-0" v-if="form.name_show" prepend="账号">
            <b-form-input id="inline-form-input-username" placeholder="请输入账号" v-model="form.name"></b-form-input>
          </b-input-group>

          <b-input-group prepend="手机" class="mb-2 mr-sm-2 mb-sm-0" v-if="form.phone_show">
            <b-form-input id="inline-form-input-username" placeholder="请输入手机号" v-model="form.phone"></b-form-input>
          </b-input-group>
          <br />
          <b-input-group prepend="密码" class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input id="inline-form-input-pas" type="password" placeholder="请输入密码" v-model="form.pas">
            </b-form-input>
          </b-input-group>
          <div class="row_but textAlign flex_both">
            <b-button type="submit" variant="primary">登录</b-button>
            <!-- <b-button type="reset" variant="danger">注册</b-button> -->
            <!-- &nbsp;
            -->
          </div>
          <b-form-checkbox id="checkbox-1" v-model="form.status" name="checkbox-1" size="lg" class="leftNone"
            checked="form.status">
            <span>保持登录</span>
          </b-form-checkbox>
        </b-form>
      </div>
      <b-modal v-model="modalShow">{{write_font}}</b-modal>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      form: {
        name: '',
        pas: '',
        phone: '',
        //控制账号输入显示
        name_show: false,
        //控手机号输入显示
        phone_show: true,
        //是否保存登录 
        status: true,
      },
      modalShow: false,
      write_font: '',
    }
  },
  methods: {
    onSubmit (event) {
      event.preventDefault()
      console.log(this.form.name, this.form.pas, this.form.phone)
      location.href='#/home'
      if (this.form.phone_show) {
        //表示为使用手机号登录
        if (this.form.phone !== '') {
          if (this.testPas()) {
            var pattern = /^1[8|5|9]\d{9}/
            if (pattern.test(this.form.phone)) {
              //如果是手机号
              this.$http({
                method: 'POST',
                url: '/api/login',
                data: {
                  type: 'phone',
                  save:this.form.status,
                  phone: this.form.phone,
                  name:'',
                  pas: this.form.pas
                }
              }).then((okk) => {
                console.log(okk)
              
              })
            } else {
              this.write_font = '请输入正确的手机格式',
                this.modalShow = !this.modalShow
            }
          }
        } else {
          this.write_font = '请输入手机号码',
            this.modalShow = !this.modalShow
        }
      } else {
        //表示为账号登录 
        if (this.form.name !== '') {
          if (testPas ()) {
            var pattern = /^\d{9}/
            if (pattern.test(this.form.name)) { 
              this.$http({
                method: 'POST',
                url: '/api/login',
                data: {
                  //代表账号登录
                  type: 'name',
                  //代表是否保持登录  
                  save: this.form.status,
                  phone:'',
                  name: this.form.name,
                  pas: this.form.pas
                }
              }).then((okk) => {
                console.log(okk)
              })
            } else {
              this.write_font = '请输入正确的账号格式',
                this.modalShow = !this.modalShow
            }
          }
        } else {
          this.write_font = '请输入账号',
            this.modalShow = !this.modalShow
        }
      }


    },
    chap (e) {
      if (e.target.id === 'phoneche') {
        //当点击手机时
        this.form.name_show = false
        this.form.phone_show = true
      } else {
        //当点击账号时
        this.form.name_show = true
        this.form.phone_show = false
      }
    },
    //判断是否输入了密码
    testPas () {
      if (this.form.pas !== '') {
        var pattern = /^\d{6,15}/
        if (pattern.test(this.form.pas)) { 
          return true
        } else {
          this.write_font = '输入正确的密码格式',
         this.modalShow = !this.modalShow
        }
        
      } else {
        this.write_font = '请输入密码',
         this.modalShow = !this.modalShow
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import url('@/font.less');
@import url('@/layout.less');

.test {
  width: 100%;
  height: 100vh;
  background-image: url('@/assets/images/img/logins.jpg');
  background-size: 100% 100%;
  position: relative;

  span {
    font-size: @fontSize;
  }

  .test_login {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 350px;
    overflow: hidden;
    border-radius: 15px;
    background-color: @backc;
    opacity: 1;
    header {
      padding: 45px 10px 20px 10px;

      .spanmosi {
        cursor: pointer;
      }

      h2 {
        font-size: 24px;
        font-weight: 700;
      }
    }

    .phoneAndName {
      padding: 0px 25px;
    }

    .row {
      padding: 20px 25px 25px 25px;

      .leftNone {
        padding-left: 0px !important;

        span {
          margin-left: 5px;
        }

      }

      button {
        width: 100%;
      }



      .row_but {
        margin-top: 15px;
        margin-bottom: 20px;
      }
    }
  }
}
</style>