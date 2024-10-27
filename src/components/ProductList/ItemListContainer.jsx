import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ItemListContainer.css"; 

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/products.json") 
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error("Error fetching products:", error));
    }, []);

    return (
        <div className="item-list-container">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ItemListContainer;
