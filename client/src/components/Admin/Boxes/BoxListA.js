import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBox } from "../../../redux/actions/boxAction";
import BoxCardA from "./BoxCardA";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Input, Button } from "reactstrap";

const BoxListA = () => {
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
        placeholder="What dish ?"
        onChange={(e) => setFilter(e.target.value)}
        value={filter}
        style={{
          marginTop: "20px",
          marginBottom: "30px",
          marginRight: "50%",
          marginLeft: "35%",
        }}
      />
      <Link to="/addbox">
        <Button
          style={{ marginBottom: "30px", backgroundColor:'beige',color:"#f36846" }}
          size="lg"
          block
        >
          Add New Box
        </Button>
      </Link>
      <div className="tataCard">
        {boxs &&
          boxs
            .filter((el) =>
              el.name.toUpperCase().includes(filter.toUpperCase())
            )
            .map((el) => <BoxCardA el={el} key={el._id} />)}
      </div>
    </div>
  );
};
export default BoxListA;
