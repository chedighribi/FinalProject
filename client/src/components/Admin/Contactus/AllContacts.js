import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContactUs } from "../../../redux/actions/contactUsAction";
import ContactsCom from "./ContactsCom";

const AllContacts = () => {
    const dispatch = useDispatch();


    useEffect(() => {
      dispatch(getContactUs());
    }, []);
    const Contacts = useSelector((state) => state.ContactUsReducer.contactUs.allContactUs);

  return (
    <div className='listContacts'>
        {Contacts && Contacts.map(el=> <ContactsCom el={el} />)}
    </div>
  );
};
export default AllContacts;
