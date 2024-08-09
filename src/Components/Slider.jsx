import React from 'react'
import CarFF from "../assets/car.png"
import StationDD from "../assets/station.png"
import OilSS from "../assets/oil.png"
import SheepRR from "../assets/sheep.png"

const Slider = () => {
  return (
    <section>
        <div className="py-5 px-3 lg:px-0">
            <div className="flex justify-between flex-wrap">
                <div className="lg:w-[24%] w-[48%]">
                    <img src={CarFF} alt="car" />
                </div>
                <div className="lg:w-[24%] w-[48%]">
                    <img src={StationDD} alt="station" />
                </div>
                <div className="lg:w-[24%] w-[48%] py-3 lg:py-0">
                    <img src={OilSS} alt="oil" />
                </div>
                <div className="lg:w-[24%] w-[48%] py-3 lg:py-0">
                    <img src={SheepRR} alt="sheep" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Slider