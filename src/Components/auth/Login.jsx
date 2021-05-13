import React, { useState } from "react";
// import { useAuth } from "../../context/Auth";
// import { login } from "../../lib/api";

// async function loginUser(email, password) {
//   const data = await login(email, password);
//   return data;
// }

const Login = ({ closeLoginModal }) => {
  // const auth = useAuth();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  async function handleFormSubmit(event) {
    event.preventDefault();
    if (email && password) {
      try {
        // const data = await loginUser(email, password);
        // await auth.saveToken(data);
        closeModal();
      } catch (err) {
        alert(err);
      }
    }
  }

  function closeModal() {
    closeLoginModal();
  }

  return (
    <div className="d-flex justify-content-center align-items-center mt-5 ">
      <form
        className="d-flex flex-column justify-content-center p-5 bg-white w-100"
        onSubmit={(event) => handleFormSubmit(event)}
      >
        <div className="d-inline d-flex justify-content-end">
          <button
            className="btn-close btn-sm mb-2"
            onClick={closeModal}
            type="button"
            aria-label="Close"
          ></button>
        </div>
        <div className="row my-3 d-flex justify-content-between ">
          <label className=" col-sm-2 col-form-label">Email</label>
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
        <div className="row mb-3 d-flex justify-content-between">
          <label className="col-sm-2 col-form-label ">Password</label>
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
        <button className=" btn btn-dark rounded-pill" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
