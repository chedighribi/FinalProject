import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {getAllUsers} from '../../../redux/actions/allusersAction'
import AllusersCom from './AllusersCom';


const Allusers =()=>{
    const dispatch = useDispatch();
    const allusers =()=> dispatch(getAllUsers());
    useEffect(() => {
        allusers();
      }, []);
    const t = useSelector(state => state.usersReducer.allusers.allUsers);
    console.log(t)
    return (
        <div className='listContacts'>
            {t && t.map((el)=> <AllusersCom el={el} />) }
        </div>
    )
}
export default Allusers;