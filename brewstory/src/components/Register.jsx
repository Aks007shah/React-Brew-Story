import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../auth/AuthContext";

function Register(props) {
  const [formData, setFormData] = useState({});
  const { message, setMessage, register } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitForm = async (e) => {
    e.preventDefault();
    register(formData);
  };

  return (
    <div>
      <form className="navColor p-3 rounded-2">
        <h1 className="mytext mb-4">Hey! Welcome to Brew Story</h1>
        <div className="mb-3">
          <label htmlFor="exampleInputText" className="form-label">
            Full Name
          </label>
          <input
            onChange={handleChange}
            type="text"
            className="form-control"
            id="exampleInputText"
            aria-describedby="emailHelp"
            name="fullname"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            onChange={handleChange}
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword2" className="form-label">
            Re Enter Your Password
          </label>
          <input
            onChange={handleChange}
            type="password"
            className="form-control"
            name="reEnterPassword"
            id="exampleInputPassword2"
          />
        </div>

        {message && (
          <div className="alert alert-danger" role="alert">
            {message}
          </div>
        )}

        <button
          type="submit"
          onClick={submitForm}
          className="btn btn-outline-dark mb-3"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Register;
