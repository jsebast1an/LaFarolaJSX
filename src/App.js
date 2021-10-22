import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ShopNull from './components/ShopNull';

function App() {
  return (
    <div>

      <NavBar/>

      <div className="container-fluid text-center" onClick={ShopNull}>
        <button className="btn btn-success my-5">GO SHOPPING</button>
      </div>

    </div>
  );
}

export default App;
