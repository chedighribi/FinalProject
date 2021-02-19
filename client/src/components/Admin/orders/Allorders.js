import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {getOrder} from '../../../redux/actions/myorderAction'
import OrderCom from './orderCom';


const Allorder =()=>{
    const dispatch = useDispatch();
    const allorders =()=> dispatch(getOrder());
    useEffect(() => {
        allorders();
      }, []);
    const t = useSelector(state => state.myorderReducer.allorder);
    return (
        <div className='listTraiteur'>
            {t && t.map((el)=> <OrderCom el={el}/> ) }
        </div>
    )
}
export default Allorder;