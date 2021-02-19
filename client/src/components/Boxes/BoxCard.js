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
import {ADD,ADD2} from '../../redux/actions/shopAction'
import {useSelector} from 'react-redux'



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
  const t = useSelector(state=> state.cardReducer.Shopp);

const handleAdd = ()=>{
  let num =1;
  let y = t.find((s)=>s._id===el._id);
   if (!y)  { 
    el.num = num;
 (dispatch(ADD(el)))
}else 
 (dispatch(ADD2(el)))
};



  return (
    <div className='tataOne'>
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar} style={{backgroundColor:"#719a7c"}}>
            {el.price}
          </Avatar>
        }
        
        title={el.name}
        subheader={el.madeby}
      />
      <CardMedia style={{backgroundImage : `url(${el.img})`}}
        className={classes.media}
        imageUrl='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {el.ingredient}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button onClick={handleAdd} >
          ADD TO CARD
        </Button>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        
      </CardActions>
       
    </Card>
    </div>
  );
}

