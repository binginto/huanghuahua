<template>
  <div class="app-page">
    <h3>my Work</h3>
    <ul>
      <li v-for="item in workList" :key="item.name" @click="showWork(item)">
        {{item.desc}}
      </li>
    </ul>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        workList: [{
          name: 'letters',
          desc: '跳动的文字'
        }, {
          name: 'magicSquare',
          desc: '旋转的魔方'
        }]

      }
    },
    components: {

    },
    methods: {
      showWork(item) {
        this.$router.push({
          name: 'showWork',
          query: {
            name: item.name
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .app-page {
    width: 100%;
    min-height: 100vh;
    margin: 0;
    font-family: myText;
    background: #2d303a !important;
    padding: 20px 30px;
    box-sizing: border-box;
    color: #fff;

    h3 {
      font-size: 32px;
      margin-bottom: 20px;
    }

    ul>li {
      line-height: 2em;
    }
  }
</style>