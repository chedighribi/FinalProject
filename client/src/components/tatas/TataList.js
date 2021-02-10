import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getTata} from '../../redux/actions/tataAction';
import TataCard from './TataCard';
const TataList =()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getTata());
    }, []);
    const tatawet = useSelector((state)=>state.tataReducer.tata.tatas);

    return(
        <div>
            {tatawet && tatawet.map((el)=><TataCard el={el} key = {el._id}/>)}
        </div>
    )
}
export default TataList ;