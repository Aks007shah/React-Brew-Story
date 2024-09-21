// Header.js

import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import two from "../assets/Images/2nd ALL TIME CHILLERS.jpg";
import one from "../assets/Images/Brew-Story/ban1.jpg";
import banTwo from "../assets/Images/Brew-Story/ban2.png";
import three from "../assets/Images/Brew-Story/ban3.png";
import four from "../assets/Images/Brew-Story/ban4.jpg";

function Header( {children} ) {
  const navigate = useNavigate();

  // const handleTabClick = (event, path) => {
  //   event.preventDefault();
  //   navigate(path);
  // };

  return (
    <div className="container-fluid">
      <div className="row mt-3">
        <div className="container-fluid mb-5 bg-white bg-opacity-25 p-2">
          <div className="row ">
            <div className="col-sm-12">
              <h1 className="text-center justify-content-center align-items-center m-3">
                Brew Story
              </h1>

              <div
                id="carouselExampleAutoplaying"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={one} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={banTwo} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={three} className="d-block w-100" alt="..." />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleAutoplaying"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleAutoplaying"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>

          <div className="col-sm-12 bg-dark bg-opacity-25">
            <div className="card text-center mt-3 mb-3">
              <div className="card-header border border-dark shadow-lg p-3 mb-5 bg-body rounded">
                <Link
                  className="m-5 fs-4 mytext text-decoration-none"
                  to="/home/menu-one"
                >
                  All Chillers
                </Link>
                <div className="vr"></div>
                <Link
                  className="m-5 fs-4 mytext text-decoration-none"
                  to="/home/menu-two"
                >
                  All Delights
                </Link>
                <div className="vr"></div>
                <Link
                  className="m-5 fs-4 mytext text-decoration-none"
                  to="/home/menu-three"
                >
                  Classics
                </Link>
                <div className="vr"></div>
                <Link
                  className="m-5 fs-4 mytext text-decoration-none"
                  to="/home/menu-four"
                >
                  Sweet Tooth
                </Link>
                <div className="vr"></div>
                <Link
                  className="m-5 fs-4 mytext text-decoration-none"
                  to="/home/menu-five"
                >
                  Chillers
                </Link>
                <div className="vr"></div>
              </div>
              <div className="card-body">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
