<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :top-images="topImages"/>
  </div>
</template>

<script>
  import DetailNavBar from './childComps/DetailNavBar'
  import DetailSwiper from './childComps/DetailSwiper'

  import {getDetail} from 'networks/detail'

  export default {
    name: "Detail",
    components: {
     DetailNavBar,
      DetailSwiper
    },
    data() {
      return {
        id: null,
        topImages: []
      }
    },
    created() {
      //1.保存传入的iid
      // console.log(this.$route.params);
      this.id = this.$route.params.id

      // 2.根据iid请求详情数据
   getDetail(this.id).then(res => {
     // 1.获取顶部的图片轮播数据
     // console.log(res);
      this.topImages = res.result.itemInfo.topImages
   })
    }
  }
</script>

<style scoped>

</style>
