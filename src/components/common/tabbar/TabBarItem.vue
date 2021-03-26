<template>
<!--  所有的item都展示同一个图片，同一个文字-->
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
   <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"> <slot name="item-text"></slot></div>

<!--    <slot name="item-icon"></slot>-->
<!--    <slot name="item-text"></slot>-->




<!--    <div slot="item-text">我的</div>-->
    <!--    <div>首页</div>-->
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'red'
      }
    },
    data() {
      return {
        // isActive: true
      }
    },
    computed: {
      isActive() {
        // /home ->  item1(/home) = true
        // /home ->  item1(/category) = false
        // 判断获得的这个path里面有没有我的path
        // indexOf 不等于-1 也 就是找到了
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle() {
        return this.isActive ? {color: this.activeColor} : {}
      }
    },

    methods: {
      itemClick() {
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img {
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-top: 2px;
  }
</style>
