import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useDispatch } from "react-redux";
import { deleteTata } from "../../../redux/actions/tataAction";
import EditTataModal from "./EditTataModal";
import { Button } from "reactstrap";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function TataCard({ el }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const dispatch = useDispatch();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleDeleteTata = () => {
    dispatch(deleteTata(el._id));
  };

  return (
    <div className="tataOne">
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar
              aria-label="recipe"
              className={classes.avatar}
              style={{ backgroundColor: "#719a7c" }}
            >
              {el.name[5]}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={el.name}
          subheader={el.speciality}
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
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Button
            style={{ width: "100px" , backgroundColor:'beige', color:'#f36846',BorderColor:'#f36846'}}
            onClick={handleDeleteTata}
          >
            Delete
          </Button>
          <EditTataModal el={el} />
        </div>
        <CardActions disableSpacing>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            {el.bio}          
          </Typography>
          <Typography paragraph>
              {el.goal}
          </Typography>
        </CardContent>
      </Collapse>
      </Card>
    </div>
  );
}
