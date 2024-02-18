import './App.css';
import { Navbar } from './Component/Navbar/Navbar';
//import { Products } from './Component/Product/Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './Component/Product/ProductList';
function App() {
  
  return (
    <div className="App">
      <Navbar></Navbar>
      <ProductList></ProductList>
      </div>
  );
}



export default App;
