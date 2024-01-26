

import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'

//Contexto del carro de compras
import { CartProvider } from './context/CartContext'
import { getFirestore } from 'firebase/firestore'


const App = () => {
  return (
    <div className='App'>
      <BrowserRouter> 
        <CartProvider>
  
          <Navbar />
          
          <Routes>
            <Route path='/' element= {<ItemListContainer />}/>
            <Route path='/category/:categoryId' element= {<ItemListContainer />}/>
            <Route path='/item/:itemId' element= {<ItemDetailContainer />}/>
            <Route path='/cart' element={<Cart />}/>
            <Route path='*' element= {<h1>404 NOT FOUND</h1>}/>
          </Routes>
        </CartProvider>

      </BrowserRouter>  
    </div>
  );
}

export default App
