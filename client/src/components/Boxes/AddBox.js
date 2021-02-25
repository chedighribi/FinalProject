import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBox } from "../../redux/actions/boxAction";
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import { Button } from "reactstrap";


const AddBox = () => {
  const [price, setPrice] = useState(0);
  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [madeby, setMadeby] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const addNewBox = () => {
    dispatch(addBox({ price, name, ingredient, madeby, img }));
    history.push("/managebox");
  };
  return (
    <div>
      <form>
      <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="Price"
                  label="Price"
                  name="Price"
                  autoComplete="Price"
                  autoFocus
                  type='number'
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />

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
                  id="Photo"
                  label="Photo"
                  name="Photo"
                  autoComplete="Photo"
                  autoFocus
                  value={img}
                  onChange={(e) => setImg(e.target.value)}
                />

            <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="Ingredient"
                  label="Ingredient"
                  name="Ingredient"
                  autoComplete="Ingredient"
                  autoFocus
                  value={ingredient}
                  onChange={(e) => setIngredient(e.target.value)}
                />
        <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="Madeby"
                  label="Madeby"
                  name="Madeby"
                  autoComplete="Madeby"
                  autoFocus
                  value={madeby}
                  onChange={(e) => setMadeby(e.target.value)}
                />
        <Button style={{color:'orange', borderColor:'orange', backgroundColor:'beige'}} onClick={addNewBox}>Submit</Button>

      </form>
    </div>
  );
};

export default AddBox;
