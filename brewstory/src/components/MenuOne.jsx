import React from 'react';
import one from '../assets/Images/2nd ALL TIME CHILLERS.jpg'

function MenuOne(props) {
    return (
        <>
         <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12">
                    <img src={one} className='img-fluid' alt="" />
                </div>
            </div>
         </div>   
        </>
    );
}

export default MenuOne;