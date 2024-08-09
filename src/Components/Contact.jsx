import React from 'react'

const Contact = () => {
  return (
    <section className="bg-[#F40404] border-b-2 border-[#FFB800]">
        <div className="container px-3 lg:px-0 mx-auto">
            <div className="flex items-center justify-between lg:py-[60px] py-[30px] flex-wrap">
                <div className="lg:w-[90%] w-[48%]">
                    <h3 className="font-sans font-bold lg:text-[24px] text-[16px] text-[white]">Want to join as member branch in your area?</h3>
                </div>
                <div className="lg:w-[10%] w-[48%]">
                    <a href="" className="font-sans font-medium lg:text-[18px] text-[14px] text-[white] border-2 border-[white] lg:px-[30px] px-[20px] lg:py-3 py-2 rounded duration-300 ease-in-out uppercase hover:bg-[white] hover:text-[black]">Contact</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact