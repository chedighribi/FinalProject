import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBox } from "../../redux/actions/boxAction";
import { useHistory } from "react-router-dom";

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
        <label>price</label>
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type="text"
        />
        <label>name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
        <label>Photo</label>
        <input
          value={img}
          onChange={(e) => setImg(e.target.value)}
          type="text"
        />
        <label>ingredient</label>
        <input
          value={ingredient}
          onChange={(e) => setIngredient(e.target.value)}
          type="text"
        />
        <label>madeby</label>
        <input
          value={madeby}
          onChange={(e) => setMadeby(e.target.value)}
          type="text"
        />
        <button onClick={addNewBox}>Submit</button>
      </form>
    </div>
  );
};

export default AddBox;
