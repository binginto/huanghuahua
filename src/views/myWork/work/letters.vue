<template>
  <div class="app-page">
    <div class="bounce">
      <span class="letter">跳</span>
      <span class="letter">动</span>
      <span class="letter">的</span>
      <span class="letter">文</span>
      <span class="letter">字</span>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        headTitle: 'my work',
        tips: '敬请期待待',
        tipsText: ['敬', '请', '期', '待', '!']
      }
    },
    components: {

    }
  }
</script>

<style lang="scss" scoped>
  .app-page {
    width: 100%;
    height: 100vh;
    margin: 0;
    background: #2d303a !important;
    overflow-y: hidden;
  }

  .bounce {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    color: white;
    height: 100%;
    font: normal bold 6rem "Product Sans", sans-serif;
    white-space: nowrap;
  }

  .letter {
    animation: bounce 0.75s cubic-bezier(0.05, 0, 0.2, 1) infinite alternate;
    display: inline-block;
    transform: translate3d(0, 0, 0);
    margin-top: 0.5em;
    text-shadow: rgba(255, 255, 255, 0.4) 0 0 0.05em;
    font: normal 500 6rem 'Varela Round', sans-serif;
  }

  .letter:nth-child(1) {
    animation-delay: 0s;
  }

  .letter:nth-child(2) {
    animation-delay: 0.0833333333s;
  }

  .letter:nth-child(3) {
    animation-delay: 0.1666666667s;
  }

  .letter:nth-child(4) {
    animation-delay: 0.25s;
  }

  .letter:nth-child(5) {
    animation-delay: 0.3333333333s;
  }

  .letter:nth-child(6) {
    animation-delay: 0.4166666667s;
  }


  @keyframes bounce {
    0% {
      transform: translate3d(0, 0, 0);
      text-shadow: rgba(255, 255, 255, 0.4) 0 0 0.05em;
    }

    100% {
      transform: translate3d(0, -1em, 0);
      text-shadow: rgba(255, 255, 255, 0.4) 0 1em 0.35em;
    }
  }
</style>