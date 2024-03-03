import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full red-black-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-zinc-300 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-black text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>About me</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div
        // variants={fadeIn("right", "spring", 0.1, 1)}
        className='mt-4 text-[#50525b] text-[17px] max-w-3xl leading-[30px]'
      >
        I am a 18 years old student at KMUTT university.
      </div>

      <div
        // variants={fadeIn("left", "", 0.1, 1)}
        className='mt-4 text-[#50525b] text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a beginner software developer with some of experience in Python, C/C++, C#, HTML, Css, TypeScript, JavaScript, Java, and be able to use some frameworks like React, Nextjs.
      </div>

      <div
        // variants={fadeIn("right", "", 0.1, 1)}
        className='mt-4 text-[#50525b] text-[17px] max-w-3xl leading-[30px]'
      >
        I have some experiences in various field of work such as IOT, Game, Web and also Data Science.
      </div>
      <div className='mt-20 flex flex-wrap gap-10 mb-64'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      <h2 className={styles.sectionHeadText}>Soft Skills.</h2>
      <div className='mt-4 text-[#50525b] text-[20px] max-w-3xl leading-[30px]'>
        Soft skills that I have are
      </div>
      <h3 className={styles.subsectionHeadText}>Leadership and Communication.</h3>
      <div className='mt-4 text-[#50525b] text-[20px] max-w-3xl leading-[30px]'>
      I have ever been a<br />-Team Leader on a small project team<br /> Vice-Chairman of Computer Engineer Major Project<br /><br />And I currently be a Project Manager at KMUTT Esport Club<br /><br />
      I am also a person who listens to other people's opinions and is ready to develop myself.
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")