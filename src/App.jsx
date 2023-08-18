<<<<<<< HEAD
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from './context/CartContext';
import NavBar from './components/NavBar';
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout"
=======
import { useEffect, useState } from "react";
import ItemList from './components/ItemList';
import ItemCount from './components/ItemCount';
import NavBar from './components/NavBar';
>>>>>>> 16de89f94b7da5a681fd5283f37103ce5099907a
import './App.css'
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
<<<<<<< HEAD
    <CartProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<ItemListContainer/>}/>
          <Route exact path="/categoria/:categoriaId" element={<ItemListContainer/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
=======
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<ItemListContainer/>}/>
        <Route exact path="/categoria/:categoriaId" element={<ItemListContainer/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
>>>>>>> 16de89f94b7da5a681fd5283f37103ce5099907a
  )
}

export default App