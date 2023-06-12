'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import styles from '../styles';
import { navVariants } from '../utils/motion';
import Link from 'next/link';

function Navbar() {
  const [navbarClass, setNavbarClass] = useState('top');
  const [showMenu, setShowMenu] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (currentScrollPos === 0) {
        setNavbarClass('show');
      } else if (currentScrollPos > prevScrollPos) {
        setNavbarClass('hidden');
      } else {
        setNavbarClass('menu-gradient');
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
    document.body.classList.toggle('no-scroll');
  };

  return (
    <motion.div
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} fixed py-8 z-50 w-full ${navbarClass} ${showMenu ? 'transparent' : ''}`}
    >
      <div className={`${showMenu ? 'absolute top-0 left-0 w-full h-screen menu-gradient lg:hidden' : 'lg:hidden'}`}></div>
      <nav className="z-10 relative flex items-center justify-between">
        <div>
          <Link href="/">
            <img alt="Metaverse Logo" className="duration-200 ease-in-out hover:scale-90 w-auto h-[24px] object-contain" src="/logo.svg" />
          </Link>
        </div>
        <div className="w-[24px] h-[24px] object-contain lg:hidden">
          <button
            className="w-[24px] h-[24px] object-contain outline-none"
            onClick={handleMenuClick}
          >
            {showMenu ? (
              <img alt="close" className="w-[24px] h-[24px] object-contain" src="/close.svg" />
            ) : (
              <img alt="menu" className="w-[24px] h-[24px] object-contain" src="/menu.svg" />
            )}
          </button>
        </div>
        <div className={`${showMenu ? 'absolute w-full right-0 p-8 top-[4rem] lg:block lg:w-auto' : 'hidden lg:block'}`}>
          <ul className="flex lg:text-[16px] text-[60px] flex-col lg:flex-row lg:gap-8 items-center text-white">
            <li className="pb-4 lg:pb-0">
              <Link href="/about">About</Link>
            </li>
            <li className="pb-4 lg:pb-0">
              <Link href="/explore">Explore</Link>
            </li>
            <li className="pb-4 lg:pb-0">
              <Link href="/insight">Insights</Link>
            </li>
            <li className="pb-4 lg:pb-0">
              <Link href="/contact">Contact</Link>
            </li>
            <li className="text-base text-white text-center mt-8 lg:mt-0">
              <a href="/waiting">
                <button
                  type="button"
                  className="duration-200 ease-in-out mx-auto flex items-center h-fit py-4 px-6 bg-sky-700 hover:bg-sky-900 rounded-[32px] gap-[12px]"
                >
                  <img
                    src="/headset.svg"
                    alt="headset"
                    className="w-[24px] h-[24px] object-contain"
                  />
                  <span className="font-normal text-[16px] text-white">Enter Metaverse</span>
                </button>
              </a>
            </li>
          </ul>
        </div>
      </nav>      
    </motion.div>
  );
}

export default Navbar;
