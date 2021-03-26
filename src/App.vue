<template>
  <div id="app" class="wrapper">
<!--    让detail的数据不要keep-alive-->
    <keep-alive exclude = "Detail">
      <router-view/>
    </keep-alive>

    <main-tab-bar/>
  </div>
</template>
<script>

import MainTabBar from 'components/content/maintabbar/MainTabBar'
  export default {
    name: 'App',
    components: {
      MainTabBar
    }
  }
</script>

<style>
  @import "assets/css/base.css";
</style>
