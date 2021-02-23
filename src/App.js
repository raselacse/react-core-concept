import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';

function Person(props){
  const personStyle ={
    border: '1px solid yellow',
    padding: '10px',
    margin: '10px',
    width: '400px'
  }
  return(
    <div style={personStyle}>
      <h3>{props.name}</h3>
      <h4>{props.age}</h4>
    </div>
  );
}

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

// Web UI

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
        <Person name="Md. Rasel Hossain" age="25"></Person>
        <Person name="Md. Shawon Hossain" age="27"></Person>
        <Person name="Md. Silencer Hossain" age="15"></Person>
      </header>
    </div>
  );
}
export default App;
