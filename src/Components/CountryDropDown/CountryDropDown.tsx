import React, { useState } from 'react';
import { africanCountries } from '../../data/countries';

interface Country {
  name: string;
  flag: string;
}

const CountryDropDown: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedName = event.target.value;
    const country = africanCountries.find(c => c.name === selectedName);
    setSelectedCountry(country || null);
  };

  return (
    <div>
      <select title="country" onChange={handleSelect} defaultValue="">
        <option value="" disabled>Select a country</option>
        {africanCountries.map(country => (
          <option key={country.name} value={country.name}>
            {country.flag} {country.name}
          </option>
        ))}
      </select>
      
      {selectedCountry && (
        <div className='mt-8'>
          <h2>Selected Country: {selectedCountry.name}</h2>
          {/* Display emoji flag or image */}
          {selectedCountry.flag.startsWith('http') ? (
            <img src={selectedCountry.flag} alt={selectedCountry.name} className='w-14' />
          ) : (
            <span className='text-2xl'>{selectedCountry.flag}</span>
          )}
        </div>
      )}
    </div>
  );
};

export default CountryDropDown;
