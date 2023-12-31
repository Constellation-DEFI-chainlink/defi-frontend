import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";
import {Link} from "react-router-dom";

function Footer() {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a] ">SolsticeLend</h1>
        <p className="py-4">
          A money market platform that lets you monitor your lending and borrowing.
        </p>
        <div className="flex justify-between md:w-[75%] my-6 mt-6">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
          <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        
        <div>
          <h6 className="font-medium text-gray-400">SolsticeLend</h6>
          <ul>
            <li className="py-2 text-sm">
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
