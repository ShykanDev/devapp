import { createRouter, createWebHistory } from 'vue-router';
import { RouteRecordRaw } from 'vue-router';
import { getAuth } from 'firebase/auth';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: () => import ('../views/LoginPage.vue')
  },
  {
    path: '',
    redirect: '/mis-secciones'
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
  },
  {
    path: '/ai-practitioner',
    name: 'aif-overview',
    component: () => import ('../views/aifC01/AifOverview.vue')
  },
  {
    path: '/ai-practitioner/dominio/:domainId',
    name: 'aif-domain',
    component: () => import ('../views/aifC01/AifDomain.vue')
  },
  {
    path: '/ai-practitioner/task/:taskId',
    name: 'aif-task',
    component: () => import ('../views/aifC01/AifTask.vue')
  },
  {
    path: '/ai-practitioner/comparaciones',
    name: 'aif-comparisons',
    component: () => import ('../views/aifC01/AifComparisons.vue')
  },
  {
    path: '/ai-practitioner/debiles',
    name: 'aif-weak',
    component: () => import ('../views/aifC01/AifWeak.vue')
  },
  {
    path: '/ai-practitioner/repaso',
    name: 'aif-review',
    component: () => import ('../views/aifC01/AifReview.vue')
  },
  {
    path: '/ai-practitioner/practica/:scope',
    name: 'aif-practice',
    component: () => import ('../views/aifC01/AifPractice.vue')
  },
  {
    path: '/ai-practitioner/glosario',
    name: 'aif-glossary',
    component: () => import ('../views/aifC01/AifGlossary.vue')
  },
  {
    path: '/ai-practitioner/servicios',
    name: 'aif-services',
    component: () => import ('../views/aifC01/AifServices.vue')
  },
  {
    path: '/ai-practitioner/buscar',
    name: 'aif-search',
    component: () => import ('../views/aifC01/AifSearch.vue')
  },
  {
    path: '/ai-practitioner/cobertura',
    name: 'aif-coverage',
    component: () => import ('../views/aifC01/AifCoverage.vue')
  },
  {
    path: '/cloud-practitioner',
    name: 'clf-overview',
    component: () => import ('../views/clfC02/ClfOverview.vue')
  },
  {
    path: '/cloud-practitioner/dominio/:domainId',
    name: 'clf-domain',
    component: () => import ('../views/clfC02/ClfDomain.vue')
  },
  {
    path: '/cloud-practitioner/task/:taskId',
    name: 'clf-task',
    component: () => import ('../views/clfC02/ClfTask.vue')
  },
  {
    path: '/cloud-practitioner/comparaciones',
    name: 'clf-comparisons',
    component: () => import ('../views/clfC02/ClfComparisons.vue')
  },
  {
    path: '/cloud-practitioner/debiles',
    name: 'clf-weak',
    component: () => import ('../views/clfC02/ClfWeak.vue')
  },
  {
    path: '/cloud-practitioner/repaso',
    name: 'clf-review',
    component: () => import ('../views/clfC02/ClfReview.vue')
  },
  {
    path: '/cloud-practitioner/practica/:scope',
    name: 'clf-practice',
    component: () => import ('../views/clfC02/ClfPractice.vue')
  },
  {
    path: '/cloud-practitioner/glosario',
    name: 'clf-glossary',
    component: () => import ('../views/clfC02/ClfGlossary.vue')
  },
  {
    path: '/cloud-practitioner/servicios',
    name: 'clf-services',
    component: () => import ('../views/clfC02/ClfServices.vue')
  },
  {
    path: '/cloud-practitioner/buscar',
    name: 'clf-search',
    component: () => import ('../views/clfC02/ClfSearch.vue')
  },
  {
    path: '/cloud-practitioner/cobertura',
    name: 'clf-coverage',
    component: () => import ('../views/clfC02/ClfCoverage.vue')
  },
  {
    path: '/cloud-practitioner/profesional',
    name: 'clf-professional',
    component: () => import ('../views/clfC02/ClfProfessional.vue')
  },
  {
    path: '/cloud-practitioner/reconocimiento',
    name: 'clf-recognition',
    component: () => import ('../views/clfC02/ClfRecognition.vue')
  },
  {
    path: '/cloud-practitioner/evaluables',
    name: 'clf-evaluables',
    component: () => import ('../views/clfC02/ClfEvaluables.vue')
  },
  {
    path: '/cloud-practitioner/transferencia',
    name: 'clf-transfer',
    component: () => import ('../views/clfC02/ClfTransfer.vue')
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
