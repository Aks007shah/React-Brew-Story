import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../auth/AuthContext';

function Login(props) {

  const [formData, setFormData] = useState('');
  const {message, setMessage, login} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange=((e)=>{
    const {name, value} = e.target;

    setFormData((prev)=>({
      ...prev, [name]: value
    }))    
  })

  const submitForm = async (e) => {
      e.preventDefault();
      login(formData);
  }

    return (
        <div>
            <form className="navColor p-3 rounded-2">
            <h1 className='mytext mb-4'>Welcome Back Buddy!</h1>
        <div className="mb-3">
          <label for="exampleInputText" className="form-label">
            Full Name
          </label>
          <input onChange={handleChange}
            type="text"
            className="form-control"
            id="exampleInputText"
            aria-describedby="emailHelp"
            name="fullname"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input onChange={handleChange}
            type="email"
            name='email'
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
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
        {message && (
          <div className="alert alert-danger" role="alert">
            {message}
          </div>
        )}
        <button onClick={submitForm} type="submit" className="btn btn-outline-dark mb-3">
          Submit
        </button>
      </form>
        </div>
    );
}

export default Login;