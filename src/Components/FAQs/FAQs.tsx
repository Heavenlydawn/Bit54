import React, { useState } from "react";
import Link from "next/link";
import { faqData } from "../../data/faqData";

interface FAQItemProps {
  key: number;
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-300 py-4">
      {/* Question */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleOpen}
      >
        <span className="text-lg font-medium text-[#F7931A]">{question}</span>
        <button className="text-2xl font-bold">{isOpen ? "-" : "+"}</button>
      </div>

      {/* Answer */}
      <div
        className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
          isOpen ? "max-h-40" : "max-h-0"
        }`}
      >
        <p className="mt-2 text-[#B3B0B0] text-base">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <h2 className="text-4xl text-center font-bold border-b border-b-[#0000007b] pb-4">
        Frequently Asked Questions
      </h2>
      {faqData.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
      <p className="font-bold text-base my-8 text-center">
        Have More Questions?{" "}
        <span className="text-[#F7931A]">
          Send Us An <Link href="mailto:/"> <span className="underline">Email</span> </Link>{" "}
        </span>{" "}
      </p>
    </div>
  );
};

export default FAQ;
