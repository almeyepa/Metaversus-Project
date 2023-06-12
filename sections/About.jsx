'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        Welcome to the <span className="font-extrabold text-white">Metaverse</span>, a mesmerizing realm where 
        your imagination knows no bounds and possibilities are limited only by the scope of <span className="font-extrabold text-white">your dreams</span>. 
        Step into a world where reality and virtuality intertwine, where the lines between the physical and digital blur into an awe-inspiring tapestry of <span className="font-extrabold text-white">endless adventure!</span>
      </motion.p>

    </motion.div>
  </section>
);

export default About;