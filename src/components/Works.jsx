import React from 'react'
import Tilt from 'react-tilt';
import {motion} from 'framer-motion';
import {styles} from '../styles';
import {SectionWrapper} from '../hoc';
import {projects} from '../constants';
import {fadeIn, textVariant} from '../utils/motion';

const CATEGORY_COLOR = {
  "Full-Stack": "#915eff",
  "Web":        "#3b82f6",
  "Mobile":     "#10b981",
  "TypeScript": "#38bdf8",
};

const ProjectCard = ({index, name, description, tags, image, link, category, year}) => {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
      className="cursor-pointer group"
      onClick={() => window.open(link, '_blank')}
    >
      <Tilt
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full transition-shadow duration-300 hover:shadow-2xl"
        style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.3)' }}
        options={{ max: 20, scale: 1.02, speed: 450 }}
      >
        {/* Image */}
        <div className="relative w-full h-[230px] overflow-hidden rounded-2xl">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Category badge */}
          {category && (
            <span
              className="absolute top-3 left-3 px-2 py-1 rounded-lg text-xs font-bold"
              style={{
                background: `${CATEGORY_COLOR[category] || '#915eff'}25`,
                border: `1px solid ${CATEGORY_COLOR[category] || '#915eff'}55`,
                color: CATEGORY_COLOR[category] || '#915eff'
              }}
            >
              {category}
            </span>
          )}

          {/* Year badge */}
          {year && (
            <span className="absolute top-3 right-3 px-2 py-1 rounded-lg text-xs font-bold" style={{ background: 'rgba(0,0,0,0.5)', color: '#94a3b8' }}>
              {year}
            </span>
          )}

          {/* "Open Project" label on hover */}
          <div className="absolute bottom-3 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="px-4 py-1.5 rounded-full text-xs font-bold text-white backdrop-blur-sm" style={{ background: 'rgba(145,94,255,0.75)' }}>
              Open Project ↗
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="mt-4">
          <h3 className="text-white font-bold text-[22px] group-hover:text-[#c4b5fd] transition-colors duration-200">{name}</h3>
          <p className="mt-2 text-secondary text-[14px] leading-relaxed">{description}</p>
        </div>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map(tag => (
            <p key={tag.name} className={`text-[13px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I've built.</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          A mix of things I've built — for clients, for fun, and to solve real problems. Each one is live. Click to explore.
        </motion.p>

      {/* Cards */}
      <div className="mt-16 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  );
}

export default SectionWrapper(Works, 'projects')
