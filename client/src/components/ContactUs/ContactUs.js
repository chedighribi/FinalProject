import React, { useState, useEffect } from "react";
import { cntctUs } from "../../redux/actions/contactUsAction";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getContactUs } from "../../redux/actions/contactUsAction";
import { Alert } from "reactstrap";

const ContactUs = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLasttName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(getContactUs());
  }, []);

  const add = (e) => {
    dispatch(cntctUs({ firstName, lastName, email, message }));
    console.log(message, firstName);
    setIsSubmitted(true);
    if (
      !firstName ||
      !lastName ||
      !email.includes("@") ||
      !email.includes(".") ||
      message.length < 2
    ) {
      e.preventDefault();
    } else {
      setFirstName("");
      setLasttName("");
      setEmail("");
      setMessage("");
      history.push("/");
    }
  };

  return (
    <div className="contact-us">
      <header className="contact-us-header">
        <h1>Lets talk about everything!</h1>
        {isSubmitted && !firstName && (
          <Alert color="danger">please insert you first name</Alert>
        )}
        {isSubmitted && !lastName && (
          <Alert color="danger">please insert you last name</Alert>
        )}
        {isSubmitted && (!email.includes("@") || !email.includes(".")) && (
          <Alert color="danger">please insert a valid email adress</Alert>
        )}
        {isSubmitted && message.length < 2 && (
          <Alert color="danger">please insert you message</Alert>
        )}
      </header>
      <div className="contact-form">
        <form>
          <div className="name">
            <input
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
            />
            <input
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLasttName(e.target.value)}
              type="text"
            />
          </div>
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
          <textarea
            placeholder="We would love to hear how we can help you succeed! Briefly describe your problem. "
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="submit">
            <button type="button" onClick={add}>
              let's Talk
            </button>
          </div>
        </form>
      </div>
      <div className="reasons-why">
        <h2>Hate forms?</h2>
        <ul>
          <li>22440449</li>
          <li>
            <a href="mailto:hellokhalti@agmail.com" className="emailCnt">
              hellokhalti@gmail.com
            </a>
          </li>
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
