import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const TraiteurCom = ({el}) => {
  return (
      <ListGroup className='TrRq'>
        <ListGroupItem active tag="a"  action style={{backgroundColor:'beige',color:'#f36846', borderColor:'#f36846'}}>{el.date}</ListGroupItem>
        <ListGroupItem tag="a"  action>{el.type} for {el.nPerson}</ListGroupItem>
        <ListGroupItem tag="a"  action>{el.adress}</ListGroupItem>
        <ListGroupItem tag="a"  action>{el.phone} / {el.email}</ListGroupItem>
        <ListGroupItem disabled tag="a"  action>{el.special}</ListGroupItem>
      </ListGroup>
  );
}

export default TraiteurCom;
