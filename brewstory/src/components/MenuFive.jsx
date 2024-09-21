import React from 'react';
import five from '../assets/Images/all time.jpg'

function MenuFive(props) {
    return (
        <>
         <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12">
                    <img src={five} className='img-fluid' alt="" />
                </div>
            </div>
         </div>   
        </>
    );
}

export default MenuFive;