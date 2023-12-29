

import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'



function App() {
  return (
    <div className='App'>
      <BrowserRouter>

        <Navbar/>
        <Routes>
          <Route path='/' element= { <ItemListContainer props="Bienvenido"/> } />
          <Route path='/category/:categoryId' element= { <ItemListContainer/> } />
          <Route path='/item/:itemId' element= { <ItemDetailContainer/> } />
          {/* <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)} /> */}
          <Route path='*' element= { <h1>404 NOT FOUND</h1>} />
        </Routes>

      </BrowserRouter>  
    </div>
  );
}

export default App;
