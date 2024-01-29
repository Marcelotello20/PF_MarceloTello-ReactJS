
import { CartContext } from "../../context/CartContext";

const CartItem = () => {
    //Hook de useContext para darle contexto al carrito y su array vacio[]
    const { cart, totalQuantity, total} = useContext(CartContext)

    return (
        <div>
            
        </div>
    )
}

export default CartItem;