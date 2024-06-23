const spinner = document.getElementById('spinner');
const gracias = document.getElementById('gracias');
const registrar = document.getElementById('registrar');
const form = document.getElementById('form') ; 

spinner.style.display = "none"; // Inicialmente oculto

const registrarPaciente = async (data) => {
    try {
        // Mostrar spinner y ocultar formulario
        spinner.style.display = 'flex';

        const res = await axios.post("http://localhost:5084/api/Paciente", data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // Ocultar spinner después de recibir respuesta
        spinner.style.display = 'flex';

        // Si se recibe una respuesta satisfactoria
        if (res) {
            // Mostrar mensaje de agradecimiento
            spinner.style.display = 'none' ; 
            gracias.style.display = 'flex';
            gracias.innerHTML = `<p> <strong>${data.Nombre}</strong>, te Registraste correctamente </p>`;
            gracias.innerHTML += `<img src="./img/ok.png" alt="" id="img">`
           
            form.style.display = 'none'
            // Limpiar campos del formulario (esto es opcional)
            limpiarCampos();
        } 
    } catch (error) {
        console.error('Error registrando el paciente:', error.response ? error.response.data : error.message);
        // Mostrar mensaje de disculpas en caso de error
        gracias.style.display = 'block';
        gracias.innerHTML = `<h1>Lo sentimos, hubo un error al intentar registrar al paciente.</h1>`;
        // Ocultar spinner en caso de error
        spinner.style.display = 'none';
    }
};

// Función para limpiar campos del formulario
const limpiarCampos = () => {
    document.getElementById('name').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('dni').value = '';
    document.getElementById('date').value = '';
    document.getElementById('os').value = '';
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

    // Crear objeto paciente
    const paciente = {
        Nombre: nombre,
        Apellido: apellido,
        Dni: dni,
        FechaNacimiento: date,
        ObraSocial: os
    };

    // Llamar a la función para registrar paciente
    registrarPaciente(paciente);
});