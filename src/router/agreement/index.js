export default [
  {
    path: '/agreement/fetalmonitor',
    name: 'fetalmonitor',
    component: () =>
      import('@/views/agreement/fetalmonitor/index.vue'),
    meta: {
      title: '胎儿监护仪用户协议'
    }
  }
]
