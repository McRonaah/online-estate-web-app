import React from 'react';
import { useState } from "react";

const Contact = ()  => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [comment, setComment] = useState('');
  return(
    <div className='create'>
      <h2>Contact Us</h2>
      <form>
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
                <label>Comment</label>
                <input
                    type="text"
                    required
                    value={comment}
                    onChange={(e) =>setComment(e.target.value)}
                />
                <button>Submit</button>
      </form>
    </div>
  )

}

export default Contact;