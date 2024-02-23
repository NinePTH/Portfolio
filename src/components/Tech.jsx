import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import { fadeIn, textVariant } from '../utils/motion';
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion';
import { styles } from '../styles';

const techcard = {
	reverse:        false,  // reverse the tilt direction
	max:            15,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Almost of </p>
          <h2 className={styles.sectionHeadText}>TECH & FRAMEWORK.</h2>
      </motion.div>

      <div
      // variants={fadeIn("", "", 0.1, 1)}
      className='mt-4 text-[#50525b] text-[17px] max-w-3xl leading-[30px]'
      >
        that I have touched, experienced on it.<br className='sm:block hidden' />Just some experience I'm still continuing learning to be more proficient at it.
      </div>

      <div
      // variants={fadeIn("", "", 0.1, 1)}
      className='mt-4 mb-10 text-[#50525b] text-[17px] max-w-3xl leading-[30px]'
      >
        You can find more of tech that I have ever use on my Github repository.
      </div>
    <Tilt
    options={techcard}
    className="flex flex-row flex-wrap justify-center gap-10 py-14 my-20 bg-neutral-200 rounded-[20px] border-solid border-2 border-neutral-500 shadow-card"
    >
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <img src={technology.icon} alt="tech" />
          {/* <BallCanvas icon={technology.icon} /> */}
        </div>
      ))}
    </Tilt>
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