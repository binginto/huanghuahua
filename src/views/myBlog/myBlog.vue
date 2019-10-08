<template>
  <div>
    <h3>{{title}}</h3>
    <content-container></content-container>
  </div> 
</template>

<script>
import contentContainer from '../../components/contentContainer/contentContainer'
export default {
  data () {
    return {
      title: 'Blog',
      myWorkInfo: ''
    }
  },
  components: {
    contentContainer
  }
}
</script>

<style lang="scss" scoped>

</style>


