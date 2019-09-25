export default [
  {
    path: '/share/article',
    name: 'shareArticle',
    component: () =>
      import('@/views/share/article.vue'),
    meta: {
      title: '胎儿监护仪用户协议'
    }
  }
]
