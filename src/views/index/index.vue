<template>
  <div>
    <div class="new-container" @click="showText">
      <showText ref="showText"></showText>
      <nav-container></nav-container>
      <state-container></state-container>
    </div>
    <content-container></content-container>
  </div>
</template>

<script>
  import contentContainer from '@/components/contentContainer/contentContainer'
  import stateContainer from './components/stateContainer'
  import navContainer from '@/components/navContainer/navContainer'
  import showText from '@/components/showText/showText'
  export default {
    name: 'Index',
    data() {
      return {}
    },
    methods: {
      showText(e) {
        this.$refs.showText.showText(e)
      }
    },
    components: {
      contentContainer,
      stateContainer,
      navContainer,
      showText
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '@/styles/variable';
  @import '@/styles/index';
</style>