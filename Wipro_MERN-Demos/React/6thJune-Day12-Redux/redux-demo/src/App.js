import logo from './logo.svg';
import NavBar from './NavBar';
import Shop from './Shop';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> Redux Demo </h1>
      <NavBar/>
      <div className='container'>
      <Shop/>
      </div>
      </div>
  );
}

export default App;
