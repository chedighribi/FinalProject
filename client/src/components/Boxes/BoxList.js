import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getBox} from '../../redux/actions/boxAction';
import BoxCard from './BoxCard';
const BoxList =()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getBox());
    }, []);
    const boxs = useSelector((state)=>state.boxReducer.boxs.box);

    return(
        <div>
            {boxs && boxs.map((el)=><BoxCard el={el} key = {el._id}/>)}
        </div>
    )
}
export default BoxList ;
