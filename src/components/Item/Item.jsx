import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({id, name, img,price, stock}) => {

    return(
        <article className="CardItem">
            <header className="Header">
                <h3 className="ItemHeader">
                    {name}
                </h3>
            </header>
            <picture>
                <img src={img} alt={name} className='ItemImg' />
            </picture>
            <section>
            
                <p className="Info">
                    Precio: <strong>$</strong>{price}
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