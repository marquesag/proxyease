import React, { useState, useEffect } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { GiCloudDownload } from 'react-icons/gi';
import { IoCloudUploadOutline } from 'react-icons/io5';

const countries = [
  { name: 'United States', code: 'us' },
  { name: 'Canada', code: 'ca' },
  { name: 'Brazil', code: 'br' },
  { name: 'India', code: 'in' },
  // Add more countries as needed
];

const SetLocation = () => {
  const defaultCountry = countries[0]; 
  const [selectedCountry, setSelectedCountry] = useState(defaultCountry);
  const [downloadSpeed, setDownloadSpeed] = useState(15); 
  const [uploadSpeed, setUploadSpeed] = useState(23); 

  useEffect(() => {
    const interval = setInterval(() => {
      // Generate random speeds for download and upload
      const newDownloadSpeed = Math.floor(Math.random() * 1000) + 10;
      const newUploadSpeed = Math.floor(Math.random() * 1000) + 10; 
      setDownloadSpeed(newDownloadSpeed);
      setUploadSpeed(newUploadSpeed);
    }, 1000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures effect runs only once on mount

  const handleCountryChange = (e) => {
    const selected = countries.find(country => country.code === e.target.value);
    setSelectedCountry(selected);
  };

  return (
    <nav className='flex flex-col justify-center items-center text-xl'>
      <section className='w-full px-12 p-2'>
        <div><span className='font-medium'>Location</span></div>
        <div className='flex pt-[1.5rem] pb-[2rem] relative items-center text-center overflow-hidden'>
          <img 
            className='absolute w-[2rem] border-opacity-15 shadow-lg shadow-gray-950/30 border border-zinc-600 rounded-full left-3'
            src={`https://GlobalArtInc.github.io/round-flags/flags/${selectedCountry.code}.svg`} 
            alt={`${selectedCountry.name} flag`} 
          />
          <select
            className='bg-gray-50 rounded-xl shadow-sm shadow-gray-700 py-[0.8rem] pl-[3.5rem] pr-[2.5rem] flex-1 text-gray-950 font-semibold appearance-none'
            value={selectedCountry.code}
            onChange={handleCountryChange}
          >
            {countries.map((country) => (
              <option key={country.code} className='text-black' value={country.code}>
                {country.name}
              </option>
            ))}
          </select>
          <IoIosArrowDown size={'1.3rem'} className='absolute right-3 text-gray-950 pointer-events-none' />
        </div>
        <div className='flex justify-around text-lg'>
          <div className='flex items-center gap-3'><GiCloudDownload />{downloadSpeed}kbps</div>
          <div className='flex items-center gap-3'><IoCloudUploadOutline />{uploadSpeed}kbps</div>
        </div>
      </section>
    </nav>
  );
};

export default SetLocation;
