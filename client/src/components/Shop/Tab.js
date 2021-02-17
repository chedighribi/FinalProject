import React from 'react';
import { Table } from 'reactstrap';

const Tab = ({el}) => {
  return (
    <Table style={{ backgroundColor: "beige" }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Qts</th>
          <th>Price</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{el.name}</td>
          <td>{el.num}</td>
          <td>{el.price}</td>
          <td><button>x</button></td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Tab;
