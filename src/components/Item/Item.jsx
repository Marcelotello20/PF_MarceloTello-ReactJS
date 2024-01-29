import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({id, name, img,price, stock, categoryId}) => {

    return(
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
                <p className="Info InfoCategoria">
                    Categoria: {categoryId}
                </p>
            </header>
            <picture>
                <img src={img} alt={name} className='ItemImg' />
            </picture>
            <section>
            
                <p className="Info">
                    Precio: ${price}
                </p>
                
                <p className="Info">
                    Disponible: {stock}
                </p>
            </section>
            <footer className="ItemFooter">
                <Link to={`/item/${id}`} className='Option'>Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item