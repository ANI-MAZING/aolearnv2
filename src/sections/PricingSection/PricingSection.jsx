import React from 'react';
import collab1 from './Binance.png'
import collab2 from './832_2x_shots_so.jpeg'
import collab3 from './Home.png'




const PricingSection = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center h-auto text-white px-5 py-20">

            <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-20 tracking-wide">
        Our Collaborations
      </h2>
            <div className="flex flex-row gap-10 w-3/4">
            <div className="bg-neutral-900 hover:border bg-gradient-to-b from-black to-zinc-800 transition duration-300 border-shimmer w-full sm:w-1/2 lg:w-1/3 p-2 rounded-lg shadow-lg">
      {/* Card Header */}
      <div className="relative">
        <img
          className="w-full  rounded-t-lg"
          src={collab1}
          alt="Card Header"
        />
      </div>

      {/* Card Body */}
      <div className="p-4">
        <h1 className="text-4xl sm:text-2xl lg:text-xl mt-2 mb-2 text-left tracking-wide text-orange-400 bg-clip-text">
          AO | Analytics
        </h1>
        <p className="text-white text-md">
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to &quot;Naviglio&quot; where you can enjoy the main
          night life in Barcelona.
        </p>
      </div>

      {/* Card Footer */}
      <div className="">
        <button className="bg-transperent text-zinc px-4 py-2 rounded-md hover:underline  transition">
          Read More
        </button>
      </div>
            </div>
            <div className="bg-neutral-900 hover:border bg-gradient-to-b from-zinc to-black transition duration-300 border-shimmer w-full sm:w-1/2 lg:w-1/3 p-2 rounded-lg shadow-lg">
      {/* Card Header */}
      <div className="relative">
        <img
          className="w-full  rounded-t-lg"
          src={collab3}
          alt="Card Header"
        />
      </div>

      {/* Card Body */}
      <div className="p-4">
        <h1 className="text-4xl sm:text-2xl lg:text-xl mt-2 mb-2 text-left tracking-wide text-orange-400 bg-clip-text">
          AO | Dev
        </h1>
        <p className="text-white text-md">
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to &quot;Naviglio&quot; where you can enjoy the main
          night life in Barcelona.
        </p>
      </div>

      {/* Card Footer */}
      <div className="">
        <button className=" text-white px-4 py-2 rounded-md hover:underline transition">
          Read More
        </button>
      </div>
            </div>
            <div className="bg-neutral-900 hover:border bg-gradient-to-b from-black to-zinc-800 transition duration-300 border-shimmer w-full sm:w-1/2 lg:w-1/3 p-2 rounded-lg shadow-lg">
      {/* Card Header */}
      <div className="relative">
        <img
          className="w-full  rounded-t-lg"
          src={collab2}
          alt="Card Header"
        />
      </div>

      {/* Card Body */}
      <div className="p-4">
        <h1 className="text-4xl sm:text-2xl lg:text-xl mt-2 mb-2 text-left tracking-wide text-orange-400 bg-clip-text">
          AO | Analytics
        </h1>
        <p className="text-white text-md">
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to &quot;Naviglio&quot; where you can enjoy the main
          night life in Barcelona.
        </p>
      </div>

      {/* Card Footer */}
      <div className="">
        <button className=" text-white px-4 py-2 rounded-md hover:underline transition">
          Read More
        </button>
      </div>
            </div>
      
            </div>
        </div>
    );
};

export default PricingSection;