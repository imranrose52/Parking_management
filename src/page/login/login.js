import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../store/slice/login-slice";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { errorMessage } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  return (
    <div className="form-body-style">
      <div className="shadow  login-form-style">
        <form>
          {errorMessage ? (
            <div className="alert alert-info" role="alert">
              <span>{errorMessage}</span>
            </div>
          ) : (
            ""
          )}

          <div>
            <h3 className="text-primary text-center fw-bold">Admin Login</h3>
            <hr />
          </div>
          <div className="mb-3 ">
            <label className="form-label fw-bold">Email address</label>

            <div className="input-group">
              <input
                type="email"
                className="form-control "
                placeholder="Enter Email"
                aria-describedby="emailHelp"
                onChange={(e) =>
                  setUser((prev) => ({
                    ...prev,
                    email: e.target.value,
                  }))
                }
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold">Password</label>
            <input
              type="password"
              className="form-control "
              placeholder="Enter Password"
              onChange={(e) =>
                setUser((prev) => ({
                  ...prev,
                  password: e.target.value,
                }))
              }
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input p-2 "
              id="exampleCheck1"
              checked
            />
            <label className="form-check-label fw-bold" htmlfor="exampleCheck1">
              Remember Me..
            </label>
          </div>
        </form>
        <button
          type="submit"
          className="btn btn-block btn-primary w-100"
          onClick={() => dispatch(login(user))}
        >
          Log In
        </button>
      </div>
    </div>
  );
};

export default Login;
