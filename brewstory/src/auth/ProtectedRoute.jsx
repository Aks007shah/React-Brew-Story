import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let user = localStorage.getItem("brewUser");
    let checkUser = JSON.parse(user);

    try {
      if (!checkUser) {
        setIsLoggedIn(false);
        navigate("/account");
      } else {
        setIsLoggedIn(true);
      }
    } catch (error) {
      throw error;
    }
  }, [navigate]);

  return <div>{isLoggedIn && children}</div>;
}

export default ProtectedRoute;
