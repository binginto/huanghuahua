<template>
  <div class="contact-page">
    <div class="bounce">
      <div>邮箱: binginto@163.com</div>
      <div>github: https://github.com/binginto</div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: 'contactMe'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .contact-page {
    width: 100%;
    height: 600px;
    -webkit-perspective: 800;

    .bounce {
      text-align: left;
      color: #2d303a;
      font-family: 'myText';
      font-size: 28px;
      white-space: nowrap;

      div {
        line-height: 2em;
      }
    }
  }
</style>