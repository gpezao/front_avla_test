import './App.css';
import ProductosAppBar from './components/Appbar'
import InputProducto from './components/Producto';
import ProductosList from './components/ProductosList';

function App() {
  return (
    <div className="App">
      <ProductosAppBar/>
      <InputProducto/>
      <ProductosList/>
    </div>
  );
}

export default App;
