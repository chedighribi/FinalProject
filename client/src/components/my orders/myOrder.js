import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {getMyOrder} from '../../redux/actions/myorderAction'


const Myorder =()=>{
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMyOrder());
      }, []);
    const t = useSelector(state => state.myorderReducer.myorder);
    return (
        <div>
            {t.map((el)=> el) }
        </div>
    )
}
export default Myorder;