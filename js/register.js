



const registrarPaciente = async (data) => {
    try {
        
        const res = await axios.post("http://localhost:5084/api/Paciente", data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (res) {
            Swal.fire({
                title: 'Genial!',
                text: 'te registraste correctamente',
                icon: 'success',
            
              })
              setTimeout(()=> {
                window.location.href = 'index.html'
              }, 1500)
        } 
    } catch (error) {
        Swal.fire({
            title: 'error',
            text: 'revisa los campos e intenta nuevamente',
            icon: 'error',
        
          })
        console.error('Error registrando el paciente:', error.response ? error.response.data : error.message);
  
    }
};



// Evento click del botón de registrar
registrar.addEventListener('click', (e) => {
    e.preventDefault(); // Prevenir envío del formulario por defecto

    // Obtener valores del formulario
    const nombre = document.getElementById('name').value;
    const apellido = document.getElementById('apellido').value;
    const dni = document.getElementById('dni').value;
    const date = document.getElementById('date').value;
    const os = document.getElementById('os').value;
    const mail = document.getElementById('mail').value ;
    const pass = document.getElementById('pass').value ; 
    // Crear objeto paciente
    const paciente = {
        Nombre: nombre,
        Apellido: apellido,
        Dni: dni,
        FechaNacimiento: date,
        ObraSocial: os,
        Mail: mail, 
        Pass: pass
    };

    // Llamar a la función para registrar paciente
    registrarPaciente(paciente);
});



