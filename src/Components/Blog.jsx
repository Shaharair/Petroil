import React from 'react'
import GroupDD from "../assets/group.png"
import GroupEE from "../assets/group1.png"
import GroupRR from "../assets/group2.png"
import { FaAngleRight } from "react-icons/fa6";


const Blog = () => {
    return (
        <section>
            <div className="container px-3 lg:px-0 mx-auto">
                <div className="flex items-center justify-between flex-wrap">
                    <div className="lg:w-[24%] w-[48%]">
                        <img src={GroupDD} alt="group" />
                    </div>
                    <div className="lg:w-[24%] w-[48%]">
                        <img src={GroupEE} alt="group1" />
                    </div>
                    <div className="lg:w-[24%] w-[48%] py-3 lg:py-0">
                        <img src={GroupRR} alt="group2" />
                    </div>
                    <div className="lg:w-[24%] w-[48%] py-3 lg:py-0">
                        <img src={GroupEE} alt="group1" />
                    </div>
                </div>
                <div className="flex items-center gap-3 justify-end lg:py-[20px] py-[10px]">
                    <h3 className="font-sans font-semibold lg:text-[18px] text-[14px] text-[#262626] uppercase">More from the bllog</h3>
                    <FaAngleRight/>
                </div>
            </div>
        </section>
    )
}

export default Blog