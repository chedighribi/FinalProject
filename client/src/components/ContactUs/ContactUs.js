import React from "react";

const ContactUs = () => {
  return (
    <div>
      <form>
        <label>First Name</label>
        <input type="text" />
        <label>Last Name</label>
        <input type="text" />
        <label>Email adress</label>
        <input type="email" />
        <label>Phone Number</label>
        <input type="number" />
        <label>Message</label>
        <textarea type="text" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
