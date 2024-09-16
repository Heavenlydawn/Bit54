import React, {useState} from 'react';
import SendNow from '../ButtonComp/SendNow';
import { countries } from '../../data/countries';

const SendMoney: React.FC = () => {
  const [fromCountry, setFromCountry] = useState('CA'); 
  const [toCountry, setToCountry] = useState('IN');

  const handleFromCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFromCountry(event.target.value);
  };

  const handleToCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setToCountry(event.target.value);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg w-[380px] h-[400px] mx-auto">
      <h2 className="text-center font-semibold text-lg mb-6">
        Send money to 58 African countries
      </h2>

      {/* From Dropdown */}
      <div className="mb-4">
        <label className="block mb-1 text-gray-600 font-medium">From</label>
        <div className="relative">
          <select title="FirstCountry"
            value={fromCountry}
            onChange={handleFromCountryChange}
            className="appearance-none w-full py-3 px-4 pr-8 rounded-md focus:outline-none focus:border-orange-500 bg-[#F4F4F4]"
          >
            {countries.map((country) => (
              <option key={country.code} value={country.code}>
                {country.flagUrl} {country.name}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-600 pointer-events-none">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      {/* To Dropdown */}
      <div className="mb-6">
        <label className="block mb-1 text-gray-600 font-medium">To</label>
        <div className="relative">
          <select title="SecondCountry"
            value={toCountry}
            onChange={handleToCountryChange}
            className="appearance-none w-full py-3 px-4 pr-8 rounded-md focus:outline-none focus:border-orange-500 bg-[#F4F4F4]"
          >
            {countries.map((country) => (
              <option key={country.code} value={country.code}>
                {country.flagUrl} {country.name}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-600 pointer-events-none">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      {/* Send Now Button */}
     <SendNow />
    </div>
  );
};
export default SendMoney;
