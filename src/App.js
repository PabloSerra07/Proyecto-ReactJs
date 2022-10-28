import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemList/ItemListContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout'
import { CartProvider } from './contexts/Cartcontext';


function App() {

  return (
    <BrowserRouter basename='Proyecto-ReactJs'>
      <CartProvider>
      <NavBar/>
      <Routes>
        <Route path='/category/:categoryId'element={<ItemListContainer greeting={``}/>} />
        <Route path='/' element={<ItemListContainer greeting={'All Products'} />} />
        <Route path='/item/:id'element={<ItemDetailContainer />}/>
        <Route path='/cart'element={<Cart />}/>
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
      </CartProvider>
    </BrowserRouter>

        
      
      

    
    
  );
}

export default App;
