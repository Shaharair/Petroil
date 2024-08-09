import React from 'react'

const Banner = () => {
  return (
    <section className="bg-ban lg:py-[257px] py-[50px] relative z-[1] after:absolute after:content-[''] after:top-0 after:left-0 after:h-full after:z-[-1] after:w-full after:bg-[rgba(0,0,0,0.5)]">
        <div className="container px-3 lg:px-0 mx-auto">
            <div className="">
                <h3 className="font-sans font-bold lg:text-[64px] text-[24px] text-[white] lg:pr-[650px]">We exist since 1975 on the oil and gas industry.</h3>
                <div className="py-[30px]">
                    <a href="$" className="font-sans font-semibold lg:text-[18px] text-[16px] text-[white] border-2 border-[#F40404] lg:px-[60px] px-[40px] uppercase lg:py-3 py-2 hover:bg-[#F40404] duration-300 ease-in-out">Learn More</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner