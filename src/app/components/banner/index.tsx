import React from 'react'

const Banner = () => {
  return (
    <>
     <div className="relative w-full bg-white">
      <div className="mx-auto max-w-7xl lg:px-8 mt-10">
     
        <div className="rounded-lg p-4">
          <img
            className="aspect-[3/2] w-[300px] rounded-lg object-cover lg:aspect-auto lg:h-[300px]"
            src="https://www.devui.io/hero.svg"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center px-4 py-10 lg:px-6">
        
        
        <h2 className="mt-8 max-w-4xl text-3xl font-bold tracking-tight themecolor md:text-4xl lg:text-6xl">
        Ship websites faster with CreativaUI component library
        </h2>
        {/* <p className="mt-8 max-w-3xl text-lg text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ipsam nulla aperiam quo
          possimus, nihil molestiae modi tenetur esse qui repudiandae cum fuga aspernatur ea?
        </p> */}
        <div className="mt-8">
          <button
            type="button"
            className="start rounded-md px-3 py-2.5 text-sm font-semibold themecolor shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Get Started
          </button>
        </div>
      </div>
      </div>
    </div>
    <hr />

    
    </>
  )
}

export default Banner