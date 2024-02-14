import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { git, github, link } from '../assets';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';

const ProjectCard = ( { index, name, description, tags, image, source_code_link, website_link } ) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-primary p-5 rounded-2xl sm:w-[360px] w-full"
      >  
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt={name}
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover gap-1'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-9 h-9 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt="github"
                className='w-2/3 h-2/3 object-contain'
              />
            </div>
            <div
              onClick={() => window.open(website_link, "_blank")}
              className='bg-gradient-to-r from-slate-100 to-slate-900 w-9 h-9 rounded-full border-2 border-primary flex justify-center items-center cursor-pointer'
            >
              <img
                src={link}
                alt="github"
                className='w-2/3 h-2/3 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='text-secondary mt-2 text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Current Work</p>
        <h2 className={styles.sectionHeadText}>Current Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-[#50525b] text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects are project that I currently working on it.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard
            key={ `project-${index}` }
            index = {index}
            {...project}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works)