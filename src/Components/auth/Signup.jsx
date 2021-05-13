import React, { useState } from "react";
// import { useAuth } from "../../context/Auth";
// import { signup, login } from "../../lib/api";
import { signup } from "../../lib/api";

async function signupUser(email, password, firstName, lastName, phoneNumber) {
  const data = await signup(email, password, firstName, lastName, phoneNumber);
  return data;
}

const Signup = ({ closeSignupModal }) => {
  // const auth = useAuth();
  const [isMessageNotHide, setIsMessageNotHide] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const message =
    password !== confirmPassword
      ? `Passwords don't match`
      : "One or more fields are filled out incorrectly. Please check your entries and try again.";
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();

  async function handleFormSubmit(event) {
    event.preventDefault();
    if (password === confirmPassword) {
      setIsMessageNotHide(false);
      if (email && password && firstName && lastName && phoneNumber) {
        try {
          await signupUser(email, password, firstName, lastName, phoneNumber);
          // const data = await login(email, password)
          // await auth.saveToken(data);
          closeModal();
        } catch (err) {
          setIsMessageNotHide(true);
        }
      } else {
        setIsMessageNotHide(true);
      }
    } else {
      setIsMessageNotHide(true);
    }
  }

  function closeModal() {
    closeSignupModal();
  }

  function closeButton() {
    setIsMessageNotHide(false);
  }

  return (
    <div className="d-flex justify-content-center align-items-center pt-1">
      <form
        className="d-flex flex-column justify-content-center p-3 bg-white w-100"
        onSubmit={(event) => handleFormSubmit(event)}
      >
        {isMessageNotHide && (
          <div
            className="d-flex justify-content-center alert alert-danger mt-2 alert-dismissible fade show"
            role="alert"
          >
            {message}
            <button
              type="button"
              className="btn-close"
              onClick={closeButton}
              aria-label="Close"
            ></button>
          </div>
        )}
        {!isMessageNotHide && (
          <div className="d-inline d-flex justify-content-end">
            <button
              className="btn-close btn-sm mb-2"
              onClick={closeModal}
              type="button"
              aria-label="Close"
            ></button>
          </div>
        )}
        <div className="row my-3 row d-flex justify-content-between">
          <label className="col-sm-2 col-form-label">Last name</label>
          <div className="col-sm-10 w-75 ">
            <input
              type="text"
              className="form-control"
              onChange={(e) => setLastName(e.target.value)}
              id="lname"
              name="lname"
              placeholder="Last name ..."
            />
          </div>
        </div>
        <div className="row mb-3 row d-flex justify-content-between">
          <label className="col-sm-2 col-form-label">First name</label>
          <div className="col-sm-10 w-75">
            <input
              type="text"
              className="form-control"
              onChange={(e) => setFirstName(e.target.value)}
              id="fname"
              name="fname"
              placeholder="First name ..."
            />
          </div>
        </div>
        <div className="row mb-3 d-flex justify-content-between">
          <label className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10 w-75">
            <input
              type="password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              name="password"
              placeholder="Password ..."
            />
          </div>
        </div>
        <div className="row my-3 d-flex justify-content-between">
          <label className="col-sm-2 col-form-label">Confirm Password</label>
          <div className="col-sm-10 w-75">
            <input
              type="password"
              className="form-control"
              onChange={(e) => setConfirmPassword(e.target.value)}
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password ..."
            />
          </div>
        </div>
        <div className="row mb-3 d-flex justify-content-between">
          <label className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10 w-75">
            <input
              type="email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              name="email"
              placeholder="Email address ..."
            />
          </div>
        </div>
        <div className="row my-3 d-flex justify-content-between">
          <label className="col-sm-2 col-form-label">Phone</label>
          <div className="col-sm-10 w-75">
            <input
              type="tel"
              className="form-control"
              onChange={(e) => setPhoneNumber(e.target.value)}
              id="phone"
              name="phone"
              placeholder="054-55662500"
              pattern="[0-9]{3}-[0-9]{8}"
              required
            />
            <small className="">
              Format: 054-55662500 (For Your Cell Phone In Israel)
            </small>
          </div>
        </div>
        <button className="btn btn-dark rounded-pill mt-2" type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Signup;
