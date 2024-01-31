import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"

import { collection, documentId, writeBatch } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"
import { Timestamp, getDocs, query, where, addDoc } from "firebase/firestore"
import CheckoutForm from '../CheckoutForm/CheckoutForm'


const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')

    const { cart, total, clearCart} = useContext(CartContext)
    

    //Funcion para crear la orden
    const createOrder = async ({ name, phone, email }) => {
        setLoading(true)

        console.log('Creando la orden en Firebase...');
        try {
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: total(),
                date: Timestamp.fromDate(new Date())
            }
            console.log('Valor de total:', objOrder.total);

            const batch = writeBatch(db)

            const outOfStock = []

            const ids = cart.map(prod => prod.id)
            
            //items es el nombre de la coleccion en firestore
            const productsRef = collection(db, 'items')

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(),'in', ids )))

            const { docs } = productsAddedFromFirestore
            
            //Logica para obtener los datos de docs
            docs.forEach(doc => {
                
                console.log('Doc:', doc);
    
                const dataDoc = doc.data();
                console.log('Data del doc:', dataDoc);
    
                const stockDb = dataDoc.stock;
                console.log('Cantidad en stock:', stockDb);
    
                const productAddedToCart = cart.find(prod => prod.id === doc.id);
                console.log('Producto agregado al carrito:', productAddedToCart);
    
                const prodQuantity = productAddedToCart?.quantity;
                console.log('Cantidad en carrito:', prodQuantity);

                
                //Si el stock es menor o igual a la cantidad del carrito se agrega a outOfStock
                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })
            

            //Lógica del stock
            if(outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder)

                setOrderId(orderAdded.id)
                clearCart()
            } else {
                console.error('Hay productos sin stock')
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }


    if(loading) {
        return <h1 className='Loadings'>Se esta generando su orden...</h1>
    }

    if(orderId) {
        return <h1 className='OrderId'>El id de su orden es: {orderId} </h1>
    }

    return (
        <div>
            <h1 className='CheckoutTittle'>Checkout</h1>
            <CheckoutForm onConfirm={createOrder} />
        </div>
    )
}

export default Checkout