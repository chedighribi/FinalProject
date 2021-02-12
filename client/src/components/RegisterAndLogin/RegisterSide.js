import React ,{ useState } from 'react';
import {useDispatch} from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {registerUser} from '../../redux/actions/userAction'


const useStyles = makeStyles((theme) => ({
  
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://images.unsplash.com/photo-1581579439002-e29ac578f8d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function RegisterSide() {
  const classes = useStyles();

const [fullname, setNewName] = useState('');
const [email, setNewEmail] = useState('');
const [phone, setNewPhone] = useState(0);
const [adress, setNewAdress] = useState('');
const [password, setNewPassword] = useState('');
const dispatch = useDispatch();
const handleRegister =()=> {
  const user ={fullname, email, phone , adress, password}

 dispatch(registerUser(user))
};

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar} style={{backgroundColor:"#f36846"}}>
            <LockOutlinedIcon style={{color:"beige"}}/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="Fullname"
              label="Fullname"
              name="Fullname"
              autoFocus
              value = {fullname}
              onChange={(e)=> setNewName(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value = {email}
              onChange={(e)=> setNewEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="Phone"
              label="Phone"
              name="Phone"
              autoFocus
              value = {phone}
              onChange={(e)=> setNewPhone(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="Adress"
              label="Address"
              name="Adress"
              autoFocus
              value = {adress}
              onChange={(e)=> setNewAdress(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value = {password}
              onChange={(e)=> setNewPassword(e.target.value)}
            />
           
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              style={{backgroundColor:"#f36846"}}
              onClick={handleRegister}
            >
              Register
            </Button>
           
            <Box mt={5}>
              Come Chez Tata
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
