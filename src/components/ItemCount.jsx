import { useState, useContext} from 'react'
import { cartContext } from '../context/cartContext'; 

function ItemCount ({ product }) {
const [count, setCount] = useState (1)
const { addToCart} = useContext (cartContext)

const handleAdd = () => setCount (count + 1)
const handleSub = () => setCount (count - 1)

const handleAddToCart = () => {
  const productWithQty = { ...product, qty: count }; 
  addToCart(productWithQty); 
};

  return (
    <div>
      <p>{count}</p>
      <button onClick ={handleAdd}>+</button>
      <button onClick ={handleSub}>-</button>
      <button onClick={handleAddToCart}>Agregar al carrito</button>
    </div>
   )
} 


export default ItemCount