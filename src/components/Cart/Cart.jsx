import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

//devuelve cartPage
const Cart = () => {
    //Hook de useContext para darle contexto al carrito y su array vacio[]
    const { cart, clearCart, totalQuantity, total} = useContext(CartContext)
    
    //Si no hay productos te saldra este mensaje
    if (totalQuantity == 0) {
        return (
            <div className='cartPage'>
                <h1>No hay items en el carrito</h1>
                <Link to='/' className='Option'>Productos</Link>
            </div>
        )
    }
    
    //Total del carrito con dos botones de reinicio y para el siguiente paso
    return (
        <div className='cartPage'>

            <div className='Cart'>

                { cart.map (p => <CartItem key={p.id} {...p}/> )}

                <div className='CarroInfo2'>
                   <button onClick={() => clearCart()} className='Button'>Limpiar Carrito</button>
                   <h3>Total: ${total} </h3>
                </div>

                <div className='CarroCheckout'>
                    <Link to='/checkout' className='Option'>Checkout</Link>
                </div>

            </div>

        </div>
    )
}

export default Cart