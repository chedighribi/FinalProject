import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTata } from "../../../redux/actions/tataAction";
import TataCardA from "./TataCardA";
import { Input, Button } from "reactstrap";

const TataList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTata());
  }, []);
  const tatawet = useSelector((state) => state.tataReducer.tata.tatas);
  const [filter, setFilter] = useState("");

  return (
    <div>
      <Input
        bsSize="lg"
        type="text"
        placeholder="What type of cuisine ?"
        onChange={(e) => setFilter(e.target.value)}
        value={filter}
        style={{
          marginTop: "20px",
          marginBottom: "30px",
          marginRight: "50%",
          marginLeft: "35%",
        }}
      />
      <Link to="/addtata">
        <Button
          style={{ marginBottom: "30px", backgroundColor:'beige',color:"#f36846" }}
          size="lg"
          block
        >
          Add New Tata
        </Button>
      </Link>
      <div className="tataCard">
        {tatawet &&
          tatawet
            .filter((el) =>
              el.speciality.toUpperCase().includes(filter.toUpperCase())
            )
            .map((el) => <TataCardA el={el} key={el._id} />)}
      </div>
    </div>
  );
};
export default TataList;
