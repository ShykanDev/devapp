import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/**
 * Ionic Dark Mode (clase .ion-palette-dark sobre <html>)
 * -----------------------------------------------------
 * El dark mode NO sigue al sistema: se controla con el toggle del menú
 * (ver src/theme/store.ts). El import .class.css solo define las variables
 * cuando el tema oscuro está activo.
 */
import '@ionic/vue/css/palettes/dark.class.css';

/* Theme variables y tema activo (clase .ion-palette-dark en <html>) */
import './theme/variables.css';
import './theme/store';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { Capacitor } from '@capacitor/core';
import {
  getAuth,
  indexedDBLocalPersistence,
  initializeAuth,
} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAayfXGQGCBcnhTk8ysoj9KS0Oa4qQVl00",
  authDomain: "medicineapp-project.firebaseapp.com",
  projectId: "medicineapp-project",
  storageBucket: "medicineapp-project.firebasestorage.app",
  messagingSenderId: "224246920776",
  appId: "1:224246920776:web:cf8476622a8b7b1df0ca7d"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// En Android/iOS la sesión se firma en el SDK JS con signInWithCredential
// (ver services/googleAuth.ts); usa persistencia local para mantenerla al reiniciar.
if (Capacitor.isNativePlatform()) {
  initializeAuth(firebaseApp, {
    persistence: indexedDBLocalPersistence,
  });
} else {
  getAuth(firebaseApp);
}

const app = createApp(App)
  .use(IonicVue, {
    mode: 'ios'
  })
  .use(router);

router.isReady().then(() => {
  app.mount('#app');
});
