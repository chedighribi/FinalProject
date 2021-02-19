import React from 'react';
import { Button, ListGroup, ListGroupItem } from 'reactstrap';
import {useDispatch} from 'react-redux'

const AllusersCom = ({el}) => {

  return (
      <ListGroup className='TrRq'>
        <ListGroupItem active tag="a"  action style={{backgroundColor:'beige',color:'#719a7c', borderColor:'#719a7c'}}>{el.email}</ListGroupItem>
        <ListGroupItem tag="a"  action>{el.fullname} </ListGroupItem>
        <ListGroupItem disabled tag="a"  action>{el.phone}</ListGroupItem>
        <Button >Ban</Button>
      </ListGroup>
  );
}

export default AllusersCom;
