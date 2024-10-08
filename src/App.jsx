import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {

  const mensaje = "Bienvenido a nuestra tienda!";

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"Bienvenido a nuestra tienda!"} />
    </div>
  );
}

export default App;
