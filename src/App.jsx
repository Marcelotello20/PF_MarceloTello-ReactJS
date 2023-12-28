

import './App.css'
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';



function App() {
  return (
    <div className='App'>
      <Navbar/>
      <ItemListContainer props="Bienvenido"/>
      <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)} />
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
