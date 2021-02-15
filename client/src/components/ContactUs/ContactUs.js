import React, { useState } from "react";
import { cntctUs } from "../../redux/actions/contactUsAction";
import { useDispatch } from "react-redux";

const ContactUs = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLasttName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const add = (e) => {
    e.preventDefault();
    dispatch(cntctUs({ firstName, lastName, email, phone, message }));
  };

  return (
    <div>
      <form>
        <label>First Name</label>
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
        />
        <label>Last Name</label>
        <input
          value={lastName}
          onChange={(e) => setLasttName(e.target.value)}
          type="text"
        />
        <label>Email adress</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
        <label>Phone Number</label>
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="number"
        />
        <label>Message</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          type="text"
        />
        <button onClick={add}>Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
