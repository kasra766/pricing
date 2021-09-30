import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
    watch,
    setValue,
  } = useForm();
  const password = useRef();
  password.current = watch("password");
  const onsubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div className="d-flex justify-content-center mt-3">
      <div className="card w-75 shadow">
        <div className="card-body ">
          <h3 className="card-title text-center mb-5">Sign Up</h3>
          <form className="row" onSubmit={handleSubmit(onsubmit)}>
            <div className="col-md-6 mb-3 form-floating">
              <input
                type="text"
                className="form-control"
                {...register("fname", { required: "Frist Name Is Required" })}
                onChange={(e) => setValue("fname", e.target.value.trim())}
                placeholder="Frist Name"
                id="fname"
              />
              <label htmlFor="fname" className="ms-2 text-muted">
                Frist name
              </label>
              {errors.fname && (
                <small className="text-danger">{errors.fname.message}</small>
              )}
            </div>
            <div className="col-md-6 mb-3 form-floating">
              <input
                type="text"
                className="form-control"
                {...register("lname", { required: "Last Name Is Required" })}
                onChange={(e) => setValue("lname", e.target.value.trim())}
                placeholder="Last Name"
                id="lname"
              />
              <label htmlFor="lname" className="ms-2 text-muted">
                Last name
              </label>
              {errors.lname && (
                <small className="text-danger">{errors.lname.message}</small>
              )}
            </div>

            <div className="col-12 mb-3 form-floating">
              <input
                type="email"
                className="form-control"
                {...register("email", {
                  required: "Email Is Required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                onKeyUp={() => {
                  trigger("email");
                }}
                onChange={(e)=>setValue("email",e.target.value.trim())}
                placeholder="name@example.com"
                id="email"
              />
              <label htmlFor="email" className="ms-2 text-muted">
                Email
              </label>
              {errors.email && (
                <small className="text-danger">{errors.email.message}</small>
              )}
            </div>
            <div className="col-12 mb-3 form-floating">
              <input
                type="password"
                className="form-control"
                {...register("password", {
                  required: "Password Is Required",
                  // pattern: {
                  //   value:
                  //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/,
                  //   message: "Passowrd Is Invalid",
                  // },
                  minLength: {
                    value: 8,
                    message: "password must be 8 charcter or more",
                  },
                })}
                onKeyUp={() => {
                  trigger("password");
                }}
                onChange={(e) => setValue("password", e.target.value.trim())}
                placeholder="Password"
                id="password"
              />
              <label htmlFor="password" className="ms-2 text-muted">
                Password
              </label>
              {errors.password && (
                <small className="text-danger">{errors.password.message}</small>
              )}
            </div>
            <div className="col-12 mb-3 form-floating">
              <input
                type="password"
                className="form-control"
                {...register("passwordConfrim", {
                  required: true,
                  validate: (value) => value === password.current,
                })}
                onKeyUp={() => {
                  trigger("passwordConfrim");
                }}
                onChange={(e) =>
                  setValue("passwordConfrim", e.target.value.trim())
                }
                placeholder="Password"
                id="passwordConfrim"
              />
              <label htmlFor="passwordConfrim" className="ms-2 text-muted">
                Password Confrim
              </label>
              {errors.passwordConfrim &&
                errors.passwordConfrim.type === "required" && (
                  <small className="text-danger">
                    Password Confrim Is Required
                  </small>
                )}
              {errors.passwordConfrim &&
                errors.passwordConfrim.type === "validate" && (
                  <small className="text-danger">Password do not match</small>
                )}
            </div>
            <div className="col-12 mb-3">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  {...register("checked", {
                    required: "You must agree before submitting",
                  })}
                  id="invalidCheck"
                />
                <label
                  className="form-check-label text-start"
                  htmlFor="invalidCheck"
                >
                  Agree to <Link to="#">terms and conditions</Link>
                </label>
              </div>
              {errors.checked && (
                <small className="text-danger">{errors.checked.message}</small>
              )}
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
