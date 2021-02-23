import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';
import { useState } from 'react';

const names = ['Shawon',"Farid",'Rafsan']
const products = [{name: 'Photoshop', price: '$90.99'},
                {name: 'Illustrator', price: '$80.99'},
                {name: 'PDF Reader', price: '$70.99'}]

function Product(props){
  const ProductStyle = {
    height: '300px',
    width: '400px',
    border: '1px solid gray',
    borderRadius: '5px',
    backgrouondColor: 'lightwhite'
  }
  const {name, price} = props.product;
  return(
    <div style={ProductStyle}>
      <h3>{name}</h3>
      <h1>{price}</h1>
      <button>Buy Now</button>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(10);
  // const handleIncrease = () =>{
  //   const newCount = count + 1;
  //   setCount(newCount);
  // } 
  // const handleDecrease= () =>{
  //   const newCount = count - 1;
  //   setCount(newCount);
  // } 
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count+1)}>Increase</button>
      <button onClick={() => setCount(count-1)}>Decrease</button>
    </div>
  )
}

// Web UI

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <ul>
          {
            products.map(product => <li>{product.name}</li>)
          }
          {
            names.map(name => <li>{name}</li>)
          }
        </ul>
        {
          products.map(product => <Product product={product}></Product>)
        }
      </header>
    </div>
  );
}
export default App;
