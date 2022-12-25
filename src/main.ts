import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'


firebase.initializeApp({
  apiKey: "AIzaSyCXOpvBmHWOV_f37D85uFcUmryz8FNtTXE",
  authDomain: "clips-404b4.firebaseapp.com",
  projectId: "clips-404b4",
  storageBucket: "clips-404b4.appspot.com",
  messagingSenderId: "32155359456",
  appId: "1:32155359456:web:ca8859f20dc6a1688d5885"
})

let appInit = false

firebase.auth().onAuthStateChanged(() => {
  if (!appInit) {
    platformBrowserDynamic().bootstrapModule(AppModule)
      .catch(err => console.error(err));
  }

  appInit = true
})


