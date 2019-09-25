<template>

  <!-- 成功弹出框组件 -->
  <transition>
    <div class="down-load-wrapper">
      <div class="text-panel">
        <img src="../assets/icon_logo_s@2x.png" alt="">
        <div class="text-desc">
          <p>孕e家</p>
          <p><span>智能到家</span><span>孕期无忧</span> </p>
        </div>
      </div>
      <div class="btn-panel">
        <span @click="checkApp">打开App</span>
      </div>
    </div>
  </transition>

</template>

<script>
  import { getUrlParam, userAgent } from "@/utils/tool.js";
  const checkUserAgent = userAgent()
  export default {
    data() {
      return {
        toastShow: false,
        toastMsg: '',
        toastTitle: '',
        hasApp: false
      }
    },
    props: [],
    mounted() {
      window.checkApp = this.checkApp;
    },
    created() {
    },
    methods: {
      downLoadApp() {
        const ua = checkUserAgent;
        const userAgent = navigator.userAgent.toLowerCase();
        const isWechat = userAgent.match(/MicroMessenger/i) == "micromessenger";
        let download_url;
        if (isWechat) {
          download_url = myAppLinks;
        } else {
          download_url = ua.isAndroid ? download_url_Adr : download_url_IOS;
        }
        window.location.href = download_url;
      },
      callUpApp() {
        const ua = checkUserAgent;
        const scheme_url = ua.isAndroid ? scheme_Adr : scheme_IOS;
        window.location = scheme_url;
      },
      checkApp() {
        const ua = checkUserAgent;
        const userAgent = navigator.userAgent.toLowerCase();
        const isWechat = userAgent.match(/MicroMessenger/i) == "micromessenger";
        const scheme_url = ua.isAndroid ? scheme_Adr : scheme_IOS;;
        if (isWechat) {
          this.downLoadApp();
        } else {
          const that = this;
          var timeout, t = 1200, hasApp = true;
          setTimeout(function () {
            if (hasApp) {
              that.hasApp = true;
            } else {
              that.hasApp = false;
            }
            document.body.removeChild(ifr);
          }, 1500)

          const t1 = Date.now();
          const ifr = document.createElement("iframe");
          ifr.setAttribute('src', scheme_url);
          ifr.setAttribute('style', 'display:none');
          document.body.appendChild(ifr);
          timeout = setTimeout(function () {
            const t2 = Date.now();
            if (!t1 || t2 - t1 < t + 100) {
              hasApp = false;
              that.downLoadApp();
            }
          }, t);
        }
      }
    }
  };
</script>

<style lang="scss" type="text/scss" scoped>

  .down-load-wrapper {
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100vw;
    height: 56px;
    opacity: 1;
    z-index: 99;
    background: #FF789E;
    display: flex;
    border-radius: 4px;
    justify-content: space-between;
    color: #fff;
    box-sizing: border-box;
    .text-panel {
      margin: 10px 0 10px 16px;
      display: flex;
      span { margin-right: 10px;}
      img {
        width: 36px;
        height: 36px;
      }
      .text-desc {
        margin-left: 8px;
        p { line-height: 18px; font-size: 15px; }
      }
    }

    .btn-panel {
      margin: 10px 16px 10px 0;
      width: 110px;
      height: 34px;
      border: #fff solid 1px;
      border-radius: 4px;
      text-align: center;
      line-height: 34px; 
    }

  }
</style>