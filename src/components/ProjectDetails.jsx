import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../constants';

const CATEGORY_COLORS = {
  "Full-Stack": { bg: "rgba(145,94,255,0.15)", text: "#c4b5fd", border: "rgba(145,94,255,0.4)" },
  "Web":        { bg: "rgba(59,130,246,0.15)",  text: "#93c5fd", border: "rgba(59,130,246,0.4)" },
  "Mobile":     { bg: "rgba(16,185,129,0.15)",  text: "#6ee7b7", border: "rgba(16,185,129,0.4)" },
};

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white" style={{ background: '#050816' }}>
        <h2 className="text-3xl font-bold mb-4">Project not found</h2>
        <button onClick={() => navigate('/')} className="px-6 py-3 rounded-xl text-white font-semibold" style={{ background: 'linear-gradient(135deg, #915eff, #4a9eff)' }}>
          ← Back to Portfolio
        </button>
      </div>
    );
  }

  const catColor = CATEGORY_COLORS[project.category] || CATEGORY_COLORS["Web"];

  return (
    <div className="min-h-screen text-white" style={{ background: 'linear-gradient(135deg, #050816 0%, #0d0d1a 100%)' }}>
      {/* Hero image banner */}
      <div className="relative w-full h-[50vh] overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.45)' }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(5,8,22,0.2), rgba(5,8,22,1))' }} />

        {/* Back button */}
        <button
          onClick={() => navigate('/')}
          className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-sm backdrop-blur-md transition-all hover:scale-105"
          style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff' }}
        >
          ← Back
        </button>

        {/* Category + Year pill */}
        <div className="absolute top-6 right-6 flex gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ background: catColor.bg, color: catColor.text, border: `1px solid ${catColor.border}` }}>
            {project.category}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ background: 'rgba(255,255,255,0.08)', color: '#94a3b8', border: '1px solid rgba(255,255,255,0.15)' }}>
            {project.year}
          </span>
        </div>

        {/* Project name positioned at bottom of banner */}
        <div className="absolute bottom-8 left-0 right-0 px-8 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-black text-white"
          >
            {project.name}
          </motion.h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12 flex flex-col gap-10">

        {/* Description */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <p className="text-lg text-gray-300 leading-relaxed">{project.longDescription}</p>
        </motion.section>

        {/* Goal card */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <div className="rounded-2xl p-6" style={{ background: 'rgba(145,94,255,0.08)', border: '1px solid rgba(145,94,255,0.25)' }}>
            <h2 className="text-xl font-bold mb-3 flex items-center gap-2" style={{ color: '#c4b5fd' }}>
              🎯 Project Goal
            </h2>
            <p className="text-gray-300 leading-relaxed">{project.goal}</p>
          </div>
        </motion.section>

        {/* Tech stack */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <h2 className="text-xl font-bold mb-4 text-white">🛠 Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {project.techStack.map(tech => (
              <span
                key={tech}
                className="px-4 py-2 rounded-xl text-sm font-semibold transition-all hover:scale-105"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: '#e2e8f0' }}
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="flex flex-wrap gap-4">
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all hover:scale-105 hover:shadow-xl"
            style={{ background: 'linear-gradient(135deg, #915eff, #4a9eff)', boxShadow: '0 8px 24px rgba(145,94,255,0.3)' }}
          >
            🚀 View Project
          </a>
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)', color: '#94a3b8' }}
          >
            ← Back to Portfolio
          </button>
        </motion.div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-4 flex flex-wrap gap-6 text-xs text-gray-500 border-t pt-8"
          style={{ borderColor: 'rgba(255,255,255,0.06)' }}
        >
          <span>🇿🇦 Built in Johannesburg, South Africa</span>
          <span>👨‍💻 Kamvelihle Fatman</span>
          <span>💌 kamvelihlefatman@gmail.com</span>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetails;
