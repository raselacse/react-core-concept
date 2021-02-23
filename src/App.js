import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';

function App() {
  const person = {
    name: "Rasel",
    age: 25
  }
  const style ={
    color: 'black',
    backgroundColor: 'white'
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3 style={style}>Name: {person.name}</h3>
        <p style={{backgroundColor: 'cyan', color: 'black'}}>Age: {person.age}</p>
      </header>
    </div>
  );
}

export default App;
