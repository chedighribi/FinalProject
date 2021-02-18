import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBox } from "../../redux/actions/boxAction";
import BoxCard from "./BoxCard";
import { Link } from "react-router-dom";
import { useState } from "react";
import { getAuthUser } from "../../redux/actions/userAction";

const BoxList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBox());
  }, []);

  const boxs = useSelector((state) => state.boxReducer.boxs.box);
  const [filter, setFilter] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="filter by name"
        onChange={(e) => setFilter(e.target.value)}
        value={filter}
      />
      {boxs &&
        boxs
          .filter((el) => el.name.toUpperCase().includes(filter.toUpperCase()))
          .map((el) => <BoxCard el={el} key={el._id} />)}

      <Link to="/api/addbox">
        <button>add box</button>
      </Link>
    </div>
  );
};
export default BoxList;
