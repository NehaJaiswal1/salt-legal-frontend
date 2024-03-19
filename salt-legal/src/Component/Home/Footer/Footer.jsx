
// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faStar, faChevronRight, faX } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';



const Footer = () => {
    return (
       
            <div className=" ">
               

                <div className="flex flex-wrap justify-between p-8 " style={{backgroundColor:'#02244A'}}>
                    <div className=" md:w-1/4 mb-8 ">
                        <h3 className="text-xl font-bold text-white">THE SALT LEGAL</h3>
                        <p className='text-white mt-2 text-sm mr-12'>
                        We excels in employer-employee disputes, labor law, startup advisory, cyberthefts, contracts and intellectual property, providing tailored solutions with innovation and excellence....
                        </p>
                    </div>

                    <div className="md:w-1/4 mb-8">
                        <h2 className="text-xl font-bold text-white">USEFUL LINKS</h2>
                        <ul>
                            <li className='text-white   mt-2 text-sm'><FontAwesomeIcon icon={faChevronRight} className="mr-1" />
                                <Link to="/">Home</Link></li>
                            <li className='text-white mt-2 text-sm '><FontAwesomeIcon icon={faChevronRight} className="mr-1" />
                                <Link to="/aboutus">About Us</Link></li>
                            <li className='text-white mt-2 text-sm'><FontAwesomeIcon icon={faChevronRight} className="mr-1" />
                                <Link to="/">Templates</Link></li>
                            <li className='text-white mt-2 text-sm'><FontAwesomeIcon icon={faChevronRight} className="mr-1" />
                                <Link to="/">Pricing</Link></li>
                          
                            <li className='text-white mt-2 text-sm'><FontAwesomeIcon icon={faChevronRight} className="mr-1" />
                                <Link to="/contact">Contact Us</Link></li>
                         
                        </ul>
                    </div>



                    <div className=" md:w-1/4 mb-8">
                        <h3 className="text-xl font-bold text-white">CONNECT WITH US</h3>
                        <ul>
                            <li className="text-white mt-2 text-sm">
                                <FontAwesomeIcon icon={faChevronRight} className="mr-1" />
                                <Link to="/">Home</Link>
                            </li>
                            <li className="text-white mt-2 text-sm">
                                <FontAwesomeIcon icon={faChevronRight} className="mr-1" />
                                <Link to="/">About Us</Link>
                            </li>
                            <li className="text-white mt-2 text-sm">
                                <FontAwesomeIcon icon={faChevronRight} className="mr-1" />
                                <Link to="/">Template</Link></li>
                            <li className="text-white mt-2 text-sm"> <FontAwesomeIcon icon={faChevronRight} className="mr-1" />
                                <Link to="/">Pricing</Link></li>
                            <li className="text-white mt-2 text-sm"> <FontAwesomeIcon icon={faChevronRight} className="mr-1" />
                                <Link to="/">Contact Us</Link></li>
                            
                        </ul>
                    </div>

                    <div className=" md:w-1/4 mb-8 text-white">
                        <h3 className="text-xl font-bold text-white">Follow Us</h3>
                        <p className='text-white mt-2 text-sm p-1'><FontAwesomeIcon icon={faPhone} size='lg' /> +1 (416) 871-5196</p>
                        <p className='text-white mt-2 text-sm p-1'><FontAwesomeIcon icon={faEnvelope} size='lg' /> contact@gmail.com</p>

                        <div className="flex items-center  mt-4">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white mr-2 rounded-full">
                                <FontAwesomeIcon icon={faFacebook} size="2x" />
                            </a>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white ml-2 mr-2 rounded-full">
                                <FontAwesomeIcon icon={faX} size="2x" />
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white ml-2 mr-2 rounded-full">
                                <FontAwesomeIcon icon={faInstagram} size="2x" />
                            </a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white ml-2 rounded-full">
                                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                            </a>
                        </div>


                    </div>
                </div>


               
                <div className=" text-left mb-2 font-semibold p-2" style={{backgroundColor:'#02244a'}}>
                    <p className='text-white text-xs' >COPYRIGHT © 2024 - THE SALT LEGAL - ALL RIGHTS RESERVED.</p>
                </div>

            </div>
      
    );
};

export default Footer;