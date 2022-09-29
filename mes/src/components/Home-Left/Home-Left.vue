<template>
  <div class="left_div">
    <div class="headPortrait">
      <div class="div_img">
        <img src="@/assets/images/img/logins.jpg" alt="" srcset="">
      </div>
      <div class="userInfo">
        <h2>admin</h2>
        <p>
          <b-icon icon="circle-fill" font-scale="0.9" variant="info"></b-icon>
          <span><a href="">在线</a> </span>
          <b-icon icon="x-circle-fill" font-scale="0.9" variant="danger"></b-icon>
          <span><a href="" @click="quit">退出</a> </span>
        </p>
      </div>
    </div>
    <div class="homeDiv">
      <b-icon icon="house-fill" font-scale="0.9" style="margin-right:5px"></b-icon>
      <span style=" font-weight: 500">首页</span>
    </div>
    <div class="manage flex_both" @click="systemArise" :style="system.font">
      <div>
        <b-icon icon=" gear-fill" font-scale="1" style="margin-right:5px"></b-icon>
        <span>系统管理</span>
      </div>
      <div>
        <!--chevron-down-->
        <b-icon :icon="system.xia" font-scale="0.9" style="margin-right:5px"></b-icon>
      </div>
    </div>
    <ul :style="system.hide">
      <router-link  v-for=" item in menuArray" :key="item.id" :to="item.to">
        <li>{{item.name}} </li>
      </router-link>
    </ul>
    
      <div class="manage flex_both" @click="moitoringArise" :style="monitoring.font">
        <div>
          <b-icon icon="eye-fill" font-scale="0.9" style="margin-right:5px"></b-icon>
          <span>系统监控</span>
        </div>
        <div>
          <b-icon :icon="monitoring.xia" font-scale="0.9" style="margin-right:5px"></b-icon>
        </div>
      </div>
      <ul :style="monitoring.hide">
      <!-- <router-link to="/Home/user" v-for=" item in menuArray" :key="item.id">
        <li>{{item.name}} </li> 
      </router-link>-->
    </ul>
  </div>
</template>
<script>
import HomeLeftItem from '../Home-Left-Item/Home-Left-Item.vue'
export default {
  name: 'Home-Left',
  data () {
    return {
      menuArray: [
        { id: "menu1", name: '用户管理',to:"/Home/user" },
        { id: "menu2", name: '角色管理',to:"/Home/user" },
        { id: "menu3", name: '菜单管理',to:"/Home/user" },
        { id: "menu4", name: '部门管理',to:"/Home/user" },
        { id: "menu5", name: '岗位管理',to:"/Home/user" },
        { id: "menu6", name: '字典管理',to:"/Home/user" },
        { id: "menu7", name: '参数管理',to:"/Home/user" },
        { id: "menu8", name: '通知广告',to:"/Home/user" },
        { id: "menu9", name: '日志管理',to:"/Home/user" },
      ],
      system: {//系统管理的
        //控制箭头向下
        xia: 'chevron-left',
        //控制整个盒子字体变色
        font: '',
        hide: 'display:none'
      },
      monitoring: {//系统监控
        xia: 'chevron-left',
        font: '',
        hide: 'display:none'
      }
    }
  },
  components: {
    HomeLeftItem
  },
  methods: {
    //控制系统管理
    systemArise () {
      if (this.system.font === '') {
        this.system.font = 'color:red'
        this.system.xia = 'chevron-down'
        this.system.hide = ''
      } else {
        this.system.font = ''
        this.system.xia = 'chevron-left'
        this.system.hide = 'display:none'
      }

    },
     //控制系统监控
    moitoringArise () {
      if (this.monitoring.font === '') {
        this.monitoring.font = 'color:red'
        this.monitoring.xia = 'chevron-down'
        this.monitoring.hide = ''
      } else {
        this.monitoring.font = ''
        this.monitoring.xia = 'chevron-left'
        this.monitoring.hide = 'display:none'
      }
    },
    //退出系统
    quit (event) {
      event.preventDefault()
      console.log('要退出了')
    }
  }
}
</script>

<style lang="less" scoped>
@import url(@/font.less);
@import url(@/layout.less);

.left_div {
  background: @backc;
  height: 100vh;
  padding: 0px 5px;

  .headPortrait {
    padding: 10px 0px;
    display: flex;

    .div_img {
      width: 45px;
      vertical-align: middle;
      overflow: hidden;
      border-radius: 50%;
      height: 45px;
      line-height: 0;

      img {
        height: 100%;
      }
    }

    .userInfo {
      padding-left: 10px;
      font-size: @fontSize ;

      h2 {
        font-size: 16px;
        font-weight: 400;
        margin: 0;
      }

      span {

        margin: 0px 5px;
      }

    }

    .homeDiv {
      display: flex;
      font-size: 12px;
    }

  }

  .manage {
    margin-top: 20px;
    padding-right: 30px;
    width: 100%;
    cursor: pointer;
  }

  ul {
    font-size: @fontSize ;
    font-weight: 550;
    list-style: none;
    padding: 10px 1px 0px 0px;

    li {
      margin: 5px 0px;
      padding: 5px 0px 5px 30px;
     
      &:hover {
        background-color: @backColor !important;
      }
    }

  
  }
}
</style>