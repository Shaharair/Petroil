import React from 'react'
import CompanyRR from "../assets/company.png"

const About = () => {
  return (
    <section className="bg-[#F0F0F0] lg:py-[100px] py-[30px]">
        <div className="container px-3 lg:px-0 mx-auto">
            <div className=" lg:flex items-center">
                <div className=" lg:w-[50%] bg-[#F40404] lg:py-[100px] py-[50px]">
                    <h3 className="font-sans font-bold lg:text-[36px] text-[24px] text-[white] lg:pr-[400px] pr-[50px] pl-[100px]"> Learn more about our company</h3>
                </div>
                <div className="lg:w-[50%]">
                    <img src={CompanyRR} alt="company" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default About