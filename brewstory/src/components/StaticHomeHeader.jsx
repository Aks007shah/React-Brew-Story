import React from "react";
import homeOne from "../assets/Images/Brew-Story/stat1.jpg";
import homeTwo from "../assets/Images/Brew-Story/ban3.png";
import homeThree from "../assets/Images/Brew-Story/staticHome2.jpg";
import homeCat from "../assets/Images/Brew-Story/category1.gif";
import homeCatTwo from "../assets/Images/Brew-Story/category2.gif";
import homeCatThree from "../assets/Images/Brew-Story/category3.gif";


import { Link } from "react-router-dom";
// import homeThree from '../assets/Images/Brew-Story/ban4.jpg';
// import homeTwo from "/src/assets/Images/Brew-Story/staticHome2.jpg";

function StaticHomeHeader(props) {
  return (
    <div>
      <div className="container-fluid rounded-4">
        <div className="row mt-3">
          <div className="col-sm-8 col-md-8">
            <img
              src={homeOne}
              className="img-fluid rounded-5 shadow-lg p-3 mb-5 bg-body rounded"
              alt=""
            />
          </div>

          <div className="col-sm-8 col-md-4  ms-auto me-auto text-center mytext shadow p-3 mb-5 bg-body rounded-5">
            <h2 className="mt-3 mytext">Let's Create Your</h2>
            <h1 className="mt-1">Brew Story!</h1>
            <p>
              Embark on a tantalizing journey through the rich tapestry of
              flavors at Brew Story, where every sip narrates a tale of
              craftsmanship and passion. Immerse yourself in a world where the
              aromatic symphony of carefully selected ingredients dances on your
              palate, leaving an indelible mark on your taste buds.
            </p>
          </div>
        </div>
        
        <div className="row mt-3">
          <div className="col-sm-4 ms-auto me-auto text-center mytext shadow p-3 mb-5 bg-body rounded-5">
            <h2 className="mt-3 mytext">Let's Create Your</h2>
            <h1 className="mt-1">Brew Story!</h1>
            <p>
              Embark on a tantalizing journey through the rich tapestry of
              flavors at Brew Story, where every sip narrates a tale of
              craftsmanship and passion. Immerse yourself in a world where the
              aromatic symphony of carefully selected ingredients dances on your
              palate, leaving an indelible mark on your taste buds.
            </p>
          </div>
          <div className="col-sm-8">
            <img
              src={homeTwo}
              className="img-fluid rounded-5 shadow-lg p-3 mb-5 bg-body rounded"
              alt=""
            />
          </div>
        </div>

        <div className="row mb-5 mt-5">
          <div className="col-md-12 shadow-lg p-3 mb-5 bg-light bg-opacity-25 rounded">
          {/* <h2 className="text-center mytext m-2">The Best!</h2> */}
            <div class="card-group mt-5 ">
              <div class="card bg-white bg-opacity-50 shadow-lg p-3 mb-5 bg-body rounded onlyBg border-0 rounded-top-5">
              <h3 className="text-center onlyBg mytext m-2">Popular</h3>
                <img src={homeCat} class="card-img-top" alt="..." />
                <div class="card-body ">
                  <h5 class="card-title">Espresso: Bold Awakening</h5>
                  <p class="card-text">
                    <small class="text-body-secondary">
                    Savor the intense richness of Espresso, a powerful brew that awakens your senses with every velvety sip.
                    </small>
                  </p>
                </div>
              </div>
              <div class="card shadow-lg p-3 mb-5 bg-body rounded mt-3 border-0 rounded-top-5 onlyBg">
              <h3 className="text-center onlyBg mytext m-2">Ones!</h3>
                <img src={homeCatTwo} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Cappuccino: Elevate Your Sip</h5>
                  <p class="card-text">
                    <small class="text-body-secondary">
                    Elevate your coffee experience with the timeless allure of a Cappuccino.
                    </small>
                  </p>
                </div>
              </div>
              <div class="card bg-white bg-opacity-50 shadow-lg p-3 mb-5 bg-body rounded mt-5 border-0 rounded-top-5 onlyBg">
              <h3 className="text-center onlyBg mytext m-2">To try...</h3>
                <img src={homeCatThree} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Cold Brew: "Chill and Thrill"</h5>
                  <p class="card-text">
                    <small class="text-body-secondary">
                    Chill and thrill your taste buds with the refreshing allure of Cold Brew.
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row bg-light bg-opacity-25 shadow-lg p-3 mb-5 bg-body rounded">
          <div className="col-md-12">
            <div
              className="container-fluid rounded-5 h-100 bannerImg mySimpleText"
              style={{
                backgroundImage: `url(${homeThree})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                height: "200px",
              }}
            >
              <div className="container-fluid rounded-5 d-flex bg-dark p-2 text-dark bg-opacity-75 flex-column">
                <div className="row vh-100 p-5">
                  <div className="col-sm-12 ms-auto me-auto">
                    <h1 className="text-white homeTitle ">
                      Unlimited Stories,
                    </h1>
                    <h2 className="text-white homeTitleTwo">
                      With you Friends and your Family!
                    </h2>
                    <p className="onlyBg mytext rounded-2 p-4">Embark on a tantalizing journey through the rich tapestry of flavors at Brew Story, where every sip narrates a tale of craftsmanship and passion. Immerse yourself in a world where the aromatic symphony of carefully selected ingredients dances on your palate, leaving an indelible mark on your taste buds. From the robust embrace of freshly roasted beans to the delicate notes of handpicked herbs, each brew is a unique chapter in our story. Whether you're a seasoned coffee connoisseur or a curious soul seeking a new adventure, Brew Story invites you to savor the extraordinary in every cup. Unveil the secrets behind the perfect brew, where every moment is a celebration of taste, tradition, and the artistry of a well-crafted beverage. Welcome to Brew Story, where every sip is a journey, and every cup tells a story worth savoring.</p>
                    <h5 className="text-white homePara">
                      Starts at ₹149. Order Now
                    </h5>
                    <button className="btn btn-danger homeButton btn-lg">
                      <Link
                        to="/account"
                        className="text-decoration-none text-white fw-bolder"
                      >
                        Login/SignUp Now
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default StaticHomeHeader;
