import React, { useState } from "react";
import { cntctUs } from "../../redux/actions/contactUsAction";
import { useDispatch } from "react-redux";
import {useEffect} from "react"
import {getContactUs} from '../../redux/actions/contactUsAction'



const ContactUs = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLasttName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

useEffect(() => {
  dispatch(getContactUs());
  }, []);


  const add = (e) => {
    e.preventDefault()
    dispatch(cntctUs({ firstName, lastName, email, phone, message }));
    console.log(message, firstName);
  };

  return ( 
<div className="contact-us">
  <header className="contact-us-header">
    <h1>Lets talk about everything!</h1>
  </header>
  <div className="contact-form">
    <form>
      <div className="name">
        <input placeholder="First Name" value={firstName}  onChange={(e) => setFirstName(e.target.value)} type="text" />
        <input placeholder="Last Name" value={lastName} onChange={(e) => setLasttName(e.target.value)} type="text" />
      </div>
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
      <textarea placeholder="We would love to hear how we can help you succeed! Briefly describe your problem. " rows={4} value={message} onChange={(e) => setMessage(e.target.value)} />
      <div className="submit">
        <button type="button" onClick={add}>let's Talk</button>
      </div>
    </form>
  </div>
  <div className="reasons-why">
    <h2>Hate forms?</h2>
    <ul>
      <li>22440449</li>
      <li><a href="mailto:hellokhalti@agmail.com" className="emailCnt">hellokhalti@gmail.com</a></li>
      <li>39, Avenue Mohamed 5 Aouina, Tunisie</li>
    </ul>
  </div>
</div>
  );
};

export default ContactUs;
/*   <div>
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
    </div>*/