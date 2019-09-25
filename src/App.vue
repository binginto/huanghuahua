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
      jsApiList: [
        "updateAppMessageShareData",
        "updateTimelineShareData",
        "onMenuShareTimeline",
        "onMenuShareAppMessage"
      ]
    };
  },
  /**
   * 获取当前code，请求access_token
   */
  async created() {
    this.$wx.miniProgram.getEnv(function(res) {
      console.log(res);
      console.log(res.miniprogram); // true
    });
  },
  /**
   * 申请config
   */
  async mounted() {
    const that = this;
    const href = window.location.href.split("#")[0];
    const url = that.api.getWechatConfig;
    const data = { url: href };
    let res = await that.$request(url, data, 'POST');
    if (res.code == 0) {
      let params = {
        debug: false,
        appId: res.data.appid,
        nonceStr: res.data.nonceStr,
        signature: res.data.signature,
        timestamp: res.data.timestamp,
        jsApiList: that.jsApiList
      };
      this.$wx.config(params);
    }
    this.$wx.miniProgram.getEnv(function(res) {
      console.log("输出小程序码");
      console.log(res);
      console.log(res.miniprogram); // true
    });
  },
  components: {},
  methods: {}
};
</script>

<style lang="scss">
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
