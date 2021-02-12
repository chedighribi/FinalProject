import './App.css';
import BoxList from './components/Boxes/BoxList'
import NavBar from './components/navBar/NavBar'
import RegisterSide from './components/RegisterAndLogin/RegisterSide'
import TraiteurSteps from './components/Traiteur/TraiteurSteps'
import Shopping from './components/Shopping'


import {BrowserRouter, Link , Route} from "react-router-dom"
import TataList from './components/tatas/TataList'


function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <NavBar />
      
      <Route  path ="/register" render= {()=>  <RegisterSide /> }/>
      <Route  path ="/lunch" render= {()=> <BoxList /> }/>
      <Route path ='/tata'render = {()=> <TataList />} />
      <Route path ='/traiteur'render = {()=> <TraiteurSteps />} />
      <Route path ='/shopping'render = {()=> <Shopping />} />
      </BrowserRouter>

    </div>
  );
}

export default App;
