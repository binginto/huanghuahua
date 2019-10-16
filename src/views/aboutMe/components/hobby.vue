<template>
  <div class="circle_box">
    <div class="round" v-for="item in hobbys" :key="item" @>
      <div class="circle">
        <a>{{item}}</a>
      </div>
      <div class="circle_bottom animation "></div>
      <div class="circle_bottom2 animation2 "></div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        hobbys: [
          '爬山',
          '跑步',
          '看电影',
          '去旅游',
          '吃好吃的',
          '玩游戏',
          '恶搞视频'
        ]
      }
    },
    components: {},
    created: function () {},
    mounted() {

    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  @import '../style/hobby.scss';
</style>