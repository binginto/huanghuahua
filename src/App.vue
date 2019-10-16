<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
  export default {
    name: "app",
    data() {
      return {
        show: false
      };
    },
    /**
     * 获取当前code，请求access_token
     */
    async created() {
      this.$wx.miniProgram.getEnv(function (res) {
        console.log(res);
        console.log(res.miniprogram); // true
      });
    },
    /**
     * 申请config
     */
    async mounted() {},
    components: {},
    methods: {}
  };
</script>

<style lang="scss">
  @import '@/styles/variable';
  @import '@/styles/init';

  @font-face {
    font-family: myText;
    src: url('./assets/myText.ttf');
  }

  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    overflow-x: hidden;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>