import React from 'react'
import { IoMailUnreadOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { FaFacebookF,FaTwitter,FaLinkedinIn,FaInstagram } from "react-icons/fa";


const Header = () => {
  return (
    <section className="bg-[#282828] py-5 border-b-2 border-[#FFB800]">
        <div className="container mx-auto">
            <div className="lg:flex items-center justify-between">
                <div className="lg:flex pl-[60px] lg:pl-0">
                    <div className="flex items-center gap-5 text-[white]">
                        <IoMailUnreadOutline/>
                        <p className="font-sans font-semibold lg:text-[18px] text-[white]">mail@yourcompany.com</p>
                    </div>
                    <div className="flex lg:pl-[50px] items-center gap-5 text-[white] py-1 lg:py-1">

                        <FiPhoneCall/>
                        <p className="font-sans font-semibold text-lg:[18px] text-[white]">+896 120 5889 (Toll free)</p>
                    </div>
                </div>
                <div className="flex items-center gap-5 text-[white] pl-[120px] lg:pl-0">
                        <FaFacebookF/>
                        <FaTwitter/>
                        <FaLinkedinIn/>
                        <FaInstagram/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Header