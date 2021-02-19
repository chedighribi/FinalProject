import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const ContactsCom = ({el}) => {
  return (
      <ListGroup className='TrRq'>
        <ListGroupItem active tag="a"  action style={{backgroundColor:'beige',color:'#719a7c', borderColor:'#719a7c'}}>{el.email}</ListGroupItem>
        <ListGroupItem tag="a"  action>{el.firstName}  {el.lastName}</ListGroupItem>
        <ListGroupItem disabled tag="a"  action>{el.message}</ListGroupItem>
      </ListGroup>
  );
}

export default ContactsCom;
