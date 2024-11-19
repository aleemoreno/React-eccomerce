import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { getDetail } from '../firebase/db';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(); 
    const { id } = useParams();

    useEffect(() => {
         console.log("Producto ID:", id);  
        const fetchData = async () => {
            const productData = await getDetail(id);
            setProduct(productData); 
        };
        
        fetchData(); 
    }, [id]);

    return (
        <ItemDetail product={product} />
    );
}

export default ItemDetailContainer;