import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";
import { SiUpwork } from "react-icons/si";

function Socialicon() {
  return (
    <>
      <div className="fixed top-80 md:top-56 lg:top-60 self-center  align-items-center  flex flex-col gap-4 right-3 z-10 ">
        <div className="bg-green-400 p-1 rounded  hover:animate-bounce">
          {" "}
          <a
            href="https://www.upwork.com/agencies/techcreator/"
            target="_blank"
          >
            <SiUpwork className="h-7 md:h-10 w-7 md:w-10 text-white   self-center " />
          </a>
        </div>
        <div className="bg-green-400 p-1 rounded  hover:animate-bounce">
          <a
            href="https://api.whatsapp.com/send?phone=923119265290&text=Hello%20TechCreator%20Team"
            target="_blank"
          >
            <ImWhatsapp className="text-white  w-7 md:w-10 h-7 md:h-10   " />
          </a>
        </div>
        <div className="bg-blue-700 p-1 rounded hover:animate-bounce">
          <a href="https://linkedin.com/company/techcreator" target="_blank">
            <FaLinkedinIn className=" text-white h-7  md:h-10 w-7 md:w-10 self-center   " />
          </a>
        </div>
      </div>
    </>
  );
}

export default Socialicon;
