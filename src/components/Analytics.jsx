import React from "react";
import Laptop from "../assets/laptop.jpg";

function Analytics() {
  return (
    <div className="w-full bg-white py-16 px-4 ">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="Laptop" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">Weather Indexed Loans</p>
          <h1 className="md:text-4xl sm:text-3x text-2xl font-bold py-2">
            Manage your money carefully
          </h1>
          <p>
            A trustworthy money market platform that lets you monitor your lending and
            borrowing.
          </p>
          <button className="bg-[#000300] text-[#00df9a] w-[200px] rounded-md font-medium my-6 md:mx-0 mx-auto py-3 ">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
