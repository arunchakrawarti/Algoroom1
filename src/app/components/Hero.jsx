import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 w-full mt-10">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center md:items-start md:justify-between">
        
       
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-snug">
            Trade Smarter, <br /> Not Harder
          </h1>
          <p className="text-xl sm:text-2xl text-white mt-4">
            Where efficiency meets success
          </p>
          <p className="text-white mt-4 text-sm sm:text-base">
            Our goal is to simplify the investment process,
            <br className="hidden sm:block" />
            making it as effortless as possible, even if you're new to investing.
          </p>

          <Link href="/get-started">
            <button className="mt-6 bg-blue-400 text-white px-6 py-3 rounded-md hover:bg-blue-500 transition">
              GET STARTED
            </button>
          </Link>
        </div>
        <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
          <img
            src="https://algorooms.com/images/by3.svg"
            alt="Hero Illustration"
            className="w-48 sm:w-64 md:w-80"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;





