<template>
  <div class="main-box">
    <div v-for="(item, index) in dataInfo" :key="item.vaccinateTimeId">
      <div class="box-header">{{item.vaccinateTimeName}}</div>
      <div style="padding: 0 15px;">
        <div class="box-content-wrapper" v-for="(itemSub, indexSub) in item.vaccinateList" :key="itemSub.vaccinateId"
          @click="toInfo">
          <div class="">{{itemSub.vaccineName}}</div>
          <div class="right-wrapper">
            <div class="label-item" v-if="itemSub.showLabel">{{itemSub.label}}</div>
            <div class="arrow-pic"><img src="../../assets/icon_arrow.png"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
    data() {
      return {
        dataInfo: [{
          vaccinateTimeId: "1234562",
          vaccinateTimeName: "出生",
          vaccinateList: [{
            vaccinateId: "123456789",
            vaccineName: "卡戒苗",
            label: "必打",
            showLabel: " true"
          }]
        }, {
          vaccinateTimeId: "1234526",
          vaccinateTimeName: "出生",
          vaccinateList: [{
            vaccinateId: "1234567819",
            vaccineName: "卡戒苗",
            label: " 必打",
            showLabel: " true"
          }, {
            vaccinateId: "12345678f9",
            vaccineName: "卡戒苗",
            label: " 必打",
            showLabel: " true"
          }]
        }],
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
      },
      toInfo() {
        this.$router.push({
          name: 'vaccineInfo',
          id: '12345456'
        })
      }
    }
  }
</script>
<style lang="scss" type="text/scss">
  .main-box {
  .box-header {
    height: 40px;
    background: #F4F4F4;
    color: #FF789E;
    font-size: 15px;
    line-height:  20px;
    font-weight: 550;
    line-height: 40px;
    padding: 0 15px;
    box-sizing: border-box;
    text-align: left;
  }
  .box-content-wrapper {
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    border-bottom: solid 1px #F4F4F4;
    font-size: 16px;
    line-height: 22px;
    .right-wrapper {
       display: flex;
       justify-content: flex-start;
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
       .arrow-pic {
         width: 8px;
         height: 22px;
         display: flex;
         align-items: center;
         img {
           width: 100%;
           height: 16px;
         }
       }
    }
  }
  // .box-content-wrapper + .box-content-wrapper {
  //   border-top: solid 1px #F4F4F4;
  // }
}

</style>