import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ShareIcon from '@material-ui/icons/Share';
import Button from '@material-ui/core/Button';
import {useDispatch} from 'react-redux'
import {deleteBox} from '../../../redux/actions/boxAction'



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));


export default function BoxCard({el}) {
  const classes = useStyles();
  
  const dispatch=useDispatch();


const handleDeleteBox = () => {
    dispatch(deleteBox(el._id));
  };



  return (
    <div className='tataOne'>
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar} style={{backgroundColor:"#f36846", color:'beige'}}>
            {el.price}
          </Avatar>
        }
        
        title={el.name}
        subheader={el.madeby}
      />
      <CardMedia
        className={classes.media}
        image=""
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {el.ingredient}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button onClick={handleDeleteBox} >
          delete
        </Button>
        
      </CardActions>
       
    </Card>
    </div>
  );
}
