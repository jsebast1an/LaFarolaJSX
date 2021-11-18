import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import BarNav from './components/NavBar/BarNav';
import Slider from './components/Bootstrap/Slider';
import Cart from './components/NavBar/Cart';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
/* AOS */
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  let sloganB = <Slider />
  
  useEffect(() => {
    AOS.init();
    },[]) 

  return (
    <Router>
      <div> {/* body */}

        <BarNav />

        <Switch>
            <Route exact path="/">
                <ItemListContainer sloganA={sloganB} />
            </Route>

            <Route exact path="/category/:id">
                <ItemListContainer sloganA={sloganB} />
            </Route>

            <Route exact path="/detail/:id" component={ItemDetailContainer} />

            <Route exact path="/cart" component={Cart} />
                   
        </Switch>
      </div>
    </Router> 
  )}

export default App;
