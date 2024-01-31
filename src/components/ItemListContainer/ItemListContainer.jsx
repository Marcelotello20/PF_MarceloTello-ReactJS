import { useState,useEffect } from "react";
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'


import { useParams } from 'react-router-dom' 

//Carga de productos ("items")
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from "../../services/firebase/firebaseConfig";
import Header from "../Header/Header";

const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const [loading,setLoading] = useState(true)

  //Estado del Header para usarlo con categoryId
  const [headerTitle, setHeaderTitle] = useState("Bienvenido");

  const { categoryId } = useParams()

  useEffect(() => {
      setLoading(true)  
      
      //2 opciones distintas a partir de la categoryId por el enlace que tiene con la URL
      const collectionRef = categoryId
        ? query(collection(db, 'items'), where ('categoryId', '==', categoryId))
        : collection(db, 'items');

      //HEADER CONFIGURADO CON EL CATEGORYID
      setHeaderTitle(categoryId ? categoryId : "Bienvenido");
      
      //Al recibir respuesta firestore debemos adaptar la respuesta para utilizarla en nuestra app
      getDocs(collectionRef)
        .then(response => {
          const productsAdapted= response.docs.map(doc => {
              const data = doc.data()
              return { id: doc.id, ...data }
          })
          //Guardamos los datos en el estado
          setProducts(productsAdapted)
        })
        .catch(error => {
          console.log(error)
        })
        .finally(() => {
          setLoading(false)
        })
  }, [categoryId])

  return (
    <>
        
      <Header titulo={headerTitle}/>
      <div className="Productos">
        <ItemList products={products} />
      </div>
    </>
  )
}

export default ItemListContainer