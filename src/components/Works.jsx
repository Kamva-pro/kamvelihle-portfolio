import React from 'react'
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { useNavigate } from 'react-router-dom';

const CATEGORY_COLOR = {
  "Full-Stack": "#915eff",
  "Web": "#3b82f6",
  "Mobile": "#10b981",
};

const ProjectCard = ({ index, id, name, description, tags, image, link, category, year }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
      onClick={() => navigate(`/project/${id}`)}
      className="cursor-pointer group"
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
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Category badge */}
          {category && (
            <span
              className="absolute top-3 left-3 px-2 py-1 rounded-lg text-xs font-bold"
              style={{
                background: `${CATEGORY_COLOR[category]}25`,
                border: `1px solid ${CATEGORY_COLOR[category]}55`,
                color: CATEGORY_COLOR[category]
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

          {/* "View Details" label that appears on hover */}
          <div className="absolute bottom-3 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="px-4 py-1.5 rounded-full text-xs font-bold text-white backdrop-blur-sm" style={{ background: 'rgba(145,94,255,0.7)' }}>
              View Details →
            </span>
          </div>

          {/* Github icon — stopPropagation so it doesn't navigate */}
          <div className="absolute inset-0 flex justify-end items-start m-3 card-img_hover">
            <div
              onClick={e => { e.stopPropagation(); window.open(link, '_blank'); }}
              className="black-gradient w-9 h-9 rounded-full flex justify-center items-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              title="Open GitHub / Live link"
            >
              <img src={github} alt="github" className="w-1/2 h-1/2 object-contain" />
            </div>
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
        <p className={styles.sectionSubText}>Work I'm proud of.</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          These projects show how I think and what I build. Each one started as a problem — I turned it into something that works. Click any card to see the full story.
        </motion.p>
      </div>

      {/* Trust indicators */}
      <motion.div
        variants={fadeIn('', '', 0.2, 1)}
        className="mt-6 flex flex-wrap gap-4"
      >
        {[
          { icon: '📱', text: 'Web & Mobile' },
          { icon: '🇿🇦', text: 'Based in JHB' },
          { icon: '💼', text: 'Available to Collaborate' },
        ].map(t => (
          <span key={t.text} className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#94a3b8' }}>
            {t.icon} {t.text}
          </span>
        ))}
      </motion.div>

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
