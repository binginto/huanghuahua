<template>
  <div class="app-page">
    <div class="box">
      <ul class="minbox">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <ol class="maxbox">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ol>
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
  .app-page {
    width: 100%;
    height: 100vh;
    background: #2d303a !important;
    overflow-y: hidden;
    -webkit-perspective: 800;
  }

  .box {
    width: 200px;
    height: 200px;
    position: relative;
    margin: 300px auto;
    -webkit-transform-style: preserve-3d;
    -webkit-transform: rotateX(13deg);
    -webkit-animation: move 5s linear infinite;
  }

  .minbox {
    width: 100px;
    height: 100px;
    position: absolute;
    left: 50px;
    top: 50px;
    -webkit-transform-style: preserve-3d;
  }

  .minbox li {
    width: 100px;
    height: 100px;
    position: absolute;
    left: 0;
    top: 0;
  }

  .minbox li:nth-child(1) {
    background: #F00;
    -webkit-transform: translateZ(50px);
  }

  .minbox li:nth-child(2) {
    background: #F60;
    -webkit-transform: rotateX(180deg) translateZ(50px);
  }

  .minbox li:nth-child(3) {
    background: #FF0;
    -webkit-transform: rotateX(-90deg) translateZ(50px);
  }

  .minbox li:nth-child(4) {
    background: #0C0;
    -webkit-transform: rotateX(90deg) translateZ(50px);
  }

  .minbox li:nth-child(5) {
    background: #06C;
    -webkit-transform: rotateY(-90deg) translateZ(50px);
  }

  .minbox li:nth-child(6) {
    background: #909;
    -webkit-transform: rotateY(90deg) translateZ(50px);
  }

  .maxbox {
    width: 200px;
    height: 200px;
    position: absolute;
    left: 0;
    top: 0;
    -webkit-transform-style: preserve-3d;
  }

  .maxbox li {
    width: 200px;
    height: 200px;
    background: #fff;
    border: 1px solid #ccc;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0.2;
    -webkit-transition: all 1s ease;
  }

  .maxbox li:nth-child(1) {
    -webkit-transform: translateZ(100px);
  }

  .maxbox li:nth-child(2) {
    -webkit-transform: rotateX(180deg) translateZ(100px);
  }

  .maxbox li:nth-child(3) {
    -webkit-transform: rotateX(-90deg) translateZ(100px);
  }

  .maxbox li:nth-child(4) {
    -webkit-transform: rotateX(90deg) translateZ(100px);
  }

  .maxbox li:nth-child(5) {
    -webkit-transform: rotateY(-90deg) translateZ(100px);
  }

  .maxbox li:nth-child(6) {
    -webkit-transform: rotateY(90deg) translateZ(100px);
  }

  .box:hover ol li:nth-child(1) {
    -webkit-transform: translateZ(300px);
  }

  .box:hover ol li:nth-child(2) {
    -webkit-transform: rotateX(180deg) translateZ(300px);
  }

  .box:hover ol li:nth-child(3) {
    -webkit-transform: rotateX(-90deg) translateZ(300px);
  }

  .box:hover ol li:nth-child(4) {
    -webkit-transform: rotateX(90deg) translateZ(300px);
  }

  .box:hover ol li:nth-child(5) {
    -webkit-transform: rotateY(-90deg) translateZ(300px);
  }

  .box:hover ol li:nth-child(6) {
    -webkit-transform: rotateY(90deg) translateZ(300px);
  }

  @keyframes move {
    0% {
      -webkit-transform: rotateX(13deg) rotateY(0deg);
    }

    100% {
      -webkit-transform: rotateX(13deg) rotateY(360deg);
    }
  }
</style>