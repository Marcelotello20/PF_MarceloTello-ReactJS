
const CartItem = ({id, name, price, quantity}) => {

    return (
        <div className="CarritoItems">
            <div className='item-details'>
                <p className='item'>{name}</p>
                <p className='item'>Precio: ${price}</p>
                <p className='item'>Cantidad: {quantity}</p>
            </div>
            {/* <button onClick={} */}
        </div>
    )
}

export default CartItem;