import './ItemList.css'
import Item from '../Item/Item'


const ItemList = ({products}) => {
    console.log('Type of products:', typeof products);
    
    return(
        <div className='ListGroup'>
            {products.map (prod => < Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList