import { useState,useEffect } from "react";
import { getProducts } from "../../asyncMock";
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'

import { useParams } from 'react-router-dom' 


const ItemListContainer = ({props}) => {
  const [products, setProducts] = useState([])

  const { categoryId } = useParams()

  useEffect(() => {
      const asyncFunc = categoryId ? getProductsByCategory : getProducts

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
      <div className="Titulo">
        <h1>{props}</h1>
      </div>
      <div className="Productos">
        <ItemList products={products} />
      </div>
    </>
  )
}

export default ItemListContainer;