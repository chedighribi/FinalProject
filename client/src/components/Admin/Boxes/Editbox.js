import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { editBox } from "../../../redux/actions/boxAction";

const Editbox = ({ el }) => {
  const [modal, setModal] = useState(false);
  const [editedName, setEditedName] = useState(el.name);
  const [editedingredient, setEditedingredient] = useState(el.ingredient);
  const [editedprice, setEditedprice] = useState(el.price);
  const [editedmadeby, setEditedmadeby] = useState(el.madeby);
 

  const dispatch = useDispatch();

  const toggle = () => {
    setModal(!modal);
    setEditedName(el.name);
    setEditedingredient(el.ingredient);
    setEditedprice(el.price);
    setEditedmadeby(el.madeby);
  };

  const handleEditbox = () => {
    const editedbox = {
      name: editedName,
      ingredient: editedingredient,
      price: editedprice,
      madeby: editedmadeby
      
    };
    dispatch(editBox(el._id, editedbox));
    toggle();
  };

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Modifier
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <form>
            <label>Box name</label>
            <input
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
              type="text"
            /><br />
            <label>ingredient</label>
            <input
              value={editedingredient}
              onChange={(e) => setEditedingredient(e.target.value)}
              type="text"
              A
            /><br />
            <label>Price</label>
            <input
              value={editedprice}
              onChange={(e) => setEditedprice(e.target.value)}
              type="number"
            /><br />
            <label>Made By</label>
            <input
              value={editedmadeby}
              onChange={(e) => setEditedmadeby(e.target.value)}
              type="text"
            />
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleEditbox}>
            Valider
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Annuler
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Editbox;