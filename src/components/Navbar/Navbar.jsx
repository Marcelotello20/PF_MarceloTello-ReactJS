import CartWidget from "../CartWidget/CartWidget";
import './Navbar.css'

const Navbar = () => {


    return (
    <>

    <nav className="Navbar">

    <ul className="NavbarLista">
        <li> <a href="#">Inicio</a></li>
        <li> <a href="#">Productos</a></li>
        <li> <a href="#">Contacto</a></li>
    </ul>
    <CartWidget className="Carrito"/>
    </nav> 
    </>
    )
}

export default Navbar;