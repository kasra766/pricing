import React from "react";
const Login = () => {
  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="card w-50 shadow" data-aos="flip-left">
        <div className="card-body">
          <div className="card-title text-center">Login</div>
          <div className="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="UserName"
            />
            <label for="floatingInput">User Name</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>
          <div class="mt-3">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                id="disabledFieldsetCheck"
                
              />
              <label class="form-check-label" for="disabledFieldsetCheck">
                Remember me
              </label>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-3">
          <botton type="submit" className="btn btn-primary w-50">login</botton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
