import React from "react";
import { Link } from "react-router-dom";
import styles from './Categories.module.css'

function Categories(props) {
  const { items } = props;

  return (
    <div>
      <h1 className="text-center">Menu</h1>

      <div className="card-container text-center row row-cols-sm-2 row-cols-md-3 ">
      
        {items.map((item) => (
          <div key={item.name} className="col mb-4">
            <div className={`${styles.myCard} card`}>
              <img src={item.image} className={`${styles.myImg} card-img-top`} alt="..." />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.calK}</p>
                <span>{item.currentPrice}</span>
                <span>{item.orignalPrice}</span>
                <span>{item.discount}</span>
                <div>
                <Link to="#" className={`${styles.btnText} btn btn-outline-white mt-2`}>
                  Add to Cart
                </Link>
                

                
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
