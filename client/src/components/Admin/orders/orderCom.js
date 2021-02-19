import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const OrderCom = ({el}) => {
    const order = el.order
  return (
      <ListGroup className='TrRq'>
        <ListGroupItem active tag="a"  action style={{backgroundColor:'beige',color:'#f36846', borderColor:'#f36846'}}>{el.time}</ListGroupItem>
        <ListGroupItem tag="a"  action>{el.phone}</ListGroupItem>
        <ListGroupItem tag="a"  action>{el.adress}</ListGroupItem>
  <ListGroupItem tag="a"  action>{order.map ((o)=> ` ${o.num}:${o.name} - `)}</ListGroupItem>
        <ListGroupItem tag="a"  action>{el.special}</ListGroupItem>
        <ListGroupItem disabled tag="a"  action>{el.totalPrice}</ListGroupItem>
      </ListGroup>
  );
}

export default OrderCom;