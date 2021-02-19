import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBox } from "../../redux/actions/boxAction";
import BoxCard from "./BoxCard";
import { Link } from "react-router-dom";
import { useState } from "react";

import { Input } from "reactstrap";

const BoxList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBox());
  }, []);

  const boxs = useSelector((state) => state.boxReducer.boxs.box);
  const [filter, setFilter] = useState("");

  return (
    <div>
      <Input
        bsSize="lg"
        type="text"
        placeholder="filter by name"
        onChange={(e) => setFilter(e.target.value)}
        value={filter}
        style={{
          marginTop: "20px",
          marginBottom: "30px",
          marginRight: "50%",
          marginLeft: "35%",
        }}
      />
      <div className="tataCard" style={{ display: "flex" }}>
        {boxs &&
          boxs
            .filter((el) =>
              el.name.toUpperCase().includes(filter.toUpperCase())
            )
            .map((el) => <BoxCard el={el} key={el._id} />)}
      </div>
    </div>
  );
};
export default BoxList;
