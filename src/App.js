import NavBar from './components/NavBar';
import ShopNull from './components/ShopNull';
import {ItemListContainer} from './components/ItemListContainer';
import './App.css';

function App() {

  let sloganB = "Streetwear sin género!"
  let subSloganB = "estamos en contrucción de la mejor tienda para vos."

  return (
    <div>

      <NavBar/>

      <div className="container-fluid text-center">

        <ItemListContainer sloganA={sloganB} subSloganA={subSloganB} />

        <button className="btn btn-success my-5" onClick={ShopNull}>GO SHOPPING</button>
      </div>

    </div>
  );
}

export default App;
