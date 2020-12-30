import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'
// import Contador from './components/ItemCount'
import ItemListContainer from './components/ItemListContainer';



function App() {
  return (
    <div>
     <NavBar />
     <ItemListContainer greeting="Aca pondría mis productos, si tuviera alguno" />
    </div>

    
  );
}

export default App;
