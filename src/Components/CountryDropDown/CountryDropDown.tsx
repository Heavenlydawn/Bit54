import React, { useState } from 'react';
import { countries as africanCountries } from '../../data/countries';

interface Country {
  name: string;
  flagUrl: string;
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
            {country.flagUrl} {country.name}
          </option>
        ))}
      </select>
      
      {selectedCountry && (
        <div className='mt-8'>
          <h2>Selected Country: {selectedCountry.name}</h2>
          {/* Display emoji flag or image */}
          {selectedCountry.flagUrl.startsWith('http') ? (
            <img src={selectedCountry.flagUrl} alt={selectedCountry.name} className='w-14' />
          ) : (
            <span className='text-2xl'>{selectedCountry.flagUrl}</span>
          )}
        </div>
      )}
    </div>
  );
};

export default CountryDropDown;
