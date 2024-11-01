import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from './components/ProductList/ItemListContainer';
import "./components/ProductList/ItemListContainer.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/:category" element={<ItemListContainer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
