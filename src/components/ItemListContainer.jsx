import React, { useEffect, useState, useContext } from "react";
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import "./ItemListContainer.css"; 
import { cartContext } from "../context/cartContext";

const ItemListContainer = () => {
    const { category } = useParams();
    const [products, setProducts] = useState([]);

    const value = useContext (cartContext)

    useEffect(() => {
        fetch("/products.json") 
            .then((response) => response.json())
            .then((data) => {
                // Filtrar productos aquí después de cargar los datos
                const filteredProducts = category 
                    ? data.filter(product => product.category === category) 
                    : data;

                setProducts(filteredProducts); console.log("Productos filtrados:", filteredProducts);

            })
            .catch((error) => console.error("Error fetching products:", error));
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
