import './ItemDetail.css'
import React, { useContext } from 'react'
import ItemCount from "../ItemCount/ItemCount"
// import '../ItemCount/ItemCount.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({ id, name, img, category, description, price,stock}) => {
    //Crear estado donde se va almacenar la cantidad deseada del producto
    const [quantityAdded, setQuantityAdded] = useState(0)
    
    // Usando addItem del contexto Cart Context
    const { addItem } = useContext(CartContext)
    
    //Funcion para agregar la cantidad con el botton terminar compra
    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)
        
        //Armar el objeto con los datos minimos necesarios
        const item = {
            id, name, price
        }
        
        //Funcion para tener el objeto y la cantidad seleccionada por el usuario
        addItem(item, quantity)
    }
    
    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className='ItemImg' />
            </picture>
            <section>
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    Descripción: {description}
                </p>
                <p className="Info">
                    Precio: ${price}
                </p>
                
            </section>
            <footer className="ItemFooter">
                {
                    quantityAdded > 0 ? (
                        <Link to='/cart' className='Option'>Terminar compra</Link>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                    )
                }
                
            </footer>
        </article>
    )
}

export default ItemDetail