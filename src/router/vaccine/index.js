export default [
  {
    path: '/vaccine/vaccineList',
    name: 'vaccineList',
    component: () =>
      import('@/views/vaccine/vaccineList.vue'),
    meta: {
      title: '疫苗列表'
    }
  },
  {
    path: '/vaccine/vaccineInfo',
    name: 'vaccineInfo',
    component: () =>
      import('@/views/vaccine/vaccineInfo.vue'),
    meta: {
      title: '疫苗详情'
    }
  }
]
