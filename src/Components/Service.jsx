import React from 'react'
import ServiceSS from "../assets/service.png"
import ServiceDD from "../assets/service1.png"
import ServiceAA from "../assets/service2.png"

const Service = () => {
  return (
    <section className="lg:bg-[#E5E5E5]">
        <div className="px-3 lg:px-0">
            <div className="lg:flex">
                <div className=" lg:w-[50%] lg:py-[80px]">
                    <h3 className="font-sans font-bold lg:text-[64px] text-[24px] text-center lg:text-start py-4 lg:py-0 text-[#262626] lg:pl-[100px]">Our Services</h3>
                    <p className="font-sans font-medium lg:text-[16px] text-[14px] text-center lg:text-start pb-4 lg:pb-0 text-[#6C6C6C] lg:pr-[200px] lg:pl-[100px]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
                <div className="lg:w-[50%] pb-[30px] lg:pb-0">
                    <img src={ServiceSS} alt="service" />
                </div>
            </div>
            <div className="lg:flex">
                <div className="lg:w-[50%] pb-[30px] lg:pb-0">
                    <img src={ServiceDD} alt="service" />
                </div>
                <div className="lg:w-[50%]">
                    <img src={ServiceAA} alt="service2" />
                </div>
            </div>
        </div>
    </section>

  )
}

export default Service