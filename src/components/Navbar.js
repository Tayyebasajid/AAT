"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Facebook } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Youtube } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { useEffect } from 'react';

export default function Navbar() {
  useEffect(() => {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.querySelector('#menu-toggle i');
    const menuLinks = document.querySelectorAll('.mobile-menu-link');

    const toggleMenu = () => {
      mobileMenu.classList.toggle('hidden');
      if (menuIcon.classList.contains('fa-bars')) {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-xmark');
      } else {
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
      }
    };

    
    menuToggle.addEventListener('click', toggleMenu);

    
    menuLinks.forEach((link) => {
      link.addEventListener('click', toggleMenu);
    });

    return () => {
      menuToggle.removeEventListener('click', toggleMenu);
      menuLinks.forEach((link) => {
        link.removeEventListener('click', toggleMenu);
      });
    };
  }, []);

  return (
    <>
      <nav id="navbar" className="bg-white p-4 w-full fixed z-50 shadow-lg shadow-pink-100">
        <div className="container flex items-center mx-auto justify-between">
          <div className="flex items-center mx-10">
            <Link href="/">
              <Image src="/logo.svg" alt="MyApp Logo" width={50} height={50} />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="space-x-8 md:flex sm:flex mx-auto items-center font-bold hidden ">
            <Link href="#" className="text-black hover:text-blue-800 relative inline-block text-sm  after:absolute after:w-full after:scale-x-0 hover:after:scale-x-100 after:h-0.5 after:left-0 after:bottom-0 after:bg-gradient-to-r after:from-Blue after:via-Purple after:to-Pink after:transition-transform after:duration-500">
              Program Curriculum
            </Link>
            <Link href="#" className="text-black hover:text-blue-800 relative inline-block text-sm  after:absolute after:w-full after:scale-x-0 hover:after:scale-x-100 after:h-0.5 after:left-0 after:bottom-0 after:bg-gradient-to-r after:from-Blue after:via-Purple after:to-Pink after:transition-transform after:duration-500 ">
              Community
            </Link>
            <Link href="#" className="text-black hover:text-blue-800 relative inline-block text-sm  after:absolute after:w-full after:scale-x-0 hover:after:scale-x-100 after:h-0.5 after:left-0 after:bottom-0 after:bg-gradient-to-r after:from-Blue after:via-Purple after:to-Pink after:transition-transform after:duration-500">
              e_Courses
            </Link>
            <Link href="#" className="text-black hover:text-blue-800 relative inline-block text-sm  after:absolute after:w-full after:scale-x-0 hover:after:scale-x-100 after:h-0.5 after:left-0 after:bottom-0 after:bg-gradient-to-r after:from-Blue after:via-Purple after:to-Pink after:transition-transform after:duration-500">
              ASK ALEX
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden sm:hidden block">
            <button
              className="text-3xl font-bold px-5 text-Pink focus:outline-none "
              id="menu-toggle"
            >
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>
      </nav>
      <div
        id="mobile-menu"
        className="lg:hidden fixed top-0 pt-10 left-0 w-full h-full bg-white z-40  flex-col  justify-center hidden"
      >
        <div className="space-y-6 px-6 font-bold flex flex-col mt-20">
          <Link href="#" className="text-black hover:text-blue-800 text-[18px] mobile-menu-link">
            Program Curriculum
          </Link>
          <Link href="#" className="text-black hover:text-blue-800 text-[18px] mobile-menu-link">
            Community
          </Link>
          <Link href="#" className="text-black hover:text-blue-800 text-[18px] mobile-menu-link">
            e_Courses
          </Link>
          <Link href="#" className="text-black hover:text-blue-800 text-[18px] mobile-menu-link">
            ASK ALEX
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center mx-auto mt-16">
          <Image
            src="/logo.svg"
            alt="logo"
            width={80}
            height={80}
          />
          <h2 className="text-[32px] font-bold font-playfair uppercase">american</h2>
          <h2 className="text-[25px] font-playfair uppercase lg:-mt-2">accent program</h2>
          <div className="flex flex-row space-x-4">
            <div className="bg-Pink rounded-full p-2 text-white hover:bg-lblue duration-500">
              <Facebook size={25} />
            </div>
            <div className="bg-Pink rounded-full p-2 text-white hover:bg-lblue duration-500">
              <Instagram size={25} />
            </div>
            <div className="bg-Pink rounded-full p-2 text-white hover:bg-lblue duration-500">
              <Twitter size={25} />
            </div>
            <div className="bg-Pink rounded-full p-2 text-white hover:bg-lblue duration-500">
              <Linkedin size={25} />
            </div>
            <div className="bg-Pink rounded-full p-2 text-white hover:bg-lblue duration-500">
              <Youtube size={25} />
            </div>
          </div>
          <button className="bg-gradient-to-r from-Pink via-Blue to-Purple text-white uppercase text-[20px] py-4 px-16 mt-10 rounded-tr-xl rounded-bl-xl">
            enroll today
          </button>
        </div>
        <div className="flex flex-col lg:p-10 mt-6 lg:mt-0 items-center justify-center mx-auto">
        </div>
      </div>
    </>
  );
}
