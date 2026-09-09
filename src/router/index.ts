import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import { getAuth } from 'firebase/auth';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    component: () => import ('../views/LoginPage.vue')
  },
  {
    path: '',
    redirect: '/mis-secciones'
  },
  {
    path: '/folder/:id',
    component: () => import ('../views/FolderPage.vue')
  },
  {
    path: '/folder/chat',
    name:'aiChat',
    component: () => import ('../views/ChatList.vue')
  },
  {
    path: '/folder/chat/:chatId',
    name: 'aiChat-thread',
    component: () => import ('../views/AiChat.vue')
  },
  {
    path: '/enciclopedia',
    name: 'enciclopedia',
    component: () => import ('../views/EnciclopediaPage.vue')
  },
  {
    path: '/enciclopedia/categoria/:id',
    name: 'enciclopedia-temas',
    component: () => import ('../views/EnciclopediaTopics.vue')
  },
  {
    path: '/enciclopedia/tema/:id',
    name: 'enciclopedia-tema',
    component: () => import ('../views/EnciclopediaArticle.vue')
  },
  {
    path: '/mis-secciones',
    name: 'mis-secciones',
    component: () => import ('../views/MisSecciones.vue')
  },
  {
    path: '/crear-seccion',
    name: 'dynamic-create',
    component: () => import ('../views/DynamicPage.vue')
  },
  {
    path: '/page/:pageId',
    name: 'dynamic-view',
    component: () => import ('../views/DynamicPage.vue')
  },
  {
    path: '/examenes',
    name: 'examenes',
    component: () => import ('../views/Examenes.vue')
  },
  {
    path: '/examenes/crear',
    name: 'examen-create',
    component: () => import ('../views/CrearExamen.vue')
  },
  {
    path: '/examenes/:examId',
    name: 'examen-view',
    component: () => import ('../views/ExamenDetalle.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to) => {
  const user = getAuth().currentUser;

  if (to.path === '/login') {
    return user ? { name: 'mis-secciones' } : true;
  }

  if (to.path === '/' ) {
    return user ? { name: 'mis-secciones' } : { path: '/login' };
  }

  return true;
})

export default router
