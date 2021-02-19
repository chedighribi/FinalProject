import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTata } from "../../redux/actions/tataAction";
import TataCard from "./TataCard";
import { Input } from "reactstrap";

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
        placeholder="what type of cuisine ?"
        onChange={(e) => setFilter(e.target.value)}
        value={filter}
        style={{
          marginTop: "20px",
          marginBottom: "30px",
          marginRight: "50%",
          marginLeft: "35%",
        }}
      />
      <div className="tataCard">
        {tatawet &&
          tatawet
            .filter((el) =>
              el.speciality.toUpperCase().includes(filter.toUpperCase())
            )
            .map((el) => <TataCard el={el} key={el._id} />)}
      </div>
    </div>
  );
};
export default TataList;
