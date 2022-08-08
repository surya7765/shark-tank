import React, { useState } from "react";
import LoginAuthPage from "./LoginAuthPage";
import RegisterAuthPage from "./RegisterAuthPage";

const Auth = () => {
  const [state, setState] = useState(<LoginAuthPage />);
  const [toggle, setToggle] = useState(true);

  function handleClick(event) {
    event.preventDefault();
    if (toggle) {
      setState(<RegisterAuthPage />);
      setToggle(!toggle);
    } else {
      setState(<LoginAuthPage />);
      setToggle(!toggle);
    }
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <div className="card m-4">
              {state}
              {/* if else */}
              {toggle ? (
                <span>
                  Don't have any account?{" "}
                  <span onClick={handleClick} style={{ cursor: "pointer" }}>
                    Register
                  </span>
                </span>
              ) : (
                <span>
                  Already have an account?{" "}
                  <span onClick={handleClick} style={{ cursor: "pointer" }}>
                    Login
                  </span>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
