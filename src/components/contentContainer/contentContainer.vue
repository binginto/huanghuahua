<template>
  <div id="blog" class="main-container" v-if="info.length > 0">
    <div class="main-item two-colums three-colums" v-for="item in info">
      <div class="item" @click.stop="toInfo(item.id)">
        <img :src="item.banner">
        <div class="main-text">
          <h3>{{item.title}}</h3>
          <p>{{item.introduction}}</p>
        </div>
        <div class="bottom-text">
          <div>
            <p class="author">{{item.author}}</p>
            <p class="time">{{item.createdAt}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import util from '@/views/util/util'
  import info from '@/config/info.js'
  export default {
    data() {
      return {
        info: info
      }
    },
    created() {},
    methods: {
      toInfo(id) {
        console.log(info)
        this.$router.push({
          path: '/info?id=' + id
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/styles/variable';

  .main-container {
    padding: 30px 15vw;
    background: #eee;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex: 1 1 auto;
    width: 100%;
    box-sizing: border-box;
  }

  .main-item {
    flex: 0 1 100%;
    max-width: 100%;
    padding: 0 20px 30px;
    box-sizing: border-box;
    background: #eee;
    height: 380px;

    img {
      width: 100%;
      height: 150px;
      border-radius: 15px 15px 0 0;
      margin-bottom: 10px;
    }
  }


  .main-item:hover {
    opacity: 0.6;
    animation: mymove infinite;
    animation-duration: 1s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }

  @keyframes mymove {
    from {
      top: 0;
    }

    to {
      top: -15px;
    }
  }

  @media (min-width: 768px) {
    .two-colums {
      flex: 0 1 50%;
      max-width: 50%;

      img {
        width: 100%;
        height: 150px;
      }
    }
  }

  @media (min-width: 992px) {
    .three-colums {
      flex: 0 1 33.333%;
      max-width: 33.333%;

      img {
        width: 100%;
        height: 150px;
      }
    }
  }

  .item {
    background: #fff;
    height: 100%;
    border-radius: 15px;
  }

  .main-text {
    padding: 0 15px;
    box-sizing: border-box;
    width: 100%;
    height: 110px;
    border-bottom: 1px solid #eee;

    h3 {
      width: 100%;
      margin: 0;
      font-size: 21px;
      font-weight: 700;
      color: #191819;
      font-family: Quarto A, Quarto B, Baskerville, Baskerville Old Face, Hoefler Text, Garamond, Times New Roman, serif;
      margin-bottom: 15px;
      line-height: 1.2;
      letter-spacing: -.01em;
    }

    h3:hover {
      color: #0dc3ad;
    }

    p {
      width: 100%;
      margin: 0;
      color: #505153;
      font-size: 15px;
      line-height: 1.5;
      text-align: left;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }

  .bottom-text {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    height: 80px;

    div {
      height: 36px;
      text-align: left;
      padding-left: 30px;
      color: #aaa;
      font-family: Avenir Next W01 Light, Helvetica Neue, helvetica, arial, sans-serif;
    }

    p {
      width: 100%;
      line-height: 18px;
      font-size: 14px;
      margin: 0;
    }

  }
</style>