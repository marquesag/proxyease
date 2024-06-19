import { useState } from 'react'
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import { GiCloudDownload } from "react-icons/gi";
import { IoCloudUploadOutline } from "react-icons/io5";
import { IoMdPower } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import Logo from './components/Logo';

function App() {
  
  return (
    <div className='bg-gray-950 h-[400px] w-[640px] grid grid-rows-[1fr_0.5fr]  text-gray-200 font-raleway'>
      <header className='flex justify-around items-center text-base py-6'>
        <div className='space-y-4'>
          <div className='flex space-x-16 items-center'><strong className='text-gray-400 font-semibold'>IP</strong><span>77.13.233.242</span></div>
          <div className='flex space-x-14'><strong className='text-gray-400 font-semibold'>ISP</strong><span>O2 Deutschland</span></div>
          <div className='flex text-green-400 items-center space-x-4'><span>Check my IP</span> <LiaExternalLinkAltSolid size={"1.2rem"}/></div>
        </div>
        <div class="h-[5.5rem] text-center w-[1.2px] bg-gray-400/30"></div>
        <div className='space-y-4'>
          <div className='flex gap-12 justify-between'><strong className='text-gray-400 font-semibold'>Country</strong><span>Germany</span></div>
          <div className='flex gap-12 justify-between'><strong className='text-gray-400 font-semibold'>Region</strong><span>Saxony-adb</span></div>
          <div className='flex gap-12 justify-between'><strong className='text-gray-400 font-semibold'>City</strong><span>Stockholm 23</span></div>
        </div>
      </header>
      <section className='bg-gray-900 contrast-[1.1] grid grid-cols-[1.35fr_1fr]'>
        <nav className='flex flex-col justify-center items-center text-xl'>
          <section className='w-full px-12 p-2'>
            <div><span className='font-medium'>Location</span></div>
            <div className='flex pt-[1.5rem] pb-[2rem] relative items-center justify-between text-center overflow-hidden'>                  
                <img className='absolute w-[2rem] border-opacity-15 shadow-lg shadow-gray-950/30 border border-zinc-600 rounded-full ml-6' src='https://GlobalArtInc.github.io/round-flags/flags/us.svg'></img>
                <button type="submit" className='bg-gray-50 rounded-xl shadow-sm shadow-gray-700 py-[1.6rem] flex flex-1'/>
                <strong className='absolute ml-[4.5rem] font-bold text-lg text-gray-950'>United States</strong>
                <IoIosArrowDown size={'1.3rem'} className='absolute ml-[14rem] text-gray-950'/>
            </div>
            <div className='flex justify-around text-lg'>
              <div className='flex items-center gap-3'> <GiCloudDownload/>15kbps</div>
              <div className='flex items-center gap-3'> <IoCloudUploadOutline/>23kbps</div>
            </div>
          </section>
        </nav>
        <div className='grid grid-rows-[3fr_0.8fr] justify-center items-center '>
          <div className="power relative w-32 h-32 rounded-full border-[6px] drop-shadow-2xl shadow-2xl shadow-green-400/70 border-green-400 before:content-[''] before:absolute before:w-5/6 before:h-5/6 before:rounded-full before:border-2 before:bg-white flex justify-center items-center hover:scale-110">
            <div className="relative">
              <IoMdPower style={
                {
                  margin: "0 auto"
                }
              } color='#111827' size={'4rem'}/>
            </div>
          </div>
          <div className="logo flex justify-center pb-6">
            <Logo size={'10rem'}/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
