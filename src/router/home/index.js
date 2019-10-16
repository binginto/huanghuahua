export default [
  {
    path: '/',
    name: 'Index',
    component: () =>
      import('@/views/index/index.vue'),
  },
  {
    path: '/aboutMe',
    name: 'AboutMe',
    component: () =>
      import('@/views/aboutMe/aboutMe.vue'),
  },
  {
    path: '/myWork',
    name: 'MyWork',
    component: () =>
      import('@/views/myWork/myWork.vue'),
  },
  {
    path: '/myBlog',
    name: 'MyBlog',
    component: () =>
      import('@/views/myBlog/myBlog.vue'),
  },
  {
    path: '/contactMe',
    name: 'ContactMe',
    component: () =>
      import('@/views/contactMe/contactMe.vue'),
  },
  {
    path: '/info',
    name: 'Info',
    component: () =>
      import('@/views/info/info.vue'),
  },
  {
    path: '/showWork',
    name: 'showWork',
    component: () =>
      import('@/views/myWork/showWork.vue'),
  },

]
