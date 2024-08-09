import React from 'react'

const Welcome = () => {
  return (
    <section className="lg:py-[100px] py-[20px]">
        <div className="container px-3 lg:px-0 mx-auto">
            <div className="flex items-center justify-between">
                <div className="lg:w-[40%] w-full">
                    <h3 className="font-sans font-bold lg:text-[54px] text-[24px] text-[#262626] lg:pr-[250px]">The biggest supplier on the country</h3>
                </div>
                <div className="lg:w-[60%] w-full">
                    <p className="font-sans font-medium lg:text-[16px] text-[14px] text-[#6C6C6C] lg:pr-[300px]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Welcome