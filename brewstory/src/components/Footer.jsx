import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/Images/logo.png';

function Footer(props) {
    
  return (
    <div>
    <div className="container-fluid text-center d-flex flex-column ">
        <div className="row nav rounded-5 p-2 mb-2 border border-white foot">
            <div className="col-lg-3">
               <img className="border border-white rounded-5" src={logo} height={200} alt="" />
            </div>
            <div className="col-lg-3">
                <ul className='d-flex flex-column list-unstyled'>
                <h4 className="text-decoration-overline">Shows</h4>
                    <li><Link className="text-decoration-none text-white" to="">Home</Link></li>
                    <li><Link className="text-decoration-none text-white" to="">About</Link></li>
                    <li><Link className="text-decoration-none text-white" to="">Speed Test</Link></li>
                    <li><Link className="text-decoration-none text-white" to="">FAQs</Link></li>
                    <li><Link className="text-decoration-none text-white" to="">Media Center</Link></li>
                </ul>
            </div>
            <div className="col-lg-3">
                <ul className='d-flex flex-column list-unstyled'>
                    <h4>Useful Links</h4>
                    <li><Link className="text-decoration-none text-white" to="">Home</Link></li>
                    <li><Link className="text-decoration-none text-white" to="">About</Link></li>
                    <li><Link className="text-decoration-none text-white" to="">Speed Test</Link></li>
                    <li><Link className="text-decoration-none text-white" to="">FAQs</Link></li>
                    <li><Link className="text-decoration-none text-white" to="">Media Center</Link></li>
                </ul>
            </div>
            <div className="col-lg-3">
                <ul className='d-flex flex-column list-unstyled'>
                <h4>Other Links</h4>
                    <li><Link className="text-decoration-none text-white" to="">Home</Link></li>
                    <li><Link className="text-decoration-none text-white" to="">About</Link></li>
                    <li><Link className="text-decoration-none text-white" to="">Speed Test</Link></li>
                    <li><Link className="text-decoration-none text-white" to="">FAQs</Link></li>
                    <li><Link className="text-decoration-none text-white" to="">Media Center</Link></li>
                </ul>
            </div>
        </div>
    </div>
</div>
  );
}

export default Footer;
