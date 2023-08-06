import React from "react";
import { useState } from "react";

function Checkout() {
  const [user, setUser] = useState({
    firstName: " ",
    lastName: " ",
    zip: " ",
    email: " ",
    zipcode: " ",
  })
  function handleSubmit(e) {
    e.preventDefault();
    resetForm()
  }

  function resetForm() {
    setUser({
      firstName: " ",
      lastName: " ",
      zip: " ",
      email: " ",
      zipcode: " ",
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="submitForm">
        <h3>Checkout</h3>
        <label htmlFor="name">First Name</label>
        <input
          type="text"
          id="name"
        />

        <label htmlFor="name">Last Name</label>
        <input
          type="text"
          id="name"
        />

        <label htmlFor="name">Email</label>
        <input
          type="text"
          id="email"
        />

        <label htmlFor="name">Zip Code</label>
        <input
          type="number"
          id="zipcode"
        />
        <br />
        <input type="submit" />
      </form>
    </>
  )
}


// form to checkout, resets upon checkout
// when form is completed, 'Submit': `You have adopted birds. Thank you!`
// when alert box closed, cart should FULLY reset



export default Checkout;