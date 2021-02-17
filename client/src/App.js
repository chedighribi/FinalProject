import "./App.css";
import BoxList from "./components/Boxes/BoxList";
import NavBar from "./components/navBar/NavBar";
import RegisterSide from "./components/RegisterAndLogin/RegisterSide";
import TraiteurSteps from "./components/Traiteur/TraiteurSteps";
import Shopping from "./components/Shop/Shopping";
import Home from "./components/Home/Home";
import { BrowserRouter, Link, Route } from "react-router-dom";
import TataList from "./components/tatas/TataList";
import ContactUs from "./components/ContactUs/ContactUs";
import Login from "./components/RegisterAndLogin/Login";
import AddBox from "./components/Boxes/AddBox";
import { getAuthUser } from "./redux/actions/userAction";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import AddTata from "./components/tatas/AddTata";

function App() {
  const dispatch = useDispatch();
  const getUser = () => dispatch(getAuthUser());

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Route exact path="/" render={() => <Home />} />
        <Route path="/register" render={() => <RegisterSide />} />
        <Route path="/lunch" render={() => <BoxList />} />
        <Route path="/tata" render={() => <TataList />} />
        <Route path="/traiteur" render={() => <TraiteurSteps />} />
        <Route path="/shopping" render={() => <Shopping />} />
        <Route path="/contactus" render={() => <ContactUs />} />
        <Route path="/login" render={() => <Login />} />
        <Route path="/api/addbox" render={() => <AddBox />} />
        <Route path="/api/addtata" render={() => <AddTata />} />
      </BrowserRouter>
    </div>
  );
}

export default App;
