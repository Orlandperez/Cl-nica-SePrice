//----------------------------------------------------------------------------
//inicio de sesion 
const mailInput = document.getElementById('mail');
const passInput = document.getElementById('pass');
const ver = document.getElementById('ver');
const confirm = document.getElementById('confirm');

//perfil

const paciente = document.getElementById('nombrePaciente');

const IniciarSesion = async (mail, pass) => {
    try {
        const result = await axios.get(`http://localhost:5084/api/Paciente/paciente/${mail}?password=${pass}`);
        if (result.data) {
            console.log(result.data);
            return result.data;
        } else {
            return null;
        }
    } catch (error) {
        console.log(error);
    }
}

confirm.addEventListener('click', (e) => {
    e.preventDefault();
    const mail = mailInput.value;
    const pass = passInput.value;
    console.log(mail)
    IniciarSesion(mail, pass).then(data => {
        if (data) {
            window.location.href = './perfil.html'
            localStorage.setItem('paciente', JSON.stringify(data)) ;

        } else {
            Swal.fire({
                title: 'Ooops..',
                text: 'el mail o contraseña son incorrectos',
                icon: 'info'
            
              })
            mailInput.value = '' ;
            passInput.value = '' ;
        }
    });
});