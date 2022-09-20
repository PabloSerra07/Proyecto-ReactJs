import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting={`saludo`}/>
    </div>

    
    
  );
}

export default App;
