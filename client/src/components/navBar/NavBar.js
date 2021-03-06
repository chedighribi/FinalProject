import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { logout } from "../../redux/actions/userAction";
import { useDispatch } from "react-redux";
import { resetorder } from "../../redux/actions/myorderAction";
import DropD from './DropDown'


export default function NavBar() {
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout())
    dispatch(resetorder())
  };

  const Admin = useSelector((state) => state.authReducer.admin)
  const user = useSelector((state) => state.authReducer.user)
  console.log(user)
 



 
  if (Admin) {
    return (
      <div>
        <AppBar position="static">
          <Toolbar className="NavMain" style={{ backgroundColor: "#719a7c" }}>
            <Typography variant="h6">
              <Link className="linkNavbar" to="/">
                Comme Tata Admin
              </Link>
            </Typography>
            {/* <BrowserRouter> */}
            <DropD user={user.fullname} />
            <div>
              <Link className="linkNavbar" to="/managetata">
                <Button color="inherit">Tatta</Button>
              </Link>
              <Link className="linkNavbar" to="/managebox">
                <Button color="inherit">Lunch</Button>
              </Link>
              <Link className="linkNavbar" to="/traiteurrequest">
                <Button color="inherit">Traiteur</Button>
              </Link>
              <Link className="linkNavbar" to="/allcontactus">
                <Button color="inherit">Contact</Button>
              </Link>
              <Link className="linkNavbar" to="/orders">
                <Button color="inherit">Orders</Button>
              </Link>
              <Link className="linkNavbar" to="/users">
                <Button color="inherit">users</Button>
              </Link>
            </div>
            <div className="outBtn">
              <Link className="linkNavbar" to="/">
                <Button
                  color="inherit"
                  style={{ backgroundColor: "#f36846" }}
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </Link>
            </div>
  
            {/* </BrowserRouter> */}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
  else if (!isAuth) {
    return (
      <div>
        <AppBar position="static">
          <Toolbar className="NavMain" style={{ backgroundColor: "#719a7c" }}>
            <Typography variant="h6">
              <Link className="linkNavbar" to="/">
                Comme Tata
              </Link>
            </Typography>
            {/* <BrowserRouter> */}
            <div>
              <Link className="linkNavbar" to="/tata">
                <Button color="inherit">Tatta</Button>
              </Link>
              <Link className="linkNavbar" to="/lunch">
                <Button color="inherit">Lunch</Button>
              </Link>
              <Link className="linkNavbar" to="/traiteur">
                <Button color="inherit">Traiteur</Button>
              </Link>
              <Link className="linkNavbar" to="/contactus">
                <Button color="inherit">Contact</Button>
              </Link>
              
            </div>
            <div className="LoReBtn">
              <div className="LoBtn">
                <Link className="linkNavbar" to="/login">
                  <Button
                    color="inherit"
                    style={{ backgroundColor: "#f36846" }}
                  >
                    Login
                  </Button>
                </Link>
              </div>
              <div className="ReBtn">
                <Link className="linkNavbar" to="/register">
                  <Button
                    color="inherit"
                    style={{ backgroundColor: "#f36846" }}
                  >
                    Register
                  </Button>
                </Link>
              </div>
            </div>

            {/* </BrowserRouter> */}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
  return (
    <div>
      <AppBar position="static">
        <Toolbar className="NavMain" style={{ backgroundColor: "#719a7c" }}>
          <Typography variant="h6">
            <Link className="linkNavbar" to="/">
              Comme Tata
            </Link>
          </Typography>
          {/* <BrowserRouter> */}
          <div>
            <Link className="linkNavbar" to="/tata">
              <Button color="inherit">Tatta</Button>
            </Link>
            <Link className="linkNavbar" to="/lunch">
              <Button color="inherit">Lunch</Button>
            </Link>
            <Link className="linkNavbar" to="/traiteur">
              <Button color="inherit">Traiteur</Button>
            </Link>
            <Link className="linkNavbar" to="/contactus">
              <Button color="inherit">Contact</Button>
            </Link>
            <Link className="linkNavbar" to="/shopping">
              <Button color="inherit">shop</Button>
            </Link>
            <Link className="linkNavbar" to="/myorders">
                <Button color="inherit">My order</Button>
              </Link>
          </div>
          <div className="outBtn">
            <Link className="linkNavbar" to="/">
              <Button
                color="inherit"
                style={{ backgroundColor: "#f36846" }}
                onClick={handleLogout}
              >
                Logout
              </Button>
            </Link>
          </div>

          {/* </BrowserRouter> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
