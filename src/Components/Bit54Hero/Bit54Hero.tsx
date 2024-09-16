import React from "react";
import SendMoney from "./SendMoney";
import Bit54Button from "../ButtonComp/Bit54Button";
const Bit54Hero = () => {
  return (
    <main className="my-24 flex items-center justify-between">
      <div>
        <h1 className="text-6xl font-bold">
          Send Money
          <br /> Across Africa
        </h1>
        <p className="text-xl py-8">
          Send your money without permission, safely <br /> and easily to
          anyone, anywhere in Africa
        </p>

        <Bit54Button />
      </div>

      <div>
        <SendMoney />
      </div>
    </main>
  );
};

export default Bit54Hero;
