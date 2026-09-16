import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './theme/variables.css'
import './theme/base.css'
import './theme/store'

import { registerSW } from 'virtual:pwa-register'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAayfXGQGCBcnhTk8ysoj9KS0Oa4qQVl00",
  authDomain: "medicineapp-project.firebaseapp.com",
  projectId: "medicineapp-project",
  storageBucket: "medicineapp-project.firebasestorage.app",
  messagingSenderId: "224246920776",
  appId: "1:224246920776:web:ac52c880d3fde9aff0ca7d"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

registerSW({ immediate: true })

const app = createApp(App).use(router)

router.isReady().then(() => {
  app.mount('#app')
})
