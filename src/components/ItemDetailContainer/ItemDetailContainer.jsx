import './ItemDetailContainer.css'
import { useState, useEffect} from 'react'

import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

//Carga de productos ("items")
import { getDoc, doc} from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

const ItemDetailContainer = () => {
    
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    
    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)
        
        //Referencia de documento para obtener la informacion
        const docRef = doc(db, 'items', itemId)

        getDoc(docRef)
           .then(response => {
                const data = response.data()
                const productsAdapted = { id: response.id, ...data}
                setProduct(productsAdapted)
           })
           .catch(error => {
                console.log(error)
           })
           .finally(() => {
                setLoading(false)
           })

    }, [itemId])

    
    if(loading) {
        return <h1 className='Loadings'>Cargando...</h1>
    }
    
    //Const para crear un display que controle el estilo de CardItem si no existe un id coincidente en nuestro docRef(db,"items",id)
    const displayProduct = !product ? 'flex' : 'none' ;
    
    return (

        <div className='ItemDetailContainer'>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer 