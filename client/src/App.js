import './App.css';
import BoxList from './components/Boxes/BoxList'
import NavBar from './components/navBar/NavBar'
import RegisterSide from './components/RegisterAndLogin/RegisterSide'

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
      </BrowserRouter>

    </div>
  );
}

export default App;
