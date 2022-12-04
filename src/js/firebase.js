
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
  
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries




  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyD_hthGMSemC0p8ztI-J-9VQn597-O0nu4",
    authDomain: "fire-literame.firebaseapp.com",
    projectId: "fire-literame",
    storageBucket: "fire-literame.appspot.com",
    messagingSenderId: "530262241288",
    appId: "1:530262241288:web:e16501f446a5cd63d821bd"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app)
  console.log(app);