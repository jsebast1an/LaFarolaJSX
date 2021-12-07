import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import BarNav from './components/NavBar/BarNav';
import Cart from './components/NavBar/Cart';
import CartContextProvider from './components/Context/CartContext';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useEffect} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
/* AOS */
import AOS from "aos";
import "aos/dist/aos.css";


function App() {

  
  useEffect(() => {
    AOS.init();
    },[]) 

  return (
    <CartContextProvider>
    <Router>
      <> {/* body */}

        <BarNav />

        <Switch>
            <Route exact path="/">
                <ItemListContainer />
            </Route>

            <Route exact path="/category/:id">
                <ItemListContainer />
            </Route>

            <Route exact path="/detail/:id" component={ItemDetailContainer} />

            <Route exact path="/cart" component={Cart} />
                   
        </Switch>
      </>
    </Router> 
    </CartContextProvider>
  )}

export default App;
