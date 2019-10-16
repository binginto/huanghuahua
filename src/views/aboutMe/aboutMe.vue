<template>
  <div class="app-page">
    <div id="container" class="container">

      <div class="menu-panel">
        <h3>关于我</h3>
        <ul id="menu-toc" class="menu-toc">
          <li class="menu-toc-current"><a href="#item1">介绍</a></li>
          <li><a href="#item2">爱好</a></li>
          <li><a href="#item3">技术</a></li>
          <li><a href="#item4">联系我</a></li>
        </ul>
      </div>

      <div class="bb-custom-wrapper">
        <div id="bb-bookblock" class="bb-bookblock">
          <div class="bb-item" id="item1">
            <div class="content">
              <div class="scroller">
                <h2>介绍</h2>
                <p>我是binginto,在20多年前对这个世界讲出我的第一句问好。</p>

                <p>小时候的故事已经记忆不太清楚,只是印象中小时候的自己看过好多的书。不过这里多和书都只是按着小孩子
                  角度定义，诸如《知音》,《读者》,《故事会》,《广州日报》等这类报刊或者各种XX未解之谜，或从春秋到
                  当代的中外各种故事集。所以我小时候自以为很了不起,夜郎自大，坐井观天。看了哈利波特，就想同样写一部
                  长篇巨著，借此扬名立万。最后是不了了之。
                </p>

                <p>初高中时候先后受过郭敬明先生和韩寒先生的感染。作文风格也先从我仰望45度角的天空,悲伤在心内逆流成河
                  的无厘头悲伤转为七个红灯笼，照亮我前程的无厘头愤世嫉俗。还追过一段时间韩寒先生的博客，也见证了韩寒
                  先生从嘲讽微博，绝不会发微博，140字无法表达内心的想法，再到现在几千万粉丝的真香转变。那时候有一个很
                  奇怪的想法，认为自己很聪明。一个聪明的人不需要太努力，因为我没打算去读清华，读中大就好。而我太努力
                  考到清华的分数就读中大，太亏了。所以应该懒散点。而且事实证明，我并不是一个聪明人。即使后面很努力做题,
                  还是距离中大很远,大概干掉排在我前面两万来人，才可以去中大的水平。
                </p>

                <p>大学时代跟很多人一样，雄心壮志进去，懒懒散散出来。而且大学时代已经很少看书了,只是偶尔看下小说，感受
                  里面主角的升级打怪。更多是的玩游戏，手机游戏和Pc游戏。大概打了两三千局的lol,四年下来。不过段位还是白银
                  黄金。而成绩和技能也跟段位一般，普普通通。但还是找到工作了,去了深圳的一间公司工作，一年多后又跑回广州。
                  留下的记忆就是大南山,深圳大学，科技园，和深圳臭臭的海以及高新园一套一千万的房子。
                </p>

                <p>毕业至今，已经工作3年多了。做了3年多的技术，也是时候从用轮子到造轮子的阶段转变了，也是时候构建自己的体系
                  。其实之前也定过很多规划，但大部分都无疾而终。有时候，我会跟人讲，其实我最初希望的职业不是做程序员，而是导演。等我财富自由了，我要当
                  导演。这就是单纯的想法，跟小时候扬名立望的巨著一样，不了了之是最可能的结果。但未来的事，谁知道呢？
                </p>

                <p>我跟过一些朋友讲过，人生最值钱就是希望，希望是前行的动力。我是binginto，有着对前路的期盼。希望在前行的路上，
                  我立的规划，一一成真，可以对这个世界讲出我讲过的事，我做得到！</p>

              </div>
            </div>
          </div>
          <div class="bb-item" id="item2">
            <div class="content">
              <div class="scroller">
                <h2>爱好</h2>
                <hobby></hobby>
              </div>
            </div>
          </div>
          <div class="bb-item" id="item3">
            <div class="content">
              <div class="scroller">
                <h2>技术</h2>
                <technology></technology>
              </div>
            </div>
          </div>
          <div class="bb-item" id="item4">
            <div class="content">
              <div class="scroller">
                <h2>联系我</h2>
                <contactme></contactme>
              </div>
            </div>
          </div>
        </div>

        <nav>
          <span id="bb-nav-prev">&larr;</span>
          <span id="bb-nav-next">&rarr;</span>
        </nav>

        <span id="tblcontents" class="menu-button">Table of Contents</span>

      </div>

    </div><!-- /container -->
  </div>
</template>


<script>
  import 'jquery'
  import './js/jquery.mousewheel.js'
  import './js/jquery.jscrollpane.min.js'
  import './js/jquerypp.custom.js'
  import './js/jquery.bookblock.js'
  import Page from './js/page.js'
  import hobby from './components/hobby'
  import technology from './components/technology'
  import contactme from './components/contactme'

  export default {
    data() {
      return {}
    },
    components: {
      hobby,
      technology,
      contactme
    },
    created: function () {},
    mounted() {
      Page.myPage()
      Page.myPage().init();
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  .app-page {
    font-family: myText;
    background: #fff;
    font-weight: 400;
    font-size: 100%;
    color: #333;
    height: 100vh;
  }


  @import './style/jquery.jscrollpane.custom.css';
  @import './style/bookblock.css';
  @import './style/custom.css';
</style>