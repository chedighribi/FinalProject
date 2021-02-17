import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { editTata } from "../../redux/actions/tataAction";

const EditTataModal = ({ el }) => {
  const [modal, setModal] = useState(false);
  const [editedName, setEditedName] = useState(el.name);
  const [editedAdress, setEditedAdress] = useState(el.adress);
  const [editedPhone, setEditedPhone] = useState(el.phone);
  const [editedBio, setEditedBio] = useState(el.bio);
  const [editedSpeciality, setEditedSpeciality] = useState(el.speciality);
  const [editedGoal, setEditedGoal] = useState(el.goal);

  const dispatch = useDispatch();

  const toggle = () => {
    setModal(!modal);
    setEditedName(el.name);
    setEditedAdress(el.adress);
    setEditedPhone(el.phone);
    setEditedBio(el.bio);
    setEditedSpeciality(el.speciality);
    setEditedGoal(el.goal);
  };

  const handleEditTata = () => {
    const editedTata = {
      name: editedName,
      adress: editedAdress,
      phone: editedPhone,
      bio: editedBio,
      speciality: editedSpeciality,
      goal: editedGoal,
    };
    dispatch(editTata(el._id, editedTata));
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
            <label>Nom et prénom</label>
            <input
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
              type="text"
            />
            <label>Adresse</label>
            <input
              value={editedAdress}
              onChange={(e) => setEditedAdress(e.target.value)}
              type="text"
              A
            />
            <label>Numero de téléphone</label>
            <input
              value={editedPhone}
              onChange={(e) => setEditedPhone(e.target.value)}
              type="number"
            />
            <label>Biographie</label>
            <input
              value={editedBio}
              onChange={(e) => setEditedBio(e.target.value)}
              type="text"
            />
            <label>Specialité</label>
            <input
              value={editedSpeciality}
              onChange={(e) => setEditedSpeciality(e.target.value)}
              type="text"
            />
            <label>Objectif</label>
            <input
              value={editedGoal}
              onChange={(e) => setEditedGoal(e.target.value)}
              type="text"
            />
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleEditTata}>
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

export default EditTataModal;
