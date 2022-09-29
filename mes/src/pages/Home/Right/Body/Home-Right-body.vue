<template>
  <div class="bodyDiv">
    <div class="divBut flex_both">
      <div class="but">
        <router-link to="/userAdd">
          <b-button variant="primary">
            <b-icon icon="plus-lg"></b-icon>
            新增
          </b-button>
        </router-link>


        <b-button variant="info" style="color:aliceblue">
          <b-icon icon="arrow-bar-up"></b-icon>
          导出
        </b-button>
        <b-button variant="warning" style="color:aliceblue">
          <b-icon icon="arrow-bar-down"></b-icon>
          导入
        </b-button>
      </div>
      <div>2</div>
    </div>
    <div class="divForm">
      <table class="divTable">
        <thead>
          <tr>
            <td>
              <input type="checkbox" name="" id="">
            </td>
            <td>
              用户ID
            </td>
            <td>
              登录名称
            </td>
            <td>
              用户名称
            </td>
            <td>
              部门
            </td>
            <td>
              手机
            </td>
            <td>
              用户状态
            </td>
            <td>
              创建时间
            </td>
            <td>
              操作
            </td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item,index in userArray" :key="item.id">
            <td>
              <input type="checkbox" name="" id="" :checked="item.status" v-model="item.status">
            </td>
            <td>
              {{ item.id}}
            </td>
            <td>
              {{item.accountName}}
            </td>
            <td>
              {{item.username}}
            </td>
            <td>
              {{item.department}}
            </td>
            <td>
              {{item.phone}}
            </td>
            <td>
              <el-switch v-model="item.userStatus" active-color="#69c0ff">
              </el-switch>
            </td>
            <td>
              {{item.date}}
            </td>
            <td>

              <b-button variant="success" size="sm" @click="go(item.id)">
                <b-icon icon=" pencil-square"></b-icon>
                修改
              </b-button>
              &nbsp;
              <b-button variant="danger" size="sm" @click="delect(item.id)">
                <b-icon icon="x-lg"></b-icon>
                删除
              </b-button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="pagingDiv">
        <Paging :currentPage="currentPage"></Paging>
      </div>
    </div>
  </div>
</template>
<script>
import Paging from '@/components/paging/Paging.vue'

export default {
  name: 'Home-Right-body',
  data () {
    return {
      userArray: [
        { status: false, id: 'user01', accountName: 'admin', username: '若依', department: '测试部门', phone: '18574646752', userStatus: true, date: '2022-02-05 10:23:07' },
        { status: false, id: 'user02', accountName: 'min', username: '小胖是渣男', department: '生产部门', phone: '11574646752', userStatus: true, date: '2022-01-08 10:23:07' }
      ],
      //总数据的条数
      currentPage: 2,
      //当前页数：
      presenting: 1,
      table: {
        checkAll: false
      }
    }
  },
  //组件刚开始加载时
  created () {
    this.beg()
   },
  methods: {
    //发送axios的请求
    beg () {
      console.log('发送请求')
    },
    //判断所有是否全选了所有用户
    AllUser () {
      this.userArray.some(item)
    },
    //跳转页面并传参
    go (id) {
      this.$router.push({
        path: "/userAmend?userid=" + id
      });
    },
    //删除用户axios请求(post)
    delect (id) {
      console.log(id)
      this.$http({
        method: 'POST',
        url: '',
        data: {
          delectId:id
        }
      }).then((res) => {
        console.log(res)
      })
    }
  },
  //注册一个组件
  components: {
    Paging
  }
}
</script>
<style lang="less" scoped>
@import url(@/font.less);
@import url(@/layout.less);

.bodyDiv {
  margin: 5px;
  background: @backc;
  border-radius: 10px;
  padding: 10px;

  .divBut {
    .but {
      button {
        margin: 5px;
      }
    }
  }

  .divForm {
    margin-top: 10px;
    min-height: 760px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .divTable {
      width: 100%;
      text-align: center;
      background: whitesmoke;

      thead {
        background: gainsboro;
        height: 40px;
      }

      tbody {
        line-height: 40px;

        td:first-child {
          padding-left: 10px;
        }

      }

    }

    .pagingDiv {
      text-align: center;
    }
  }
}
</style>