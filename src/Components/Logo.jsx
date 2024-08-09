import React from 'react'
import LogoVV from "../assets/logo1.png"
import LogoDD from "../assets/logo2.png"
import LogoEE from "../assets/logo3.png"
import LogoRR from "../assets/logo4.png"

const Logo = () => {
  return (
    <section>
        <div className="container px-3 lg:px-0 mx-auto">
            <div className="flex items-center justify-between lg:py-[100px] py-[30px] flex-wrap">
                <div className="lg:w-[25%] w-[48%]">
                    <img src={LogoVV} alt="logo1" />
                </div>
                <div className="lg:w-[25%] w-[48%]">
                    <img src={LogoDD} alt="logo2" />
                </div>
                <div className="lg:w-[25%] w-[48%]">
                    <img src={LogoEE} alt="logo3" />
                </div>
                <div className="lg:w-[25%] w-[48%]">
                    <img src={LogoRR} alt="logo4" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Logo