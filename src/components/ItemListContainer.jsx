import React, { useEffect, useState, useContext } from "react"
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import "./ItemListContainer.css"
import { cartContext } from "../context/cartContext"
import { getProducts, getCategoryProducts } from '../firebase/db'


const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  const value = useContext (cartContext)

    useEffect(() => {
     if (!category) {
        getProducts()  
        .then(res => setProducts(res))
     } else {
        getCategoryProducts(category)
           .then (res => setProducts(res))
          
     }

    }, [category]); 

    return (
        <div className="item-list-container">
        {products.length > 0 ? (
            <ItemList products={products} /> 
        ) : (
            <p>No hay productos disponibles en esta categoría.</p>
        )}
    </div>
    );
};

export default ItemListContainer;
