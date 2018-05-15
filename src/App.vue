<template>
  <el-container id="app">
    <el-header>
      <div class="logo"></div>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-row class="tac">
          <el-col>
            <el-menu
              default-active="/"
              class="el-menu-vertical-demo"
              router
              @open="handleOpen"
              @close="handleClose">
              <el-menu-item index="/" style="margin-top: 0;">
                <span slot="title">平台账号</span>
              </el-menu-item>
              <el-submenu index="2">
                <template slot="title">
                  <span>机构管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="2-1">机构列表</el-menu-item>
                  <el-menu-item index="2-2">支行列表</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-menu-item index="/InstitutionalAccount">
                <span slot="title">机构账号</span>
              </el-menu-item>
              <el-menu-item index="/ProductManagement">
                <span slot="title">产品管理</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>

export default {
  name: 'App',
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style lang="less">
  @import '~less-vars';
  html,body{
    margin: 0;
    padding: 0;
    min-height: 100%;
    height: 100%;
    background: #ededed;
    min-width: 1200px;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100%;
}
  .el-container{
    min-height: 100%;
  }
  .el-header{
    background-color: @background;
    color: #333;
    text-align: center;
  }
  .el-header .logo{
    height: 32px;
    width: 160px;
    background: rgba(255, 255, 255, .2);
    margin-top: 14px;
  }
  .el-aside {
    background-color: @background;
    color: #333;
    text-align: center;
    .tac ul{
      background: @background;
    }
  }
  .el-main{
    background: #fff !important;
    margin: 16px;
    text-align: left !important;
  }
  .el-menu{
    border-right: 0;
  }
  .el-menu-item{
    color: rgba(255, 255, 255, 0.65)
  }
  .el-menu-item:focus, .el-menu-item:hover{
    background: transparent;
    color: #fff;
  }
   .el-submenu__title:hover{
     background: transparent;
     color: #fff;
   }
  .el-menu-item.is-active{
    color: #fff;
    background: @color;
  }
  .el-menu-item, .el-submenu__title,
  .el-submenu .el-menu-item{
    line-height: 40px;
    height: 40px;
    margin-top: 4px;
    margin-bottom: 8px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }
.el-submenu__title{
    height: 40px;
    line-height: 40px;
    margin-top: 4px;
    margin-bottom: 8px;
    color: rgba(255, 255, 255, 0.65)
  }
  .el-menu{
    background: @background;
  }
  .el-menu-item-group__title{
    padding: 0;
  }
</style>
