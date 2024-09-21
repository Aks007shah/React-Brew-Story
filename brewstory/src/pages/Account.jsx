import React from "react";
import { Link, Outlet } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";

function Account(props) {
  return (
    <>
      <div className="container-fluid mb-5 bg-white bg-opacity-25 p-2">
        <div className="row mt-5">
          <div className="col-sm-12">
            <h1 className="text-center justify-content-center align-items-center">
              Login/Register Now and <br /> Avail up to 40% off
            </h1>
          </div>
          </div>

          <div className="col-sm-12 bg-dark bg-opacity-25">
            <div className="card text-center mt-3 mb-3">
              <div className="card-header">
                <Link className="m-5 fs-4 mytext text-decoration-none" to="/account/login">Login</Link>
                <Link className="m-5 fs-4 mytext text-decoration-none"  to="/account/register">Register</Link>
              </div>
              <div className="card-body">
                <Outlet />
              </div>
            </div>
          
        </div>
      </div>
    </>
  );
}

export default Account;
