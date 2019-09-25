import Vue from 'vue'
import Router from 'vue-router'
import home from './home'
import agreement from './agreement'
import share from './share'
import vaccine from './vaccine'
import resource from './resource'

Vue.use(Router)

export default new Router({
  routes: [
    ...home,
    ...agreement,
    ...share,
    ...vaccine,
    ...resource
  ]
})
