import CartWidget from "../CartWidget/CartWidget";
import './Navbar.css'
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {


    return (
    <nav className="Navbar">
      <Link to='/'>
        <h3>Ecommerce</h3>
      </Link> 
      <ul className="NavbarLista">
        <NavLink to={`/category/Produccion completa`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Prod Completa</NavLink>
        <NavLink to={`/category/Beats`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Beats</NavLink>
        <NavLink to={`/category/Grabacion`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Grabacion</NavLink>
        <NavLink to={`/category/Sonido`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Sonido</NavLink>
      </ul>
      <CartWidget className="Carrito"/>
    </nav> 
    )
}

export default Navbar;