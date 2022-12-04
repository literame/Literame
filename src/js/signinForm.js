import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
import{auth} from './firebase.js'
import {showMessages} from './showMessages.js'
const signinForm = document.querySelector('#loggin-form')
const cl = console.log();
signinForm.addEventListener('submit',async e =>{
    e.preventDefault()
    const email = signinForm['loggIn-email'].value;
    const password = signinForm['loggIn-password'].value;

    
    try {
        const credencial = await signInWithEmailAndPassword(auth, email, password)
        console.log(credencial)
    } catch (error) {
        if (error.code === "auth/wrong-password") {
            showMessages('wrong-password', 'error')
        } if(error.code === "auth/user-not-found"){
            showMessages('user-not-found', 'error')

        }else{
        cl(error)
        }
    }
})