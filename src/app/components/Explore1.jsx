import React from "react";

const Explore1 = () => {
  return (
    <div className="flex flex-wrap justify-evenly gap-6 px-4 sm:px-8 lg:px-16 py-10">
      <div className="flex-1 min-w-[250px] bg-yellow-300 rounded-tr-4xl rounded-md p-6 hover:bg-blue-400 transition-colors">
        <h1 className="text-xl font-semibold mb-3">Trading Engine</h1>
        <p className="hover:text-white">
          An intelligent tool for <br /> automated trading, <br />
          executing trades <br /> based on user-defined rules.
        </p>
      </div>

      <div className="flex-1 rounded-tr-4xl min-w-[250px] bg-yellow-300 rounded-md p-6 hover:bg-blue-400 transition-colors">
        <h1 className="text-xl font-semibold mb-3">Strategy Building Wizard</h1>
        <p className="hover:text-white">
          Revolutionizing trading <br /> by offering smart strategies <br />
          without coding. Users can <br /> create and sell ideas.
        </p>
      </div>

      <div className="flex-1 rounded-tr-4xl min-w-[250px] bg-yellow-300 rounded-md p-6 hover:bg-blue-400 transition-colors">
        <h1 className="text-xl font-semibold mb-3">Social Trading</h1>
        <p className="hover:text-white">
          Choose trader strategies <br /> based on performance, <br />
          replicate their actions in <br /> your portfolio, even <br /> without
          expertise.
        </p>
      </div>

      <div className="flex-1 rounded-tr-4xl min-w-[250px] bg-yellow-300 rounded-md p-6 hover:bg-blue-400 transition-colors">
        <h1 className="text-xl font-semibold mb-3">Back Testing</h1>
        <p className="hover:text-white">
          Manage trading <br /> differences using three <br /> backtesting options,
          with <br /> the worst-case scenario.
        </p>
      </div>
    </div>
  );
};

export default Explore1;

