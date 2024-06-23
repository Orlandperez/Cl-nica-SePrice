//paciente del localstorage

const paciente = JSON.parse(localStorage.getItem('paciente')); 
console.log(paciente)


//variables 
const nombre = document.getElementById('n') ; 
const apellido = document.getElementById('a') ;
const mail = document.getElementById('m') ;
const nacimiento = document.getElementById('f') ; 
const obraSocial = document.getElementById('os') ;
const exit = document.getElementById('exit') ;


//asignacion de textos a variables segun la info del paciente
nombre.innerText = paciente.nombre   ;
apellido.innerText = paciente.apellido ;
mail.innerText = paciente.mail ;
nacimiento.innerText = paciente.fechaNacimiento ;
//ternario para verificar si tiene o no obra social 
obraSocial.innerText = paciente.obraSocial== '' || paciente.obraSocial == null ? "no posee" : paciente.obraSocial ;
exit.addEventListener('click',  ()=> {
    window.location.href = 'index.html'
    localStorage.clear()  ;
})