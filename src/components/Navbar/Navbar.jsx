import CartWidget from "../CartWidget/CartWidget";
import './Navbar.css'
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {


    return (
    <nav className="Navbar">
      <Link to='/'>
        <img src="../../public/images/GLM.png" alt="logo ghetto life" className="logoNavBar" />
      </Link> 
      <ul className="Categories">
        <NavLink to={`/category/Produccion`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Produccion</NavLink>
        <NavLink to={`/category/Beats`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Beats</NavLink>
        <NavLink to={`/category/Grabacion`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Grabacion</NavLink>
        <NavLink to={`/category/Sonido`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Sonido</NavLink>
      </ul>
      <CartWidget className="Carrito"/>
    </nav> 
    )
}

export default Navbar;