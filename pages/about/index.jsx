import React from "react";
import FounderAlex from "../../src/assets/founder_alex.png";
import LinkedinShort from "../../src/assets/linkedin_short.png";
import Image from "next/image";
const About = () => {
  return (
    <div className="container mx-auto p-4 text-white">
      {/* Project Summary Section */}
      <div className="project-summary">
        <h2 className="text-2xl mb-4 text-center">
          Empowering Finance with Weather Insights
        </h2>
        <p className="text-lg mb-4">
          In a world where the unexpected becomes the norm, our platform
          introduces a groundbreaking approach to decentralized finance. By
          utilizing real-time weather data through Chainlink oracles, we adapt
          loan interest rates to local weather conditions, crafting a lending
          environment that's both fair and responsive to the needs of borrowers
          and lenders.
        </p>
        <p className="text-lg mb-4">
          Our smart contract design emphasizes security and accuracy, ensuring
          that validated data feeds directly influence loan terms. We open new
          doors for those impacted by weather uncertainties, such as farmers and
          entrepreneurs. Our approach offers a buffer against environmental
          impacts, providing stability in an unpredictable world.
        </p>
      </div>

      {/* Founders Section */}
      <div className="founders mb-6 mt-12 ">
        <h2 className="text-2xl mb-4 text-center">Founders</h2>
        <div className="flex gap-6 justify-center">
          {/* Founder - Aleksander Wojcik */}
          <div className="founder flex flex-col items-center w-1/4">
            <div className="image-placeholder w-32 h-32 mb-4">
              <Image
                src={FounderAlex}
                alt="Aleksander Wojcik"
                className="rounded-full w-full h-full object-cover"
              />
            </div>
            <h3 className="mb-2">
              <a
                href="https://linkedin.com/in/aleksanderwojcik/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00df9a]"
              >
                Aleksander (Alex) Wojcik&nbsp;
                <Image
                  src={LinkedinShort}
                  alt="LinkedIn"
                  className="rounded inline-block"
                  style={{ width: "18px", height: "18px" }}
                />
              </a>
            </h3>
            <p className="text-sm mb-2 text-center">
              Full Stack Developer (~8+ y/o exp) skilled in a vast range of
              technologies, including web3.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
