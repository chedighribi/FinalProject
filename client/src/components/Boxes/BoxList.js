import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBox } from "../../redux/actions/boxAction";
import BoxCard from "./BoxCard";
import { Link } from "react-router-dom";
import {useState} from 'react'
import {getAuthUser} from '../../redux/actions/userAction'
import {Input} from 'reactstrap';
import SearchBar from "../navBar/SearchBar";


const BoxList = () => {
  const dispatch = useDispatch();
  const getUser =()=>dispatch(getAuthUser());

  useEffect(() => {
    getUser();
    dispatch(getBox());
    }, []);

  const boxs = useSelector((state) => state.boxReducer.boxs.box);
  const [filter, setFilter] = useState('');

  return (
    <div>
        <Input type='text' placeholder='filter by name' onChange={(e)=>setFilter(e.target.value)} value={filter} width='50px' />
      <div className='tataCard'>
      {boxs && boxs.filter(el => ((el.name).toUpperCase()).includes((filter).toUpperCase())).map((el) => <BoxCard el={el} key={el._id} />)}
      </div>
      <Link to="/api/addbox">
        <button>add box</button>
      </Link>
    </div>
  );
};
export default BoxList;
