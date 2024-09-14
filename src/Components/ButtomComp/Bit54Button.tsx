import React from "react";
import Image from "next/image";
import DollarIcon from "../../../public/DollorIcon.png";
const Bit54Button = () => {
  return (
    <div>
      <button className="bg-[#F7931A] py-3 px-6">
        <p className="text-2xl font-bold">Send Now</p>
        <Image src={DollarIcon} width={20} height={20} alt="dollar sign" />
      </button>
    </div>
  );
};

export default Bit54Button;
