import React from 'react';
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Contact = ()  => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  return(
    <div className='contact'>
      <h2>Contact Us</h2>
      <form className="form">
                <label>First Name</label>
                <input
                    type="text"
                    required
                    value={firstName}
                    onChange={(e) =>setFirstName(e.target.value)}
                />
                <label>Last Name</label>
                <input
                    type="text"
                    required
                    value={lastName}
                    onChange={(e) =>setLastName(e.target.value)}
                />
                <label>Email</label>
                <input
                    type="text"
                    required
                    value={email}
                    onChange={(e) =>setEmail(e.target.value)}
                />
                <label>Phone Number</label>
                <input
                    type="text"
                    required
                    value={phoneNumber}
                    onChange={(e) =>setPhoneNumber(e.target.value)}
                />
                <label>Message</label>
                <input
                    type="text"
                    required
                    value={message}
                    onChange={(e) =>setMessage(e.target.value)}
                />
                <div className="btnBox">
                    <div className="btn">
                    <NavLink to='/components/About' className="readMore">
                        Submit
                    </NavLink>
                    </div>
                </div>
      </form>
    </div>
  )

}

export default Contact;