import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Person></Person>
        <Person></Person>
        <Person></Person>
      </header>
    </div>
  );
}
function Person(){
  const personStyle ={
    border: '1px solid yellow',
    padding: '10px',
    margin: '10px'
  }
  return(
    <div style={personStyle}>
      <h3>Name: Md. Rasel Hossain</h3>
      <h4>Age: 25</h4>
    </div>
  );
}

export default App;
