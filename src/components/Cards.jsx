import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";
import Image from "next/image";
function Cards() {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 ">
          <Image
            className="w-20 mx-auto mt-[-3rem] bg-white "
            src={Single}
            alt=""
          />
          <h2 className="text-2xl font-bold text-center py-8">Sunny Weather</h2>
          <p className="text-center text-4xl font-bold">Low interest rates</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">High lending limit</p>
            <p className="py-2 border-b mx-8">1Favorable conditions</p>
            
          </div>
        </div>

        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300 ">
          <Image
            className="w-20 mx-auto mt-[-3rem] bg-transpered "
            src={Double}
            alt=""
          />
          <h2 className="text-2xl font-bold text-center py-4">Rainy Weather</h2>
          <p className="text-center text-4xl font-bold">Moderate interest rates</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Flexible terms</p>
            <p className="py-2 border-b mx-8">Adverse conditions</p>
            
          </div>
        </div>

        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 ">
          <Image
            className="w-20 mx-auto mt-[-3rem] bg-white "
            src={Triple}
            alt=""
          />
          <h2 className="text-2xl font-bold text-center py-8">Cold Weather</h2>
          <p className="text-center text-4xl font-bold">Variable interest rates</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Risk management options</p>
            <p className="py-2 border-b mx-8">Changing conditions</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
