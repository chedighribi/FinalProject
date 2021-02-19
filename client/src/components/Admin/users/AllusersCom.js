import React from 'react';
import { Button, ListGroup, ListGroupItem } from 'reactstrap';
import {useDispatch} from 'react-redux'
import {deleteuser} from '../../../redux/actions/allusersAction'
const AllusersCom = ({el}) => {
  const dispatch = useDispatch()
  const handleDelete =()=>{
    dispatch(deleteuser(el._id))
  }
  return (
      <ListGroup className='TrRq'>
        <ListGroupItem active tag="a"  action style={{backgroundColor:'beige',color:'#719a7c', borderColor:'#719a7c'}}>{el.email}</ListGroupItem>
        <ListGroupItem tag="a"  action>{el.fullname} </ListGroupItem>
        <ListGroupItem disabled tag="a"  action>{el.phone}</ListGroupItem>
        <Button onClick={handleDelete}>Ban</Button>
      </ListGroup>
  );
}

export default AllusersCom;
