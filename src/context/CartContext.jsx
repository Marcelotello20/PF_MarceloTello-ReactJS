import { createContext, useState } from "react";

// 1Creamos un contexto con el CartContext
export const CartContext = createContext({
    cart: []
})

//Creamos función con la logica del carrito de compras, recibira por props todos los componentes hijos
//osea es una caja de herramientas tipo carrito
export const CartProvider = ({ children }) => {
    
    //Crear estado para almacenar los datos
    const [cart, setCart] = useState ([])

    //Comprobación
    console.log(cart)

    const addItem = (item, quantity) => {
        if(!isInCart(item.id)) {
            setCart(prev => [...prev, {...item, quantity}])
        } else {
            console.error('El producto ya fue agregado')
        }
    }
    
    // Remover del carrito
    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }
    
    //Función para limpiar carro y dejarlo como array vacio
    const clearCart = () => {
        setCart([])
    }
    
    //Funcion para 
    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }
    
    //Retornamos toda las funciones como props mediante value
    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart}}>
            { children }
        </CartContext.Provider>
    )
}

