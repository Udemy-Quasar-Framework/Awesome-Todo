const routes = [
  {
    path: '/',
    component: () => import('layouts/Layout.vue'),
    children: [
      { name: 'todoList', path: '', component: () => import('pages/TodoPage.vue') },
      { name: 'settings', path: '/settings', component: () => import('pages/Settings.vue') },
      { name: 'edit_task', path: '/edit_task/:taskId', component: () => import('pages/EditTask.vue'), props: true },
      { name: 'authPage', path: '/auth', component: () => import('pages/AuthPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
