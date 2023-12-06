import React from 'react';
import FounderAlex from "../assets/founder_alex.png";
import LinkedinShort from "../assets/linkedin_short.png";

const About = () => {
  return (
      <div className="container mx-auto p-4 text-white">
        <h1 className="text-2xl font-bold mb-4 text-center">About Us</h1>
        <div className="founders mb-6">
          <h2 className="text-2xl mb-4 text-center">Founders</h2>
          <div className="flex gap-6 justify-center">
            {/* Founder - Aleksander Wojcik */}
            <div className="founder flex flex-col items-center w-1/4">
              <div className="image-placeholder w-32 h-32 mb-4">
                <img
                    src={FounderAlex}
                    alt="Aleksander Wojcik"
                    className="rounded-full w-full h-full object-cover"
                />
              </div>
              <h3 className="mb-2">
                <a href="https://linkedin.com/in/aleksanderwojcik/" target="_blank" rel="noopener noreferrer" className="text-[#00df9a]">
                  Aleksander (Alex) Wojcik&nbsp;
                  <img
                      src={LinkedinShort}
                      alt="LinkedIn"
                      className="rounded inline-block"
                      style={{ width: '18px', height: '18px' }}
                  />
                </a>
              </h3>
              <p className="text-sm mb-2 text-center">Full Stack Developer (~8+ y/o exp) skilled in a vast range of technologies, including web3.</p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default About;
