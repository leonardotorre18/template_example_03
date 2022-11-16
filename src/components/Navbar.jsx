import React, { useState } from 'react';
import { BsInstagram, BsFacebook, BsTwitter } from 'react-icons/bs';
import { RiMenu3Fill } from 'react-icons/ri';

export default function Navbar() {
  const [show, setShow] = useState(false);
  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <header className="h-24">
      <nav className="px-6 py-3 h-full flex items-center justify-between max-w-7xl mx-auto">
        <span className="h-full flex items-center font-extrabold text-xl md:hidden z-10">LeonardoTorre</span>
        <div
          className={`flex flex-col md:flex-row justify-center items-center gap-10 h-full w-full fixed md:static transition-all duration-700 bg-slate-600 md:bg-transparent left-0 ${show ? 'top-0' : 'top-1/4'} ${show ? 'opacity-100' : 'opacity-0 invisible'} md:visible md:opacity-100`}
        >
          <ul className="flex gap-3 flex-col md:flex-row text-lg md:h-full items-center md:w-full justify-start">
            <li>Trabajo</li>
            <li>Tienda</li>
            <li>Blog</li>
            <li>Contacto</li>
          </ul>
          <span className="h-full hidden items-center font-extrabold text-xl md:flex">LeonardoTorre</span>
          <ul className="flex gap-3 text-2xl md:h-full items-center md:w-full md:justify-end">
            <BsInstagram className="cursor-pointer" />
            <BsFacebook className="cursor-pointer" />
            <BsTwitter className="cursor-pointer" />
          </ul>
        </div>
        <RiMenu3Fill
          onClick={toggleShow}
          className="text-3xl md:hidden z-10"
        />
      </nav>
    </header>
  )
}
