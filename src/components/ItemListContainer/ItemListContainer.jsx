import { useState,useEffect } from "react";
import { getProducts } from "../../asyncMock";
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'


const ItemListContainer = ({props}) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
      getProducts()
        .then(response => {
          setProducts(response)
        })
        .catch(error => {
          console.error(error)
        })      
  }, [])

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