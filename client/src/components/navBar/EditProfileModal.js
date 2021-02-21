import { Input } from '@material-ui/core';
import React ,{useState}from 'react';
import {Button,Modal} from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";

const ProfileModal= () => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const user = useSelector((state) => state.authReducer.user);

  const [fullname, setNewName] = useState(user.fullname);
  const [email, setNewEmail] = useState(user.email);
  const [phone, setNewPhone] = useState(user.phone);
  const [adress, setNewAdress] = useState(user.adress);
  const [password, setNewPassword] = useState(user.password);
  
    return (
      <>
        <Button  onClick={handleShow}>
          Edit profile
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Profile</Modal.Title>
          </Modal.Header>
          <Modal.Body>
             <label>Full Name======:</label> <Input type='text' onChange={(e)=>setNewName(e.target.value)} value={fullname} /><br />
             <label>email==========:</label> <Input type='text' onChange={(e)=>setNewEmail(e.target.value)} value={email} /><br />
             <label>phone==========:</label> <Input type='Number' onChange={(e)=>setNewPhone(e.target.value)} value={phone} /><br />
             <label>password=======:</label> <Input type='Password' onChange={(e)=>setNewAdress(e.target.value)} value={password} /><br />
             <label>adress=========:</label> <Input type='text'onChange={(e)=>setNewPassword(e.target.value)} value={adress} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
export default ProfileModal