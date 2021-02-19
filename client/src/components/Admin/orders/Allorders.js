import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {getOrder} from '../../../redux/actions/myorderAction'


const Allorder =()=>{
    const dispatch = useDispatch();
    const allorders =()=> dispatch(getOrder());
    useEffect(() => {
        allorders();
      }, []);
    const t = useSelector(state => state.myorderReducer.allorder);
    return (
        <div>
            {t && t.map((el)=> <h3>{el.adress}</h3>) }
        </div>
    )
}
export default Allorder;