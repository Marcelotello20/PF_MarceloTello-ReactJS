import './ItemList.css'
import Item from '../Item/Item'


const ItemList = ({products}) => {
    //Comprobación de que tipo de información esta pasando
    console.log('Type of products:', typeof products);

    return(
        <div className='ListGroup'>
            {products.map (prod => < Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList