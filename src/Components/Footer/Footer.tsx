import React from "react";
import Image from "next/image";
import Bit54Logo from "../../../public/Bit54Logo.png";
const Footer = () => {
  return (
    <footer className="flex items-center justify-between">
      <div>
        <Image src={Bit54Logo} alt="Bit54" width={150} height={150} />
        <p className="text-[#797979] text-lg mt-4">Enjoy quick and cheaper transfers <br />to any country in Africa</p>
      </div>
      <div>
        <p className="text-[#797979] text-lg">hello@bit54.com</p>
      </div>
    </footer>
  );
};

export default Footer;
