import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDSNAcBA64OCqKA-7LwqI9Aco5sVd6vHUA",
  authDomain: "code-helper-97d11.firebaseapp.com",
  projectId: "code-helper-97d11",
  storageBucket: "code-helper-97d11.appspot.com",
  messagingSenderId: "329901010671",
  appId: "1:329901010671:web:24c6f2edbdeddcc6f9751a",
  measurementId: "G-E3FGT6CE0K"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };