import React, { useState, useEffect } from 'react'
import './App.css';
import Foto from './assets/poto.png';
import IconSosmed from './components/icon';
import Navbar from './components/navbar';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  if (!isMobile){
    return(
      <>
      <Navbar />
        <section>
          <div className='flex h-screen'>
            <div className='w-[50%] flex items-center justify-center animate-split-in-left'>
              <div className='flex flex-col px-12 py-12'>
                <h1 className='font-bold text-4xl py-2'>Selamat Datang, Chat....</h1>
                <h2 className='font-bold text-2xl py-2'>Frontend Developer</h2>
                <p  className='font-medium text-base py-2'>Aku adalah pencipta dunia ini. Jika kalian ingin masuk ke dunia ku maka kalian harus mengikuti aturan dan perintah aku. Jadi kalian wajib patuh dan menaati aturan dan perintah ku. HAHAHAHAHAHA.</p>
                <div className='flex gap-4 py-2'>
                  <button className='bg-purple-500 hover:bg-purple-950 px-12 py-2 rounded-full transition duration-300 ease-in-out hover:scale-110'><h2 className='font-semibold text-sm'>Hellow</h2></button>
                </div>
                {/*Icon Sosial Media*/}
                <IconSosmed />
                
              </div>
            </div>
            <div className='w-[50%] flex items-center justify-center animate-split-in-right'>
              <div className='flex'>
                <img className='bg-purple-500 hover:bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]  rounded-bl-3xl rounded-tr-3xl transition duration-300 hover:scale-110' src={Foto} alt="Foto" />
              </div>
            </div>
          </div>
        </section>
      </>   
    )
  } else {
    return(
      <>
      <Navbar />
        <section>
          <div className='flex flex-col items-center h-screen'>
            <div className='flex items-center justify-center animate-split-in-left'>
              <div className='flex flex-col px-12 py-12'>
                <h1 className='font-bold text-4xl py-2'>Selamat Datang, Chat....</h1>
                <h2 className='font-bold text-2xl py-2'>Frontend Developer</h2>
                <p  className='font-medium text-base py-2'>Aku adalah pencipta dunia ini. Jika kalian ingin masuk ke dunia ku maka kalian harus mengikuti aturan dan perintah aku. Jadi kalian wajib patuh dan menaati aturan dan perintah ku. HAHAHAHAHAHA.</p>
                <div className='flex gap-4 py-2'>
                  <button className='bg-purple-500 hover:bg-purple-950 px-12 py-2 rounded-full transition duration-300 ease-in-out hover:scale-110'><h2 className='font-semibold text-sm'>Hellow</h2></button>
                </div>
                {/*Icon Sosial Media*/}
                <IconSosmed />
                
              </div>
            </div>
            <div className='w-[50%] flex items-center justify-center animate-split-in-left'>
              <div className='flex'>
                <img className='bg-purple-500 hover:bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]  rounded-bl-3xl rounded-tr-3xl transition duration-300 hover:scale-110' src={Foto} alt="Foto" />
              </div>
            </div>
          </div>
        </section>
      </>   
    )
  }
}

export default App
