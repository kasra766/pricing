import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [state, setState] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    check: false,
    data: [],
  });

  const handleInputChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    setState((prevState) => ({
      data: [
        ...prevState.data,
        {
          fname: prevState.fname,
          lname: prevState.lname,
          email: prevState.email,
          password: prevState.password,
          check: prevState.check,
        },
      ],
      fname: "",
      lname: "",
      email: "",
      password: "",
      check: false,
    }));
    e.preventDefault();
  };
  return (
    <div className="d-flex justify-content-center mt-3">
      <div className="card w-75 shadow">
        <div className="card-body ">
          <h3 className="card-title text-center mb-5">Sign Up</h3>
          <form className="row needs-validation" onSubmit={handleSubmit}>
            <div className="col-md-6 mb-3 form-floating">
              <input
                type="text"
                name="fname"
                value={state.fname}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Frist Name"
                id="fname"
                required
              />
              <label for="fname" className="ms-2 text-muted">
                Frist name
              </label>
            </div>
            <div className="col-md-6 mb-3 form-floating">
              <input
                type="text"
                name="lname"
                value={state.lname}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Last Name"
                id="lname"
                required
              />
              <label for="lname" className="ms-2 text-muted">
                Last name
              </label>
            </div>

            <div className="col-12 mb-3 form-floating">
              <input
                type="email"
                name="email"
                value={state.email}
                onChange={handleInputChange}
                className="form-control"
                placeholder="name@example.com"
                id="email"
                required
              />
              <label for="email" className="ms-2 text-muted">
                Email
              </label>
            </div>
            <div className="col-12 mb-3 form-floating">
              <input
                type="password"
                name="password"
                value={state.password}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Password"
                minLength="8"
                id="password"
                required
              />
              <label for="password" className="ms-2 text-muted">
                Password
              </label>
            </div>
            <div className="col-12 mb-3">
              <div className="form-check">
                <input
                  type="checkbox"
                  name="check"
                  value={state.check}
                  onChange={handleInputChange}
                  className="form-check-input"
                  id="invalidCheck"
                  checked={state.check}
                  required
                />
                <label
                  className="form-check-label text-start"
                  for="invalidCheck"
                >
                  Agree to <Link to="#">terms and conditions</Link>
                </label>
                <div className="invalid-feedback">
                  You must agree before submitting.
                </div>
              </div>
            </div>
            <div className="col-12 mb-3">
              <button className="btn btn-primary" type="submit">
                Submit form
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
