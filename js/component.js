// COMPONENTE HEADER Y FOOTER PARA SER REUTILIZADOS
const header = document.querySelector("header");
const footer = document.querySelector("footer");


// COSAS DEL HEADER

header.innerHTML = `
    
    <h1> Clinica SePrice </h1>
    
    <nav>
        <a href="index.html"> Inicio </a>
        <a href="turno.html"> Turno </a>
        <a href=""> Servicios</a>
        <a href=""> Iniciar sesion</a>
        <a href=""> Ingreso medico</a>
    </nav> 

    <i class="bi bi-list"></i>
    
     `;


// COSAS DEL FOOTER
footer.innerHTML = `
<div class = "contenedor-footer">
    <div class="footer-redes">
        <a href="#"><i class="bi bi-facebook"></i></a>
        <a href=""><i class="bi bi-instagram"></i></a>
        <a href=""><i class="bi bi-twitter"></i></a>
        <a href=""><i class="bi bi-telegram"></i></a>
    </div>

    <div class="footer-info">
        <h1>clinica SePrice</h1>
        <p><a href="#">ClinicaSePrice@gmai.com</a></p>
        <div class="Footer-leyes">
            <u><a href="#">Politica</a></u>
            <u><a href="#">Privacidad</a></u>
        </div>
    </div>
</div>
`;