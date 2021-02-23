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

// Web UI

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Person name="Md. Rasel Hossain" age="25"></Person>
        <Person name="Md. Shawon Hossain" age="27"></Person>
        <Person name="Md. Silencer Hossain" age="15"></Person>
      </header>
    </div>
  );
}
export default App;
