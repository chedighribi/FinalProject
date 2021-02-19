import React from "react";
import {  useSelector } from "react-redux";

import ContactsCom from "./ContactsCom";

const AllContacts = () => {
    

    const Contacts = useSelector((state) => state.ContactUsReducer.contactUs.allContactUs);

  return (
    <div className='listContacts'>
        {Contacts && Contacts.map(el=> <ContactsCom el={el} />)}
    </div>
  );
};
export default AllContacts;
