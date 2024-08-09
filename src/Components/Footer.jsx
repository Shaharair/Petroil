import React from 'react'
import LogoRR from "../assets/logo.png"
import { IoMailUnreadOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import CartSS from "../assets/cart.png"
import CartDD from "../assets/cart1.png"
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <section className="bg-[#262626] lg:py-[170px] py-[30px]">
            <div className="container px-3 lg:px-0 mx-auto">
                <div className="flex items-center justify-between flex-wrap">
                    <div className="lg:w-[40%] w-[80%]">
                        <div className="lg:pb-[50px] pb-[20px]">
                            <img src={LogoRR} alt="logo" />
                        </div>
                        <div className="flex items-center lg:gap-5 gap-3 text-[white] lg:text-[24px] text-[18px]">
                            <IoMailUnreadOutline />
                            <h3 className="font-sans font-semibold lg:text-[24px] text-[14px] text-[white] lg:py-[10px] py-1">mail@yourcompany.com</h3>
                        </div>
                        <div className="flex items-center lg:gap-5 gap-3 text-[white] lg:text-[24px] text-[18px]">
                            <FiPhoneCall />
                            <h3 className="font-sans font-semibold lg:text-[24px] text-[14px] text-[white] lg:py-[10px] py-1">+896 120 5889 (Toll free)</h3>
                        </div>
                        <div className="flex items-center lg:gap-5 gap-3 text-[white] lg:text-[24px] text-[18px]">
                            <CiLocationOn />
                            <h3 className="font-sans font-semibold lg:text-[24px] text-[14px] text-[white] lg:py-[10px] py-1">101 Baker Street, New York, USA, 12345</h3>
                        </div>
                        <div className="flex items-center lg:gap-5 gap-3 lg:py-5 py-3 font-sans font-bold lg:text-[24px] text-[14px] text-[white]">
                            <FaFacebookF />
                            <FaTwitter />
                            <FaLinkedinIn  />
                            <FaInstagram  />
                        </div>
                    </div>
                    <div className="lg:w-[20%] w-[20%]">
                        <ul className="">
                            <li className="font-sans font-semibold lg:text-[18px] text-[14px] text-[white] lg:pb-[10px] pb-1">Company</li>
                            <li className="font-sans font-medium lg:text-[16px] text-[14px] text-[white] lg:py-[10px] py-1">Home</li>
                            <li className="font-sans font-medium lg:text-[16px] text-[14px] text-[white] lg:py-[10px] py-1">About</li>
                            <li className="font-sans font-medium lg:text-[16px] text-[14px] text-[white] lg:py-[10px] py-1">Services</li>
                            <li className="font-sans font-medium lg:text-[16px] text-[14px] text-[white] lg:py-[10px] py-1">Gallery</li>
                        </ul>
                    </div>
                    <div className="lg:w-[20%] w-[48%] mt-[20px] lg:mt-0">
                        <ul>
                            <li className="font-sans font-semibold lg:text-[18px] text-[14px] text-[white] lg:pb-[10px] pb-1">Others</li>
                            <li className="font-sans font-medium lg:text-[16px] text-[14px] text-[white] lg:py-[10px] py-1">Blog</li>
                            <li className="font-sans font-medium lg:text-[16px] text-[14px] text-[white] lg:py-[10px] py-1">Contact</li>
                            <li className="font-sans font-medium lg:text-[16px] text-[14px] text-[white] lg:py-[10px] py-1">Terms & Conditions</li>
                            <li className="font-sans font-medium lg:text-[16px] text-[14px] text-[white] lg:py-[10px] py-1">Privacy Policy</li>
                        </ul>
                    </div>
                    <div className="lg:w-[20%] w-[48%]">
                        <h3 className="font-sans font-semibold lg:text-[18px] text-[14px] text-[white] lg:pb-[20px] pb-[10px]">Certificate</h3>
                        <div className="flex gap-2">
                            <div className="">
                                <img src={CartSS} alt="cart" />
                            </div>
                            <div className="">
                                <img src={CartDD} alt="cart1" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer