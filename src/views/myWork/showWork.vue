<template>
  <div class="app-page">
    <letters v-show="currentName == 'letters'"></letters>
    <magicSquare v-show="currentName == 'magicSquare'"></magicSquare>
  </div>
</template>

<script>
  import letters from './work/letters'
  import magicSquare from './work/magicSquare'
  export default {
    data() {
      return {
        headTitle: 'my work',
        currentName: ''
      }
    },
    components: {
      letters,
      magicSquare
    },
    created() {
      if (this.$route.query.name) {
        this.currentName = this.$route.query.name
      }
      console.log(this.currentName)
    },
  }
</script>

<style lang="scss" scoped>
  .app-page {
    width: 100%;
    height: 100vh;
    margin: 0;
    background: #2d303a !important;
    overflow-y: hidden;
  }
</style>