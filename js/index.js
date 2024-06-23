// Menu amburguesa
const menu = document.querySelector('i');
const links = document.querySelector('nav');

menu.addEventListener("click", () =>{
    links.classList.toggle("mobile-menu")
});


const GetAdmin = async ()=> {
    try {
        const result  = await axios.get('http://localhost:5084/api/Administrativo') ;
        console.log(result.data) ; 
    } catch (error) {
        console.log(error) ; 
    }
}
GetAdmin() ;