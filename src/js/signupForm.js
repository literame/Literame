import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
import { auth } from './firebase.js'
import {showMessages} from './showMessages.js'
const signupForm = document.querySelector('#signup-form')

signupForm.addEventListener('submit', async (e)=>{
    e.preventDefault()
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;
    console.log(email, password)

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        console.log(userCredential)

        const signupModal =  document.querySelector('#Signup')
        const modal = bootstrap.Modal.getInstance(Signup)
        modal.hide()

        showMessages("welcome: "+userCredential.user.email, "success")

    } catch (error) {

        console.log(error.message)
        console.log(error.code)

        if(error.code == 'auth/email-already-in-use'){
            
            showMessages("intenta con un correo no registrado","error")
        }else if(error.code == 'auth/invalid-email'){
            
            showMessages("email invalido","error")
        } else if(error.code == 'auth/weak-password'){
            
            showMessages("contraseña invalida","error")
        }else if(error.code){
            
            showMessages("algo ocurrio, intenta mas tarde","error")
        }
    }
    


})