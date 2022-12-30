
import './App.css';
import Header from './header/Header';
import React, {useState} from 'react';
import ProductList from './ProductList';
import Cartdetails from './Cartdetails';

function App() {
  const [ product , setProduct] = useState([
    {
      id :'1',
      name :'alexa',
      price : 3000,
      image:'./images/1.jpg'
  },
  {
      id :'2',
      name :'firetv',
      price : 2000,
      image:'./images/2.jpg'
  },
  {
      id :'3',
      name :'headphones',
      price : 4000,
      image:'./images/3.jpg'
  },
  {
      id :'4',
      name :'Redmi k10',
      price : 13000,
      image:'./images/4.jpg'
  },
  {
      id :'5',
      name :'Air pod',
      price : 3000,
      image:'./images/5.jpg'
  },
  ])
  const [cart , setCart] = useState([]);
  const [showCart , setShowCart] = useState(false);

const addToCart =  (data) => {
console.log(data)
setCart([...cart ,{...data , quantity:1}])
}

const handleShow = (value) => {
setShowCart(value)
}

  return (
    <div>
    <Header count={cart.length} handleShow={handleShow}></Header>
    {showCart ? <Cartdetails cart={cart}></Cartdetails> : <ProductList product={product} addToCart={addToCart}></ProductList>}
    
    
    </div>
  );
}

export default App;
