import React from 'react';

function Contact(props) {
    return (
        <div>
            <h1 className='text-center'>Contact Us</h1>

            <div className="container-fluid mb-4 bg-white bg-opacity-25 p-3">
                <div className="row">
                    <div className="col-sm-3 py-5 shadow-lg p-3 mb-5 bg-dark rounded m-3 border border-white">
                        <h2 className='text-decoration-underline mb-3'>Contact Details</h2>
                        <h5 className='py-1'><span className='text-decoration-underline'>Phone:</span> 82828228</h5>
                        <h5 className='py-1'><span className='text-decoration-underline'>Email:</span> abc@gmail.com</h5>
                        <h5 className='py-1'><span className='text-decoration-underline'>Address:</span> Abc, Flat 001, Mumbai - India</h5>
                    </div>
                    <div className="col-sm-8 shadow-lg p-3 mb-5 bg-dark rounded ms-auto border border-white">
                    <h2>Find us on Map!</h2>
                    <iframe className='rounded-2 container'
                            title="Google Maps"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54878.167947838934!2d76.72818133852961!3d30.721619243706176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed918ae6992b%3A0x90816ff14b8bd537!2sStarbucks!5e0!3m2!1sen!2sin!4v1704743993193!5m2!1sen!2sin"
                            width="600"
                            height="250"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Contact;