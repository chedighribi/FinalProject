import React from 'react';
import {Dropdown} from 'react-bootstrap';
import ProfileModal from './EditProfileModal'

const DropD =({user})=>{
    return(
        <div>
            <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    {user}
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1"><ProfileModal /></Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item style={{color:'red'}}>Delet profile</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
        </div>
    )
}
export default DropD