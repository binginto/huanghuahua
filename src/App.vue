<template>
  <div id="app" @click="showText">
    <template v-for="item in textArr">
      <transition name="bounce">
        <span class="transparent" :style="{left: item.x + 'px', top: item.y + 'px' }" v-if="item.show">text</span>
      </transition>
    </template>
    <router-view />
  </div>
</template>
<script>
  export default {
    name: "app",
    data() {
      return {
        show: false,
        x: 200,
        y: 100,
        textArr: []
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
    methods: {
      showText(e) {
        const list = ['众里寻他千百度，蓦然回首，那人却在灯火阑珊处', '海内存知己，天涯若比邻', '山穷水复疑无路，柳暗花明又一村', '帘卷西风，人比黄花瘦', '人间四月芳菲尽，山寺桃花始盛开',
          '春宵一刻值千金，花有清香月有阴', '穿花蛱蝶深深见，点水蜻蜓款款飞', '沧海月明珠有泪，蓝田日暖玉生烟', '二十四桥明月夜，玉人何处教吹箫', '大江东去，浪淘尽，千古风流人物',
          '欲说还休，却道天凉好个秋', '问君能有几多愁？恰似一江春水向东流', '凤凰台上凤凰游，凤去台空江自流', '风萧萧兮易水寒，壮士一去兮不复还', '夕阳无限好，只是近黄昏',
          '寻寻觅觅，冷冷清清，凄凄惨惨戚戚'
        ];
        const lists = Math.floor(Math.random() * list.length);
        const colors = '#' + Math.floor(Math.random() * 0xffffff).toString(16);
        const $i = $('<span class="animate" />').text(list[lists]);
        const xx = e.pageX || e.clientX + document.body.scroolLeft;
        const yy = e.pageY || e.clientY + document.body.scrollTop;

        $('body').append($i);
        $i.css({
          top: yy,
          left: xx,
          color: colors,
          display: 'block',
          position: 'absolute',
          zIndex: 999
        })
        $i.animate({
          top: yy,
        }, 3000, function () {
          $i.remove();
        })
      }
    }
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

  .animate {
    animation: myfirst 3s;
    -moz-user-select: none;
    /*火狐*/
    -webkit-user-select: none;
    /*webkit浏览器*/
    -ms-user-select: none;
    /*IE10*/
    -khtml-user-select: none;
    /*早期浏览器*/
    user-select: none;
  }

  @keyframes myfirst {

    0%,
    100% {
      opacity: 0;
    }

    10% {
      opacity: 1;
    }

    100% {
      transform: translateY(-50px);
    }
  }
</style>