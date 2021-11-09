import ItemListContainer from './components/ItemListContainer';
import BarNav from './components/NavBar/BarNav';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  let sloganB = "Streetwear sin género!"


  return (
    <div> {/* body */}
      
      <BarNav/>

      <div className="container-fluid text-center">

        <ItemListContainer sloganA={sloganB}/>
        

      </div>

    </div>
  );
}

export default App;
