import Link from "next/link";
import React from "react";

const Footar = () => {
  return (
    <footer className="bg-gray-600 px-4 sm:px-8 lg:px-16 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">

        
        <div className="flex-1 min-w-[250px]">
          <img
            src="https://algorooms.com/images/Logowhite.svg"
            alt="Logo"
            className="h-10 mb-4"
          />
          <p className="font-bold mb-2">Chart Powered by</p>
          <p className="mb-2 ml-2">Trading View</p>
          <p className="ml-2 text-sm">
            Reykle India Private Limited <br />
            CIN - U66120MP2022PTC060149 <br />
            Telephone 120-457-6454 <br />
            Mobile +91-7042132888
          </p>
        </div>

       
        <div className="flex-1 min-w-[150px] flex flex-col gap-2">
          <p>
            <Link href="">Home</Link>
          </p>
          <p>
            <Link href="/feature">Features</Link>
          </p>
          <p>
            <Link href="Contact">Contact</Link>
          </p>
        </div>

        <div className="flex-1 min-w-[150px] flex flex-col gap-2">
          <p>
            <Link href="Plan">Pricing</Link>
          </p>
          <p>
            <Link href="">Privacy Policy</Link>
          </p>
          <p>
            <Link href="">Refund Policy</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footar;




