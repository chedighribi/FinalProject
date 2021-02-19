import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {getAllUsers} from '../../../redux/actions/allusersAction'


const Allusers =()=>{
    const dispatch = useDispatch();
    const allusers =()=> dispatch(getAllUsers());
    useEffect(() => {
        allusers();
      }, []);
    const t = useSelector(state => state.usersReducer.allusers.allUsers);
    console.log(t)
    return (
        <div>
            {t && t.map((el)=> <h3>{el.adress}</h3>) }
        </div>
    )
}
export default Allusers;