const medicoStorage = JSON.parse(localStorage.getItem('medicoPerfil') );

const nombre = document.getElementById('n') ;
const apellido = document.getElementById('a') ;
const profesion = document.getElementById('p') ;
const legajoMedico = document.getElementById('l') ;
const exit = document.getElementById('exit') ;


nombre.innerText = medicoStorage.nombre ;
apellido.innerText = medicoStorage.apellido ;
profesion.innerText = medicoStorage.cargo ;
legajoMedico.innerText = medicoStorage.id ;

exit.addEventListener('click',  ()=> {
    window.location.href = 'index.html'
    localStorage.clear()  ;
})