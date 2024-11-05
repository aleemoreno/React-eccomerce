// src/components/ItemDetailContainer.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch('/products.json')
            .then(response => response.json())
            .then(data => {
                const selectedProduct = data.find(item => item.id === parseInt(productId));
                setProduct(selectedProduct);
            })
            .catch(error => console.error("Error fetching product details:", error));
    }, [productId]);

    if (!product) {
        return <p>Cargando detalles del producto...</p>;
    }

    return <ItemDetail product={product} />;
};

export default ItemDetailContainer;