import React, { useEffect, useState } from "react";
import ProductCard from '../ProductCard/ProductCard';
import { useParams } from 'react-router-dom';
import "./ItemListContainer.css"; 

const ItemListContainer = () => {
    const { category } = useParams();
    console.log('Çategoria actual:', category); 
    const [products, setProducts] = useState([]);

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
                products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))
            ) : (
                <p>No hay productos disponibles en esta categoría.</p>
            )}
        </div>
    );
};

export default ItemListContainer;
