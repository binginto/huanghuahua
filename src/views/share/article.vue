<!--  -->
<template>
  <div class="main-box">
    <div class="article-container" v-if="isArticleId">
      <h3>{{articleInfo.title}}</h3>
      <div class="article-desc-wrapper">
        <span class="article-label" v-if="articleInfo.gestationalWeeks">{{articleInfo.gestationalWeeks }}</span>
        <span class="learn-num">{{articleInfo.clickCount}}人已学习</span>
      </div>
      <div class="article-content" v-html="articleInfo.content"></div>
      <down-load ref="downLoadHook"></down-load>
    </div>
    <div class="article-container" v-else>
      <div class="article-title">{{articleInfo.articleTitle}}</div>
      <div class="video-details clearfix">
        <div class="fl">{{articleInfo.author}}</div>
      </div>
      <div  class="article-text" v-html="articleInfo.articleContent"></div>
      <down-load ref="downLoadHook"></down-load>
    </div>
  </div>
</template>

<script>
import downLoad from '@/components/downLoad.vue';

export default {
  name: '',
  data () {
    return {
      articleInfo: {}
    }
  },

  props: [],

  watch: {},

  components: {
    downLoad: downLoad
  },

  computed: {
    isArticleId() {
      if (this.$route.query.articleId) {
        return true;
      } else {
        return false;
      }
    }
  },

  created () {
    this.fetchData();
  },

  methods: {
    async fetchData() {
      // 获取文章数据
      let articleId = this.$route.query.articleId ? this.$route.query.articleId: this.$route.query.hospitalArticleId;
      let url
      if (this.$route.query.articleId) {
        url = knowledgeGraphs + '/' + articleId;
      } else {
        url = pregnantNotice + '/' + articleId
      }
      const res = await this.$request(url, {}, 'GET')
      if (res) {
        this.articleInfo = res.data;
      }
    }
  }
}

</script>
<style lang="scss" type="text/scss"  >
.main-box {
  width: 100%;
  height: 100%;
}

.article-container {
  padding: 15px 15px 60px 15px;
  width: 100%;
  background: #fff;
  box-sizing: border-box;
  h3 {
    font-size: 23px;
    line-height: 33px;
    font-weight: 600;
  }
  .article-desc-wrapper {
    margin: 17px 0 ;
    span {  
      font-size: 12px;
      line-height: 17px;
    }
    .article-label {
      display: inline-block;
      color: #FF789E;
      font-size: 12px;
      line-height: 17px;
      padding: 3px 10px;
      border: 1px #FF789E solid;
      border-radius: 15px;
      margin-right: 15px;
    }
    .learn-num {
      color: #7E7E7E;
    }
  }
  .article-content {
    width:100%!important;
    box-sizing: border-box!important;
    overflow-x: hidden;
    overflow: scroll;
    -webkit-overflow-scrolling:touch;    /* 用于 ios5+ */  
    img {max-width: 100%;}
  }
}

img {max-width: 100%!important;}
.article-title{
  color:#000;
  font-size: 23px;
  line-height: 32px;
  max-height: 64px;
  font-weight: bold;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-all
}
.video-details {
  height: 50px;
  line-height: 50px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .share-icon {
    height: 50px;
    display: flex;
    align-items: center;
  } 
}
.person-num {
  margin-left: 15px;
}
.article-text{
  color: #333333;
  font-size: 18px;
  max-width:100%;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow: scroll;
  -webkit-overflow-scrolling:touch;    /* 用于 ios5+ */  
}

.headder-text {
  color: #666666;
  font-size: 12px;
  line-height: 17px;
  text-align: left;
}
</style>