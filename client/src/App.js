import './App.css';
import BoxList from './components/Boxes/BoxList'
import NavBar from './components/navBar/NavBar'
import RegisterSide from './components/RegisterAndLogin/RegisterSide'

function App() {
  return (
    <div className="App">
      <NavBar />
      <BoxList />
    </div>
  );
}

export default App;
