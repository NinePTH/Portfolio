import { motion } from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas, OldcompCanvas,C_W_MCanvas } from './canvas';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const Hero = () => {
  return (
    <section className=' relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#ff0000]' />
          <div className='w-1 sm:h-80 h-40 red-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-black-100`}>Hi, I'm <span className='text-[#ff0000]'>Patihan</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-[#50525b]`}>I am freshman CPE student in KMUTT University.<br className='sm:block hidden' />This Portfolio website is for assignment submission in CPE 101 subject.<br className='sm:block hidden' />Slide down the page to get to know me more.</p>
          <p className={`${styles.heroSubText} mt-14 text-[#50525b]`}>Thank you for your attention.</p>
        </div>
      </div>

        {/* <ComputersCanvas /> */}
        {/* <OldcompCanvas /> */}

        {/* <C_W_MCanvas /> */}

        {/* <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
          <a href='#about'>
            <div className='w-[35px] h-[64px] rounded-3xl border-4 border-black flex justify-center items-start p-2'>
              <motion.div
                animate={{
                  y:[0, 24, 0]
                }}
                transition={{
                  duration:1.5,
                  repeat: Infinity,
                  repeatType: 'loop'
                }}
                className='w-3 h-3 rounded-full bg-black mb-1'
              />
            </div>
          </a>
        </div> */}
    </section>
  )
}

export default Hero