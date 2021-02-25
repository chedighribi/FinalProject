import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTata, resetTataErrors } from "../../redux/actions/tataAction";
import { Redirect } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import { Alert, Button } from "reactstrap";

const AddTata = () => {
  const [name, setName] = useState("");
  const [adress, setAdress] = useState("");
  const [phone, setPhone] = useState();
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
        <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="Name"
              label="Name"
              name="Name"
              autoComplete="Name"
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

    <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="Adress"
                  label="Adress"
                  name="Adress"
                  autoComplete="Adress"
                  autoFocus
                  value={adress}
                  onChange={(e) => setAdress(e.target.value)}
                />
      
        <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="Image Link"
              label="Image Link"
              name="Image Link"
              autoComplete="Image Link"
              autoFocus
              value={img}
              onChange={(e) => setImg(e.target.value)}
            />
           <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="Phone"
              label="Phone"
              name="Phone"
              autoComplete="Phone"
              autoFocus
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="Biographie"
              label="Biographie"
              name="Biographie"
              autoComplete="Biographie"
              autoFocus
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
        <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="Specialité"
              label="Specialité"
              name="Specialité"
              autoComplete="Specialité"
              autoFocus
              value={speciality}
              onChange={(e) => setSpeciality(e.target.value)}
            />
        <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="Goal"
              label="Goal"
              name="Goal"
              autoComplete="Goal"
              autoFocus
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
            />
        <Button style={{color:'orange', borderColor:'orange', backgroundColor:'beige'}} onClick={addNewTata}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddTata;
