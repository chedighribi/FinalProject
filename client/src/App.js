import "./App.css";
import { BrowserRouter, Link, Route } from "react-router-dom";
import BoxList from "./components/Boxes/BoxList";
import NavBar from "./components/navBar/NavBar";
import RegisterSide from "./components/RegisterAndLogin/RegisterSide";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="App">
        <Route path="/lunchbox" render={() => <BoxList />} />
      </div>
    </BrowserRouter>
  );
}

export default App;
