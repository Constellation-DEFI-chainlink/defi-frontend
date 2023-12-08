import React from "react";
import Typed from "react-typed";
import Connect from "./ConnectButton";

function Hero() {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">SolsticeLend</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          A Trustworthy money market platform.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold md:p-4 py-4">
            Fast, flexible financing for
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold pl-2 text-gray-500 "
            strings={["Lend", "Lease", "Spend"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Monitor your lending and borrowing.
        </p>
        {/* <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
          Get Started
        </button> */}
        <Connect />
      </div>
    </div>
  );
}

export default Hero;
