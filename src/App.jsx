import { IoMdPower } from "react-icons/io";
import Logo from './components/Logo';
import Header from './components/Header';
import SetLocation from "./components/SetLocation";

function App() {
  
  return (
    <div className='bg-gray-950 h-[400px] w-[640px] grid grid-rows-[1fr_0.5fr]  text-gray-200 font-raleway'>
      <Header/>
      <section className='bg-gray-900 contrast-[1.1] grid grid-cols-[1.35fr_1fr]'>
        <SetLocation/>
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
