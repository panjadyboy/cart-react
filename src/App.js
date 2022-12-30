
import './App.css';
import Header from './header/Header';
import React, {useState} from 'react';
import ProductList from './ProductList';
import Cartdetails from './Cartdetails';

function App() {
  const [ product , setProduct] = useState([
    {
      id :'1',
      name :' Amazon alexa ',
      price : 3000,
      image:'./images/1.jpg'
  },
  {
      id :'2',
      name :' Amazon fire tv ',
      price : 2000,
      image:'./images/2.jpg'
  },
  {
      id :'3',
      name :' Bose headphones ',
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
      name :'pTron Air pod',
      price : 3000,
      image:'./images/5.jpg'
  },
  {
    id :'6',
    name :'DSLR camera',
    price : 10000,
    image:'./images/6.jpg'
},
{
  id :'7',
  name :'Lenovo Laptop',
  price : 23000,
  image:'./images/7.jpg'
},
{
  id :'8',
  name :'Realme C35',
  price : 19000,
  image:'./images/8.jpg'
},
{
  id :'9',
  name :'IPhone 13',
  price : 33000,
  image:'./images/9.jpg'
},
{
  id :'10',
  name :'Samsuang Tv',
  price : 20000,
  image:'./images/10.jpg'
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
