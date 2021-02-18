import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTata, resetTataErrors } from "../../redux/actions/tataAction";
import { useHistory } from "react-router-dom";
import { Alert } from "reactstrap";

const AddTata = () => {
  const [name, setName] = useState("");
  const [adress, setAdress] = useState("");
  const [phone, setPhone] = useState(0);
  const [bio, setBio] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [goal, setGoal] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const errors = useSelector((state) => state.tataReducer.errors);
  const addNewTata = (e) => {
    const newTata = { name, adress, phone, bio, speciality, goal };
    dispatch(addTata(newTata));
    !errors ? history.push("/tata") : e.preventDefault();
  };

  const resetErrors = () => {
    dispatch(resetTataErrors());
  };

  useEffect(() => {
    resetErrors();
  }, []);

  return (
    <div>
      <form>
        <label>Nom et prénom</label>
        <input
          style={{ width: "150px" }}
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
        <label>Adresse</label>
        <input
          style={{ width: "150px" }}
          value={adress}
          onChange={(e) => setAdress(e.target.value)}
          type="text"
          A
        />
        <label>Numero de téléphone</label>
        <input
          style={{ width: "150px" }}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="number"
        />
        <label>Biographie</label>
        <input
          style={{ width: "150px" }}
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          type="text"
        />
        <label>Specialité</label>
        <input
          style={{ width: "150px" }}
          value={speciality}
          onChange={(e) => setSpeciality(e.target.value)}
          type="text"
        />
        <label>Objectif</label>
        <input
          style={{ width: "150px" }}
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          type="text"
        />
        <button onClick={addNewTata}>Submit</button>
        {errors && errors.map((el) => <Alert color="danger">{el.msg}</Alert>)}
      </form>
    </div>
  );
};

export default AddTata;
