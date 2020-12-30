import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'
import ItemCount from './components/ItemCount'
import ItemListContainer from './components/ItemListContainer';





function App() {

  return (
    <div>
     <NavBar />
     <ItemListContainer greeting="Aca pondría mis productos, si tuviera alguno" />
     <ItemCount />
    </div>
      
  );
}

export default App;
