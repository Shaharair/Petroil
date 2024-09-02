import React, { useState } from 'react'
import LogoImg from "../assets/logo.png"
import { RxCross2 } from "react-icons/rx";
import { FaBars } from "react-icons/fa";



const Navbar = () => {

    let [show, setShow] = useState(false)


  return (
   <section className="bg-[#F40404] py-[30px]">
    <div className="container mx-auto px-3 lg:px-0">
        <div className="flex items-center justify-between">
            <div className="">
                <img src={LogoImg} alt="logo" />
            </div>
            <div className="">
                <ul className={`lg:flex gap-5 absolute z-[50] top-0 left-0 pt-[40px] lg:pt-0 lg:static duration-700 ease-in-out ${show == true ? "bg-[gray] top-[220px] w-[200px] h-[300px]" : " left-[-400px]"}`}>
                    <li className="font-sans font-semibold text-[18px] text-center lg:text-start text-[white] pt-[10px] lg:pt-0">Home</li>
                    <li className="font-sans font-semibold text-[18px] text-center lg:text-start text-[white]">About</li>
                    <li className="font-sans font-semibold text-[18px] text-center lg:text-start text-[white] py-1 lg:py-0">Services</li>
                    <li className="font-sans font-semibold text-[18px] text-center lg:text-start text-[white]">Gallery</li>
                    <li className="font-sans font-semibold text-[18px] text-center lg:text-start text-[white] py-1 lg:py-0">Blog</li>
                    <div className="lg:pl-[50px] pt-5 lg:pt-0 py-7 lg:py-0 pl-[50px]">
                        <a href="$" className="font-sans font-semibold lg:text-[18px] text-[14px] text-[white] border-2 border-[white] lg:px-[30px] px-[20px] lg:py-3 py-2 uppercase hover:bg-[white] hover:text-[black] rounded duration-300 ease-in-out">Contact</a>
                    </div>
                </ul>
            </div>
            <div onClick={()=>setShow(!show)} className="lg:hidden">
                {show == true ? <RxCross2/> : <FaBars/>}

            </div>
        </div>
    </div>
   </section>
  )
}

export default Navbar