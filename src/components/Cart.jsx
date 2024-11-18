import { useCart } from '../context/cartContext';

function Cart() {
  const { cart } = useCart(); // Usar el hook para obtener el carrito

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
