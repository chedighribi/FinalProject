import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {getMyOrder} from '../../redux/actions/myorderAction'
import OrdersTab from './ordersTab';


const Myorder =()=>{
    const dispatch = useDispatch();
    const myorders =()=> dispatch(getMyOrder());
    useEffect(() => {
        myorders();
      }, []);
    const t = useSelector(state => state.myorderReducer.myorder);
    return (
        <div>
            {t && t.map((el)=> <OrdersTab el={el}/>) }
        </div>
    )
}
export default Myorder;