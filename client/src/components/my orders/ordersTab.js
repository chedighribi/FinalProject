import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.warning.light    ,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}



const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function OrdersTab({el}) {
  const classes = useStyles();
    const orders = el.order

  return (
    <TableContainer component={Paper} className='tableList'>
      <Table className={classes.table} className='tableOne' aria-label="customized table">
        <TableHead>
          <TableRow style={{color:'beige'}}>
            <StyledTableCell>{el.time}</StyledTableCell>
            <StyledTableCell align="right">Made by</StyledTableCell>
            <StyledTableCell align="right">Total Price: {el.totalPrice}</StyledTableCell>
            <StyledTableCell align="right">Qnt</StyledTableCell>
            <StyledTableCell align="right">Special request</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <StyledTableRow key={order.name}>
              <StyledTableCell component="th" scope="row">
                {order.name}
              </StyledTableCell>
              <StyledTableCell align="right">{order.madeby}</StyledTableCell>
              <StyledTableCell align="right">{order.price}</StyledTableCell>
              <StyledTableCell align="right">{order.num}</StyledTableCell>
              <StyledTableCell align="right">{el.special}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
