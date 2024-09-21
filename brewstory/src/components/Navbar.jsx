import React, { useContext } from "react";
import logo from "../assets/Images/logo.png";
import AuthContext from "../auth/AuthContext";

function Navbar(props) {
  const { user, logout } = useContext(AuthContext);

  // Check if the user array is not empty and select the first user
  const loggedInUser = user?.length > 0 ? user[0] : null;

  return (
    <div>
      <nav className="navbar nav p-2 navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid nav border border-white rounded-5 m-3 p-4">
          <a className="navbar-brand" href="/">
            <img src={logo} height={100} alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {!loggedInUser ? (
                <>
                  <li className="nav-item">
                    <a
                      className="nav-link active text-white"
                      aria-current="page"
                      href="/"
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="/account">
                      Account
                    </a>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <a
                      className="nav-link active text-white"
                      aria-current="page"
                      href="/home"
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link text-white dropdown-toggle"
                      href="/categories"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Cafe Menu
                    </a>
                    <ul className="dropdown-menu navColor">
                      <li>
                        <a className="dropdown-item" href="/categories">
                          Menu
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Menu 2
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item dropdown">
                    <a
                      className="nav-link text-white dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Hi, {loggedInUser.fullname || "User"}
                    </a>
                    <ul className="dropdown-menu navColor">
                      <li>
                        <a className="dropdown-item" onClick={logout} href="#">
                          Logout
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="/contact">
                      Contact
                    </a>
                  </li>
                </>
              )}
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control text-white me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
