import React from "react";

const Status = () => {
  return (
    <section className="bg-white mt-[-40px] px-4 py-8">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-6">
       
        <div className="flex-1 min-w-[150px] md:min-w-[200px] flex flex-col items-center bg-gray-400 p-4 rounded-lg shadow-md">
          <p className="text-3xl sm:text-4xl md:text-5xl text-blue-500 font-bold">18K+</p>
          <p className="text-sm sm:text-base mt-2 text-gray-700">SUBSCRIBERS</p>
        </div>

        
        <div className="flex-1 min-w-[150px] md:min-w-[200px] flex flex-col items-center bg-gray-400 p-4 rounded-lg shadow-md">
          <p className="text-3xl sm:text-4xl md:text-5xl text-blue-500 font-bold">300K+</p>
          <p className="text-sm sm:text-base mt-2 text-gray-700">USER BASE</p>
        </div>

        
        <div className="flex-1 min-w-[150px] md:min-w-[200px] flex flex-col items-center bg-gray-400 p-4 rounded-lg shadow-md">
          <p className="text-3xl sm:text-4xl md:text-5xl text-blue-500 font-bold">100K+</p>
          <p className="text-sm sm:text-base mt-2 text-gray-700">TRADING VOLUME</p>
        </div>

       
        <div className="flex-1 min-w-[150px] md:min-w-[200px] flex flex-col items-center bg-gray-400 p-4 rounded-lg shadow-md">
          <p className="text-3xl sm:text-4xl md:text-5xl text-blue-500 font-bold">11</p>
          <p className="text-sm sm:text-base mt-2 text-gray-700">ACTIVE BROKERS</p>
        </div>
      </div>
    </section>
  );
};

export default Status;

