import { useCart } from '../context/cartContext'
import { createOrder } from '../firebase/db'
import { serverTimestamp } from 'firebase/firestore'

function Cart() {
  const { cart, getTotal } = useCart(); // Usar el hook para obtener el carrito

  const handleSubmit = (e) => {
    e.preventDefault()
   
    const form = e.target
    const [name, email, phone] = form
    
    const order = {
      buyer: { name: name.value , email: email.value, phone: phone.value },
      items: cart,
      date: serverTimestamp(),
      total: getTotal(),
    }

    createOrder(order)
  }

  return (
    <div>
      {cart.map((prod) => (
        <div key={prod.id}>
          <p>{prod.title} x {prod.qty}</p> {/* Muestra el título y la cantidad del producto */}
        </div>
      ))}
      <div>
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="peposo@gmail.com" required />
          <input type="text" placeholder="Phone number" required />
          <button type="submit">Finalizar compra</button>
        </form>
      </div>
    </div>
  );
}

export default Cart;
