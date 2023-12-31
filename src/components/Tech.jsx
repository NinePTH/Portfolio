import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import { fadeIn, textVariant } from '../utils/motion';
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion';
import { styles } from '../styles';


const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Almost of </p>
          <h2 className={styles.sectionHeadText}>TECH & FRAMEWORK.</h2>
      </motion.div>

      <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className='mt-4 text-[#50525b] text-[17px] max-w-3xl leading-[30px]'
      >
        that I have touch, experience on it.<br className='sm:block hidden' />Just some experience I'm still continue learning to be more good at it.
      </motion.p>

      <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className='mt-4 mb-10 text-[#50525b] text-[17px] max-w-3xl leading-[30px]'
      >
        You can Find some more of tech that I have ever use on my Github repository.
      </motion.p>
    <div className=" flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
    </>


  //   <>
  //   <motion.div variants={textVariant()}>
  //     <p className={styles.sectionSubText}>Introduction</p>
  //     <h2 className={styles.sectionHeadText}>Overview.</h2>
  //   </motion.div>

  //   <motion.p
  //     variants={fadeIn("", "", 0.1, 1)}
  //     className='mt-4 text-black text-[17px] max-w-3xl leading-[30px]'
  //   >
  //     18 years old student at KMUTT university. I'm a junior software developer with experience in Python, C/C++, C#, HTML, Css, TypeScript, JavaScript, Java, and be able to use some frameworks like React, Nextjs.
  //   </motion.p>
  // </>
  )
}

export default SectionWrapper(Tech,"")