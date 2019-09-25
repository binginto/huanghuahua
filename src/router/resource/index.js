export default [
  {
    path: '/resource/article',
    name: 'resourceArticle',
    component: () =>
      import('@/views/resource/article.vue'),
    meta: {
      title: ''
    }
  }
]
