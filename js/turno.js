const nombre = document.getElementById("nombre"); 
const apellido = document.getElementById("apellido"); 
const espec = document.getElementById("especialista");
const fecha = document.getElementById('fecha') ;
const horario = document.getElementById("horario"); 
const btSave =  document.getElementById('save') ;
const smName = document.getElementById('smName') ;
const smSurname = document.getElementById('smSurname') ;
const profSelect = document.getElementById('profSelect') ;
//recuperamos el paciente del storage
const paciente = JSON.parse(localStorage.getItem('paciente')) ;
//adicion de datos a la pagina
smName.innerText +=` ${paciente.nombre}` 
smSurname.innerText += ` ${paciente.apellido}`

function capitalizarPrimeraLetra(texto) {
    return texto.replace(/^\w/, (c) => c.toUpperCase());
}
espec.addEventListener('change', () => {
   const especialidad =  capitalizarPrimeraLetra(espec.value) ;
   
    axios.get(`http://localhost:5084/api/Medico/profession/${especialidad}`)
        .then(response => {
         profSelect.innerHTML = `<div class="card">
         <div class="card-body">
            <p>${response.data.nombre}</p>
            <p>${response.data.apellido}</p>
            <p>${response.data.cargo}</p>
         </div>
       </div>`
         localStorage.setItem('medico', JSON.stringify(response.data)) ;
        })
        .catch(error => {
            profSelect.innerHTML = `<div class="card">
            <div class="card-body">
               <h5>No hay resultados</h5>
            </div>
          </div>`
        });
});


//funciones 
const GetAdmin = async ()=> {
    try {
        const result  = await axios.get('http://localhost:5084/api/Administrativo') ;
       
        localStorage.setItem('admin', JSON.stringify(result.data) )
    } catch (error) {
        console.log(error) ; 
    }

}
GetAdmin() ;
btSave.addEventListener('click', async (event) => {
    event.preventDefault(); // Evitar el comportamiento predeterminado del botón

    const medicoStorage = JSON.parse(localStorage.getItem('medico'));
    const paciente = JSON.parse(localStorage.getItem('paciente'));
    const admin = JSON.parse(localStorage.getItem('admin')) ;
    
    const turno = {
        fecha: fecha.value,
        pacienteId: paciente.id,
        paciente: {
            id: paciente.id,
            nombre: paciente.nombre,
            apellido: paciente.apellido,
            mail: paciente.mail,
            pass: paciente.pass,
            dni: paciente.dni,
            fechaNacimiento: paciente.fechaNacimiento,
            obraSocial: paciente.obraSocial
        },
        medicoId: medicoStorage.id,
        medico: {
            id: medicoStorage.id,
            nombre: medicoStorage.nombre,
            apellido: medicoStorage.apellido,
            numeroCelula: medicoStorage.numeroCelula,
            dni: medicoStorage.dni,
            cargo: medicoStorage.cargo
        },
        administrativoId: admin[0].id,
        administrativo: {
            id:admin[0].id ,
            nombre: "Juan",
            apellido: "Otero",
            numeroCelula: 0
        }
    };

    try {
        const res = await axios.post("http://localhost:5084/api/Turno", turno, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (res.status === 200) {
            Swal.fire({
                title: '¡Genial!',
                text: '¡Se registró el turno correctamente!',
                icon: 'success',
            });

            setTimeout(() => {
                window.location.href = 'index.html'; // Redirigir después de 1.5 segundos
            }, 1500);
        }
    } catch (error) {
        Swal.fire({
            title: 'Error',
            text: 'No se puede asigna el turno solicitado',
            icon: 'error',
        });

        console.error('Error registrando el turno:', error.response ? error.response.data : error.message);
    }
});
