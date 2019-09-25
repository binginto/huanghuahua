<template>
  <div class="main-page">
    <div class="main-header-box">
      <div class="header-wrapper">
        <div class="header-name-text">{{dataInfo.vaccineName}}</div>
        <div class="label-item">{{dataInfo.label}}</div>
      </div>
      <div class="header-desc-text">{{dataInfo.vaccinateTimeName}}</div>
    </div>
    <div>
      <div class="main-content-box" v-for="(item, index) in dataInfo.contentList" :key="index">
        <div class="content-header">{{item.title}}</div>
        <div class="content-text">{{item.content}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
    data() {
      return {
        dataInfo: {
          vaccinateId: "123456789",
          vaccineName: "卡戒苗",
          vaccinateTimeName: "出生",
          label: "自费",
          contentList: [{
            title: "疫苗简介",
            content: "HHJHJJJjskjsksksk"
          }, {
            title: "疫苗简介",
            content: "HHJHJJJjskjsksksk"
          }]
        },
      }
    },

    props: [],

    watch: {},

    components: {},

    computed: {},

    created() {
      this.fetchData();
    },

    methods: {
      async fetchData() {
        // 获取文章数据
        let articleId = this.$route.query.articleId ? this.$route.query.articleId : this.$route.query
          .hospitalArticleId;
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
<style lang="scss" type="text/scss">
  .main-page {
  background: #F9F9F9;
  min-height: 100vh;
  overflow-x: hidden; 
  .main-header-box {
    padding: 15px;
    background: #fff;
    margin-bottom: 10px;
    .header-wrapper {
      display: flex;
      margin-bottom: 10px;
      .header-name-text {
        color: #222;
        font-weight: 550;
        font-size: 16px;
        line-height: 22px;
        margin-right: 15px;
      }
      .label-item {
        background: #7ED321;
        padding: 3px 8px;
        color: #fff;
        font-size: 12px;
        line-height: 17px;
        height: 17px;
        font-weight: 550;
        border-radius: 11px;
        margin-right: 10px;
      }
    }
    .header-desc-text {
      color: #999;
      font-size: 14px;
      line-height: 20px;
      text-align: left;
    }
  }
  .main-content-box {
    padding: 0 15px 15px;
    background: #fff;
    margin-bottom: 10px;
    .content-header {
      color: #FF789E;
      font-size: 18px;
      line-height: 26px;
      font-weight: 550;
      text-align: left;
      padding: 15px 0;
    }
    .content-text {
      font-size: 16px;
      line-height: 26px;
      color: #222;
      text-align: left;
    }
  }
}

</style>