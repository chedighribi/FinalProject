import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTata } from "../../redux/actions/tataAction";
import { useHistory } from "react-router-dom";

const AddTata = () => {
  const [name, setName] = useState("");
  const [adress, setAdress] = useState("");
  const [phone, setPhone] = useState(0);
  const [bio, setBio] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [goal, setGoal] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const addNewTata = () => {
    const newTata = { name, adress, phone, bio, speciality, goal };
    dispatch(addTata(newTata));
    history.push("/tata");
  };

  return (
    <div>
      <form>
        <label>Nom et prénom</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
        <label>Adresse</label>
        <input
          value={adress}
          onChange={(e) => setAdress(e.target.value)}
          type="text"
          A
        />
        <label>Numero de téléphone</label>
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="number"
        />
        <label>Biographie</label>
        <input
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          type="text"
        />
        <label>Specialité</label>
        <input
          value={speciality}
          onChange={(e) => setSpeciality(e.target.value)}
          type="text"
        />
        <label>Objectif</label>
        <input
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          type="text"
        />
        <button onClick={addNewTata}>Submit</button>
      </form>
    </div>
  );
};

export default AddTata;
