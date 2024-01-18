import { useState,useEffect } from "react";
import { getProductByCategory } from "../../asyncMock";
import './ItemListCategoryContainer.css'


const ItemListCategoryContainer = () => {
    // Obtiene la categoría actual de la URL
   const { categoryId } = useParams();
 
   // Estado para almacenar los productos de la categoría actual
   const [categoryProducts, setCategoryProducts] = useState([]);
 
   // Efecto para obtener y actualizar los productos cuando cambia la categoría
   useEffect(() => {
     // Llama a la función para obtener productos por categoría
     getProductByCategory(categoryId).then((products) => {
       console.log(products); 
       setCategoryProducts(products);
     });
   }, [categoryId]);
 
   // Renderiza la lista de productos
   return (
     <div>
       <h2>Productos de la categoría: {categoryId}</h2>
       {categoryProducts.map((product) => (
         // Renderiza cada producto aquí
         <div key={product.id}>
           <h3>{product.name}</h3>
           <p>{product.description}</p>
           {/* Agrega más detalles según sea necesario */}
         </div>
       ))}
     </div>
   );
 }

 export default ItemListCategoryContainer;