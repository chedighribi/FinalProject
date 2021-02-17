import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTata } from "../../redux/actions/tataAction";
import TataCard from "./TataCard";

const TataList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTata());
  }, []);
  const tatawet = useSelector((state) => state.tataReducer.tata.tatas);
      const [filter, setFilter] = useState('');

  return (
    <div>
                  <input type='text' placeholder='Where do you want to travel ?' onChange={(e)=>setFilter(e.target.value)} value={filter} />
            {tatawet && tatawet.filter(el => ((el.speciality).toUpperCase()).includes((filter).toUpperCase())).map((el) =><TataCard el={el} key = {el._id}/>)}
      <Link to="/api/addtata">
        <button>add tata</button>
      </Link>
    </div>
  );
};
export default TataList;
