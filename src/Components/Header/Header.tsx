import React from "react";
import Image from "next/image";
import Link from "next/link";
import Bit54Logo from "../../../public/Bit54Logo.png";
import Bit54Button from "../ButtonComp/Bit54Button";

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <Image src={Bit54Logo} alt="Logo" height={150} width={150} />
      </div>

      <div>
        <ul className=" flex items-center gap-8 font-medium">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/">
            <li>FAQs</li>
          </Link>
          <Link href="/">
            <li>Contact Us</li>
          </Link>
        </ul>
      </div>
      <Bit54Button />
    </div>
  );
};

export default Header;
