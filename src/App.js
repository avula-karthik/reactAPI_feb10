import logo from './logo.svg';
import './App.css';

import Product from './Product';
import Categories from './Categories';
import Allproducts from './Allproducts';

function App() {
  return (
    <div className="App">
      <Categories />
      <Product num={1} />
      <Allproducts />
    </div>
    
  );
}

export default App;
