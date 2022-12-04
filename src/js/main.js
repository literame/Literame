import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
import { auth } from './firebase.js'
import  { logginCheck } from './loggin.js'

import './signupForm.js'
import './signinForm.js'
import './logout.js'

onAuthStateChanged(auth, async (user)=>{
    logginCheck(user)
/*     if(user){
        logginCheck(user)
    }else{
        logginCheck(user)
    }    */
})