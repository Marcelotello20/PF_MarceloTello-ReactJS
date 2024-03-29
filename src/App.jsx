

import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'
import Footer from './components/Footer/Footer'

//Contexto del carro de compras
import { CartProvider } from './context/CartContext'


const App = () => {
  return (
    <div className='App'>
      <BrowserRouter> 
        <CartProvider>
  
          <Navbar />
          
          <Routes>

            <Route path='/' element= {<ItemListContainer /> } />
            <Route path='/category/:categoryId' element= {<ItemListContainer />} />
            <Route path='/item/:itemId' element= {<ItemDetailContainer/>} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='*' element= {<h1>404 NOT FOUND</h1>} />
          
          </Routes>

          <Footer />
        </CartProvider>

      </BrowserRouter>  
    </div>
  );
}

export default App
