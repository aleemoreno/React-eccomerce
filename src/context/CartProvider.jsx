import { cartContext } from './cartContext'
import { useState} from 'react'

function CartProvider ({ children }) {
  const [cart, setCart] = useState ([])

  const addToCart = item => setCart ([ ...cart, item])

 // Función para eliminar un artículo del carrito
 const removeFromCart = (itemId) => {
  setCart(cart.filter((item) => item.id !== itemId)); // Filtra el artículo por ID
};

// Función para obtener el número de artículos en el carrito
const getCartCount = () => {
  return cart.length; // Cuenta el número total de artículos en el carrito
};

const getQuantity = (itemId) => {
  const item = cart.filter((item) => item.id === itemId); // Filtra el artículo por ID
  return item.length; // Retorna la cantidad de ese artículo en el carrito
}

    return (
        <cartContext.Provider value= {{ cart, addToCart, getQuantity}}>
          {children}
        </cartContext.Provider>
    )
}

export default CartProvider