import React from 'react';
import three from '../assets/Images/HOT CLASSICS.jpg'

function MenuThree(props) {
    return (
        <>
         <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12">
                    <img src={three} className='img-fluid' alt="" />
                </div>
            </div>
         </div>   
        </>
    );
}

export default MenuThree;