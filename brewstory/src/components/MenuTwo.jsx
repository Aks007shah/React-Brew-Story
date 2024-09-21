import React from 'react';
import two from '../assets/Images/ALL DAY DELIGHTS.jpg'

function MenuTwo(props) {
    return (
        <>
         <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12">
                    <img src={two} className='img-fluid' alt="" />
                </div>
            </div>
         </div>   
        </>
    );
}

export default MenuTwo;