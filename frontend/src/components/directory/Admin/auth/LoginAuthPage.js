import React, { Fragment, useState } from "react";
import axios from "axios";
import {Navigate} from 'react-router-dom';

const LoginAuthPage = () => {
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");
  var [loading, setLoading] = useState(false);
  var [error, setError] = useState(false);
  var [message, setMessage] = useState();

  let axiosConfig = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
    },
  };

  async function loginUser(e) {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    setLoading(true);
    await axios
      .post("http://127.0.0.1:4000/admin/login", data, axiosConfig)
      .then((res) => {
        setLoading(false);
        setMessage(res);
        setEmail("");
        setPassword("");
        // console.log(res);
        // <Navigate to="/profile" />;
      })
      .catch((error) => {
        if (error.response) {
          setLoading(false);
          setError(true);
          // console.log(error.response);
          setMessage(error);
        }
      });
  }

  return (
    <Fragment>
      {message ? (
        error ? (
          <div className="alert alert-danger" role="alert">
            {message.response.data.message}
          </div>
        ) : (
          <div className="alert alert-success" role="alert">
            {message.data.message}
          </div>
        )
      ) : (
        ""
      )}
      <div className="card-body">
        {loading ? (
          <div className="text-center text-success">
            <div className="d-flex align-items-center">
              <h1 className="text-center ">Fetching data...</h1>
              <div
                className="spinner-border ms-auto"
                role="status"
                aria-hidden="true"
              ></div>
            </div>
          </div>
        ) : (
          <div>
            <h1 className="text-center">Login</h1>
            <form onSubmit={loginUser}>
              <div className="form-group">
                {/* <label htmlFor="email">Email address</label> */}
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                {/* <label htmlFor="password">Password</label> */}
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                />
              </div>
              <button type="submit" className="btn btn-success">
                Login
              </button>
            </form>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default LoginAuthPage;
