import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const ContactsCom = ({el}) => {
  return (
      <ListGroup className='TrRq'>
        <ListGroupItem active tag="a"  action style={{backgroundColor:'beige',color:'#f36846', borderColor:'#f36846'}}>{el.email}</ListGroupItem>
        <ListGroupItem tag="a"  action>{el.firstName}  {el.lastName}</ListGroupItem>
        <ListGroupItem disabled tag="a"  action>{el.message}</ListGroupItem>
      </ListGroup>
  );
}

export default ContactsCom;
