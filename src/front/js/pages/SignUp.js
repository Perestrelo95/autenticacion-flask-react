import React, { useState, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="row">
        <form>
          <input
            type="text"
            name="email"
            className="form-control m-1"
            value={email}
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="form-control m-1"
            name="password"
            value={password}
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
      </div>
      <div className="row">
        <button
          type="button"
          className="btn btn-success m-4"
          onClick={async (e) => {
            const success = await actions.signUp({
              email: email,
              password: password,
            });
            if (success) {
              navigate("/log-in");
              return;
            }
            alert("something happened while creating the user");
          }}
        >
          {" "}
          {"sign up..."}{" "}
        </button>
      </div>
    </div>
  );
};
