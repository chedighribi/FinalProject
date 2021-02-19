import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTata, resetTataErrors } from "../../redux/actions/tataAction";
import { Redirect } from "react-router-dom";
import { Alert, FormGroup, Label, Input, Button } from "reactstrap";

const AddTata = () => {
  const [name, setName] = useState("");
  const [adress, setAdress] = useState("");
  const [phone, setPhone] = useState(0);
  const [bio, setBio] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [goal, setGoal] = useState("");
  const [img, setImg] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.tataReducer.errors);
  const addNewTata = (e) => {
    const newTata = { name, adress, phone, bio, speciality, goal, img };
    dispatch(addTata(newTata));
    e.preventDefault();
    setIsSubmitted(true);
  };

  const resetErrors = () => {
    dispatch(resetTataErrors());
  };

  useEffect(() => {
    resetErrors();
  }, []);

  return (
    <div>
      {errors && errors.map((el) => <Alert color="danger">{el.msg}</Alert>)}
      {isSubmitted && !errors && <Redirect to="/managetata" />}
      <form
      // style={{
      //   display: "flex",
      //   flexDirection: "column",
      //   justifyContent: "center",
      //   alignContent: "center",
      // }}
      >
        <FormGroup>
          <Label>Nom et prénom</Label>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label>Adresse</Label>
          <Input
            value={adress}
            onChange={(e) => setAdress(e.target.value)}
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label>Photo</Label>
          <Input
            value={img}
            onChange={(e) => setImg(e.target.value)}
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label>Numero de téléphone</Label>
          <Input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="number"
          />
        </FormGroup>
        <FormGroup>
          <Label>Biographie</Label>
          <Input
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label>Specialité</Label>
          <Input
            value={speciality}
            onChange={(e) => setSpeciality(e.target.value)}
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label>Objectif</Label>
          <Input
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            type="text"
          />
        </FormGroup>
        <Button color="info" onClick={addNewTata}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddTata;
