import React from "react";

const Navigate1 = () => {
  return (
    <section className="px-4 sm:px-8 lg:px-16 py-10">
      <div className="max-w-7xl mx-auto mt-20 flex flex-col lg:flex-row items-start gap-10">
        
        
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="https://algorooms.com/images/features.svg"
            alt="Features"
            className="w-full max-w-md lg:max-w-full"
          />
        </div>

        
        <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-amber-400 p-4 rounded-md hover:bg-red-500 hover:text-white transition-colors">
            <h1 className="text-2xl font-semibold mb-2">Begin with signing up</h1>
            <p>
              Start your trading journey by signing up and logging into your trading account on our trading platform.
            </p>
          </div>

          <div className="bg-amber-400 p-4 rounded-md hover:bg-red-500 hover:text-white transition-colors">
            <h1 className="text-2xl font-semibold mb-2">Pick Your Strategy</h1>
            <p>
              Protect yourself from the ups and downs of the market by including your preferred level of risk into the trading algorithm.
            </p>
          </div>

          <div className="bg-amber-400 p-4 rounded-md hover:bg-red-500 hover:text-white transition-colors">
            <h1 className="text-2xl font-semibold mb-2">Risk-Aware Trading</h1>
            <p>
              You can decide how to trade on our platform. Pick expert trading plans made by professionals, or make your own strategy.
            </p>
          </div>

          <div className="bg-amber-400 p-4 rounded-md hover:bg-red-500 hover:text-white transition-colors">
            <h1 className="text-2xl font-semibold mb-2">Trade with Ease</h1>
            <p>
              Once you've adjusted everything the way you prefer, you can start your trading journey using our platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navigate1;
