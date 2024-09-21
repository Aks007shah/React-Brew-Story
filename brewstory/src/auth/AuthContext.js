import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [formData, setFormData] = useState({});
  const [user, setUser] = useState([]);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // Register code
  const register = async (formData) => {
    const config = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    let checkUser = await fetch(
      `http://localhost:5000/user?email=${formData.email}`,
      { method: "GET" }
    );

    if (checkUser.ok) {
      let user = await checkUser.json();
      if (user.length > 0) {
        setMessage("User Already Exists");
      } else {
        let response = await fetch(`http://localhost:5000/user`, config);

        if (response.status === 201) {
          let user = await response.json();

          localStorage.setItem("brewUser", JSON.stringify(user));

          setTimeout(() => {
            navigate("/account/login");
          }, 1500);

          setMessage("User Registered Successfully");
        } else {
          setMessage("Something went wrong");
        }
      }
    } else {
      setMessage("Something went wrong, Please try again");
    }
  };

  // Login code
  const login = async (formData) => {
    let response = await fetch(
      `http://localhost:5000/user?email=${formData.email}&password=${formData.password}&name=${formData.name}`,
      { method: "GET" }
    );

    let user = await response.json();

    if (user.length > 0) {
      setMessage("Login Successful");
      localStorage.setItem("brewUser", JSON.stringify(user));

      setTimeout(() => {
        navigate("/home");
      }, 1000);
    } else {
      setMessage("Something went wrong, Please try again");
    }
  };

  //logout
  const logout = () => {
    localStorage.removeItem("brewUser");
    setUser(null);
    navigate("/");
  };

  // Get local user from storage
  const getLocaluser = async () => {
    let local = localStorage.getItem("brewUser");
    let myUser = JSON.parse(local);
    setUser(myUser);
  };

  useEffect(() => {
    getLocaluser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        message,
        setMessage,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
