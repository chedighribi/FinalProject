import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {getAllUsers} from '../../../redux/actions/allusersAction'
import {deleteuser} from '../../../redux/actions/allusersAction'


const Allusers =()=>{
    const dispatch = useDispatch();
    const allusers =()=> dispatch(getAllUsers());
    useEffect(() => {
        allusers();
      }, []);
      const handledelete =(id)=>{
          dispatch(deleteuser(id))
      }
    const t = useSelector(state => state.usersReducer.allusers.allUsers);
    console.log(t)
    return (
        <div>
            {t && t.map((el)=> <div><h3>{el.adress}</h3><button >Delete</button></div>) }
        </div>
    )
}
export default Allusers;