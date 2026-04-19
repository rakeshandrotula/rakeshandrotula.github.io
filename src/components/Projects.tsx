import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76a5.5 5.5 0 0 0-1.5-3.89 5.06 5.06 0 0 0-.14-3.83s-1.18-.38-3.91 1.44a13.38 13.38 0 0 0-7 0C4.68 2.06 3.5 2.44 3.5 2.44a5.06 5.06 0 0 0-.14 3.83A5.5 5.5 0 0 0 2 12c0 5.22 3 6.42 6 6.76a4.8 4.8 0 0 0-1 3.24v4" />
  </svg>
);

const projects = [
  {
    title: "GenAI Virtual Assistant",
    description: "Architected and deployed a large-scale RAG-based virtual assistant. Reduced customer service support volume by over 600,000 calls/month.",
    tags: ["Python", "Generative AI", "RAG", "LLMs"],
    link: null
  },
  {
    title: "Job Scout AI",
    description: "An automated Python-based tool for searching, tailoring, and applying to jobs effortlessly.",
    tags: ["Python", "Automation", "Streamlit"],
    link: "https://github.com/rakeshandrotula"
  },
  {
    title: "Sample RAG",
    description: "Open-source repository demonstrating the implementation of Retrieval-Augmented Generation.",
    tags: ["Python", "RAG", "AI"],
    link: "https://github.com/rakeshandrotula"
  },
  {
    title: "Android ROM Modding",
    description: "Porting, flashing, and testing Generic System Images (GSI) and custom ROMs for Android devices like Redmi 6 Pro.",
    tags: ["AOSP", "GSI", "Kernel", "Testing"],
    link: "https://xdaforums.com/m/rakesh-androtula.5113824/"
  }
];

const Projects = () => {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
          <span className="w-8 h-[2px] bg-indigo-500 rounded-full"></span>
          Highlighted Projects
        </h2>
        
        <div className="space-y-6">
          {projects.map((project, idx) => (
            <div key={idx} className="glass-panel p-6 md:p-8 flex flex-col md:flex-row gap-6 justify-between items-start group">
              <div className="flex-1 space-y-4">
                <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 leading-relaxed max-w-3xl">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium text-indigo-300 bg-indigo-500/10 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-3 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-slate-700 transition-colors shrink-0"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
