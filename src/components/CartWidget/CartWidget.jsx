import './CartWidget.css'
import car from './assets/car.svg'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'


const CartWidget = () => {
    //Ocupamos la cantitdad total del hook useContext de CartContext
    const { totalQuantity } = useContext(CartContext)

    return (
        <Link to='/cart' className='CartWidget' style={{ display: totalQuantity() > 0 ? 'grid' : 'none'}} >
          <div className='CarritoContainer'>
          <img className='Carrito' src={car} alt="cart-widget"/>
          <p className='CarritoQuantity'>{totalQuantity()}</p>

          </div>
        </Link>
    )
}

export default CartWidget