import { createContext, useState } from "react";
import { useEffect } from "react";

// 1Creamos un contexto con el CartContext
export const CartContext = createContext({
    cart: []
})

//Creamos función con la logica del carrito de compras, recibira por props todos los componentes hijos
//osea es una caja de herramientas tipo carrito
export const CartProvider = ({ children }) => {
    
    //Estado para almacenar los datos del carrito combinando LocalStorage
    const [cart, setCart] = useState(() => {
        // SavedCart es nuestra referencia de cart en el local storage
        const savedCart = localStorage.getItem('cart');
        // Busca si savedCart existe en el localStorage y lo transforma denuevo a JS , si no devuelve un array vacio
        return savedCart ? JSON.parse(savedCart) : [];
    });

    //Comprobación
    console.log(cart)

    //Guardar el carrito en el LocalStorage siempre que cambie cart con una funcion 
    useEffect(() => {
        //Guardando con la clave cart en linea de texto
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addItem = (item, quantity) => {
        if(!isInCart(item.id)) {
            setCart(prev => [...prev, {...item, quantity}])
            console.log(`El producto ${item.name} fue agregado con exito`)
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
    
    //Funcion para indicar que hay en el carrito
    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    //Función que calcula la cantidad total de productos en el carrito 
    const totalQuantity = () => cart.reduce((total, item) => total + item.quantity, 0);

    //Función que calcula el total del precio de todos los productos en el carrito 
    const total = () =>  cart.reduce((total, item) => total + (item.price * item.quantity), 0);

    //Retornamos toda las funciones como props mediante value
    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuantity, total}}>
            { children }
        </CartContext.Provider>
    )
}

