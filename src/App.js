import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  let sloganB = "Streetwear sin género!"


  return (
    <div>

      <NavBar/>

      <div className="container-fluid text-center">

        <ItemListContainer sloganA={sloganB}/>
        

      </div>

    </div>
  );
}

export default App;
