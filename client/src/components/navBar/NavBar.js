import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {BrowserRouter, Link , Route} from "react-router-dom"



export default function NavBar() {

  return (
    <div >
      <AppBar position="static">
        <Toolbar className="NavMain" style={{backgroundColor:"#719a7c"}}>
          <Typography variant="h6">
          <Link className="linkNavbar"  to = "/" >
          Comme Tata
          </Link>
          </Typography>
          {/* <BrowserRouter> */}
          <div>
          <Link className="linkNavbar" to = "/tata" >
          <Button color="inherit">Tatta</Button>
          </Link>
          <Link className="linkNavbar" to = "/lunch" >
          <Button color="inherit">Lunch</Button>
          </Link>
          <Link className="linkNavbar" to = "/traiteur" >
          <Button color="inherit">Traiteur</Button>
          </Link>
          <Link className="linkNavbar" to = "/contact" >
          <Button color="inherit">Contact</Button>
          </Link>

          </div>
          <div className='LoReBtn'>
            <div className='LoBtn'>
          <Link className="linkNavbar" to = "/login" >
          <Button color="inherit" style={{backgroundColor:"#f36846"}}>Login</Button>
          </Link>
          </div>
          <div className='ReBtn'>
          <Link className="linkNavbar" to = "/register" >
          <Button color="inherit" style={{backgroundColor:"#f36846"}}>Register</Button>
          </Link>
          </div>
          </div>

          {/* </BrowserRouter> */}

        </Toolbar>
      </AppBar>
    </div>
  );
}
