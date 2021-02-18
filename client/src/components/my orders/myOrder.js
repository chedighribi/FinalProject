import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {getMyOrder} from '../../redux/actions/myorderAction'


const Myorder =()=>{
    const dispatch = useDispatch();
    const myorders =()=> dispatch(getMyOrder());
    useEffect(() => {
        myorders();
      }, []);
    const t = useSelector(state => state.myorderReducer.myorder);
    return (
        <div>
            {t.map((el)=> <h3>{el.adress}</h3>) }
        </div>
    )
}
export default Myorder;