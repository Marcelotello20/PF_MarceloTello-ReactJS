import { useState,useEffect } from "react";
import { getProducts, getProductByCategory } from "../../asyncMock";
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'

import { useParams } from 'react-router-dom' 


const ItemListContainer = () => {
  const [products, setProducts] = useState([])

  const { categoryId } = useParams()

  useEffect(() => {
      const asyncFunc = categoryId ? getProductByCategory : getProducts

      asyncFunc(categoryId)
        .then(response => {
          setProducts(response)
        })
        .catch(error => {
          console.error(error)
        })      
  }, [categoryId])

  return (
    <>
  
      <div className="Productos">
        <ItemList products={products} />
      </div>
    </>
  )
}

export default ItemListContainer;