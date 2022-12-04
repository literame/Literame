const loggedOut = document.querySelectorAll('.logged-out')
const loggedIn = document.querySelectorAll('.logged-in')


export const logginCheck = user =>{
    if(user){
        loggedOut.forEach(link => link.getElementsByClassName.display ='none')
        loggedIn.forEach(link => link.getElementsByClassName.display ='block')
        console.log('conectado')
    }else{
        loggedOut.forEach(link => link.getElementsByClassName.display ='block')
        loggedIn.forEach(link => link.getElementsByClassName.display ='none')
    }
}