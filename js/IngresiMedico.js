

const legajo = document.getElementById('legajo') ;
const ingreso = document.getElementById('ingreso') ;


const Acceso = async () => {
    const numeroLegajo = parseInt(legajo.value) ;
    try {
        const res = await axios.get(`http://localhost:5084/api/Medico/${numeroLegajo}`)
        if(res != null){
            Swal.fire({
                title: 'Accediendo...',
                icon: 'success',
             
              })
       setTimeout(()=> {
        window.location.href = 'PerfilMedico.html'
        localStorage.setItem('medicoPerfil', JSON.stringify(res.data)) ;
       }, 1500)
        }
    } catch (error) {
        Swal.fire({
            title: 'Error!',
            text: 'Numero de lejago incorrecto',
            icon: 'error',
            
          })
        legajo.value = ''
    }
} ; 

ingreso.addEventListener('click',()=> Acceso()  ) ;
