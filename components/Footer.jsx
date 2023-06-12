'use client';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { socials } from '../constants';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} relative mx-auto flex flex-col gap-8 z-10`}>
      <div className="flex items-center justify-center lg:justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white text-center xl:text-left">
          Venture into the Metaverse
        </h4>
        <a href="/contact">
          <button type="button" 
            className="duration-200 ease-in-out mx-auto xl:mr-0 flex items-center h-fit py-4 px-6 bg-sky-700 hover:bg-sky-900 rounded-[32px] gap-[12px]"
          >
            <img
              src="/headset.svg"
              alt="headset"
              className="w-[24px] h-[24px] object-contain"
            />
            <span className="font-normal text-[16px] text-white">
              Enter Metaverse
            </span>
          </button>
        </a>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[1px] bg-[#6A6A6A]" />

        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between flex-wrap gap-4">
          <Link href="/">
            <img alt="Metaverse Logo" className="duration-200 ease-in-out hover:scale-90 w-auto h-[24px] object-contain" src="/logo.svg" />
          </Link>
          <p className="font-normal text-xs text-secondary-white">
            Copyright © 2023 Metaversus. All rights reserved. <a target="_blank" href="/terms_conditions" className='terms'>Terms & Conditions</a>
          </p>

          <div className="flex gap-4">
            {socials.map((social) => (
              <img
                key={social.name}
                src={social.url}
                alt={social.name}
                className="duration-200 ease-in-out hover:translate-y-[-0.5rem] w-[24px] h-[24px] object-contain cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;