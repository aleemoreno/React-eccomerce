import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer';
import "./components/ItemListContainer.css";
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/:category" element={<ItemListContainer />} />
        <Route path="/product/:productId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
