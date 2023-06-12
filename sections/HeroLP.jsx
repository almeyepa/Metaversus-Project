'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { slideIn, staggerContainer, textVariant, fadeIn } from '../utils/motion';

const HeroLP = () => (
  <section className={`${styles.yPaddings} hero overflow-hidden h-[60vh] relative flex`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} pt-[6rem] pb-[0] mx-auto flex flex-col justify-center`}
    >
      <div className="z-30 flex justify-center items-center flex-col relative z-10">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          Endless
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          <h1 className={styles.heroHeading}>Possibilities</h1>
        </motion.div>
      </div>
      <motion.div
        variants={slideIn('right', 'tween', 0.3, 2)}
        className="z-20 absolute top-0 w-full h-full"
      >
        <img
          src="/planet.png"
          alt="planet_hero"
          className='absolute top-0 right-0 h-full'
        />
      </motion.div>
      <motion.div
        variants={slideIn('up', 'tween', 0.3, 2)}
        className="z-10 absolute w-full h-[60vh] top-0 right-0"
      >
        <img
          src="/planets.png"
          alt="planets"
          className="w-full h-full object-cover"
        />
      </motion.div>
      <motion.div
        variants={fadeIn('center', 'tween', 0.1, 1)}
        className="z-0 absolute w-full h-[60vh] top-0 right-0"
      >
        <img
          src="/stars.png"
          alt="stars"
          className="animate-pulse w-full h-[60vh] object-cover"
        />
      </motion.div>
      <motion.div
        variants={fadeIn('center', 'tween', 0.1, 1)}
        className="z-0 absolute w-full h-[60vh] top-0 right-0"
      >
        <img
          src="/shooting_stars.png"
          alt="shooting_stars"
          className="animate-pulse w-full h-[60vh] object-cover"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default HeroLP;