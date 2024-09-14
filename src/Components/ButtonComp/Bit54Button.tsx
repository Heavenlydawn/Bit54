import React from "react";
import Image from "next/image";
import DollarIcon from "../../../public/DollorIcon.png";
const Bit54Button = () => {
  return (
    <div>
      <button className="flex items-center gap-2 bg-[#F7931A] py-4 px-6 rounded-lg">
        <p className="text-2xl font-bold text-white">Send Now</p>
        <Image src={DollarIcon} width={20} height={20} alt="dollar sign" />
      </button>
    </div>
  );
};

export default Bit54Button;
