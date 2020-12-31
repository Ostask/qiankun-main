<template>
  <div id="main">
    <div class="nav">
      {{index}}
      <button @click="add">点我发消息</button>
      <router-link tag="li" :to="menu.path" class="menu-item" v-for="menu in menus" :key="menu.key">{{menu.title}}</router-link>
    </div>
    <div class="frame-wrapper">
      <router-view v-show="$route.name"></router-view>

      <div v-show="!$route.name" id="frame"></div>
    </div>
  </div>
</template>

<script>
import actions from "@/shared/actions";
import startQiankun from "@/micro"

export default {
  name: 'App',
  data(){
    return {
      index:10,
      menus : [
        {
          key: "Home",
          title: "主页",
          path: "/",
        },
        {
          key: "Login",
          title: "登录",
          path: "/login",
        },
        {
          key: "childtestApp",
          title: "Vue 子应用主页",
          path: "/child",
        },
        {
          key: "childtestAppList",
          title: "Vue 子应用列表页",
          path: "/child/list",
        }
      ]
    }
  },
   mounted() {
        startQiankun()
        // 注册一个观察者函数
        actions.onGlobalStateChange((state, prevState) => {
            // state: 变更后的状态; prevState: 变更前的状态
            console.log("主应用观察者：number 改变前的值为 ", prevState.index);
            console.log("主应用观察者：登录状态发生改变，改变后的 number 的值为 ", state.index);
        });
        actions.setGlobalState({ index:this.index });
    },
    methods:{
        add(){
            this.index++;
            
            // 登录成功后，设置 token
            actions.setGlobalState({ index:this.index });
        }
    }
}
</script>

<style lang="scss">
html,body{
  margin:0;
  height:100%;
}
</style>
<style lang="scss" scoped>
#main {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  height:100%;
  .nav{
    width:200px;
    background: rgb(27, 27, 27);
    color:#fff;
    .menu-item{
      list-style: none;
      padding:10px;
      cursor: pointer;
    }
  }
  .frame-wrapper{
    flex:1;
  }
}
</style>
