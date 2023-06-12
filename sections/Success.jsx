'use client';

import styles from '../styles';

function Success() {
    return (
        <section className={`${styles.paddings} relative z-10 h-screen w-screen flex flex-col items-center justify-center`}>
            <div className="gradient-02 z-0" />
            <a href="/" className='text-white absolute top-5 left-5'>
                <button
                    className="w-[24px] h-[24px] object-contain outline-none"
                >
                    <img alt="home" className="w-[24px] h-[24px] object-contain" src="/left-arrow.png" />
                </button>
            </a>
            <div
            className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col text-white text-center`}
            >
                <h2 className='mt-[8px] font-bold md:text-[64px] text-[40px]'>Thanks for filling the form {}!</h2>
                <p className='flex-1 mt-4 font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]'>An email has been sent to {}. We will revert back to you as soon as possible.</p>
            </div>
        </section>
    )  
};

export default Success;