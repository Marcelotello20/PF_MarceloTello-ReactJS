import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

import './CartItem.css'


const CartItem = ({id, name, price, quantity}) => {

    const { removeItem } = useContext(CartContext)

    const buttonRemoveItem = () => {
        removeItem (id);
    }

    return (
        <div className="CarritoItems">
            <div className='CarritoItem'>

                <p className='CarritoInfo'>{name}</p>
                <p className='CarritoInfo'>Cantidad: {quantity}</p>
                <p className='CarritoInfo'>Precio: ${price}</p>
                
                <button onClick={buttonRemoveItem} className="buttonRemove">X</button>
                
            </div>
        </div>
    )
}

export default CartItem;