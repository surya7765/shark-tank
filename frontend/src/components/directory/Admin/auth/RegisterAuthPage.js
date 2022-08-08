import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const RegisterAuthPage = () => {
  var [name, setName] = useState("");
  var [email, setEmail] = useState("");
  var [phone, setPhone] = useState("");
  var [password, setPassword] = useState("");
  var [confirmpassword, setConfirmPassword] = useState("");
  var [validate, setValidate] = useState("");
  var [validatepass, setValidatePass] = useState("");
  var [loading, setLoading] = useState(false);
  var [error, setError] = useState(false);
  var [message, setMessage] = useState();

  const weak = /(?=.*[A-Za-z])[A-Za-z]{8,}/;
  const moderate = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const strong =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  let navigate = useNavigate();

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  useEffect(() => {
    if (password.length === 0) {
      setValidate("");
    }
    if (password.match(weak) != null) {
      setValidate("Too weak password");
    }
    if (password.match(moderate) != null) {
      setValidate("Moderate password");
    }
    if (password.match(strong) != null) {
      setValidate("Strong password");
    }
  }, [password]);

  function handleConfirmPass(e) {
    setConfirmPassword(e.target.value);
  }

  useEffect(() => {
    if (confirmpassword.length === 0) {
      setValidatePass("");
    }
    if (password !== confirmpassword) {
      setValidatePass("Password does not match");
    } else {
      setValidatePass("");
    }
  }, [confirmpassword]);

  let axiosConfig = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
    },
  };

  async function registerUser(e) {
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      phoneno: phone,
      password: password,
    };
    setLoading(true);
    await axios
      .post("http://127.0.0.1:4000/admin/register", data, axiosConfig)
      .then((res) => {
        setLoading(false);
        setMessage(res);
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setPhone("");
      })
      .catch((error) => {
        if (error.response) {
          setLoading(false);
          setError(true);
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
              <h1 className="text-center">Registering...</h1>
              <div
                className="spinner-border ms-auto"
                role="status"
                aria-hidden="true"
              ></div>
            </div>
          </div>
        ) : (
          <div>
            <h1 className="text-center">Register</h1>
            <form onSubmit={registerUser}>
              <div className="form-group">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  className="form-control"
                  id="name"
                  aria-describedby="nameHelp"
                  placeholder="Enter full name"
                />
              </div>
              <div className="form-group">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group">
                <input
                  value={password}
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  onChange={handlePassword}
                />
                <span className="text-muted">{validate}</span>
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="confirm-password"
                  placeholder="Confirm Password"
                  onChange={handleConfirmPass}
                />
                <span className="text-muted">{validatepass}</span>
              </div>
              <div className="form-group">
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="number"
                  className="form-control"
                  id="number"
                  placeholder="Phone number"
                />
              </div>
              <button type="submit" className="btn btn-success">
                Register
              </button>
            </form>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default RegisterAuthPage;
