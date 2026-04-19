import React from 'react';
import { motion } from 'framer-motion';
import { Mail, FileText, ChevronRight } from 'lucide-react';

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76a5.5 5.5 0 0 0-1.5-3.89 5.06 5.06 0 0 0-.14-3.83s-1.18-.38-3.91 1.44a13.38 13.38 0 0 0-7 0C4.68 2.06 3.5 2.44 3.5 2.44a5.06 5.06 0 0 0-.14 3.83A5.5 5.5 0 0 0 2 12c0 5.22 3 6.42 6 6.76a4.8 4.8 0 0 0-1 3.24v4" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Hero = () => {
  return (
    <section className="relative pt-12 md:pt-20 flex flex-col md:flex-row items-center gap-12">
      <motion.div 
        className="flex-1 space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          Head of Product Engineering
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">scalable teams</span> &<br /> 
          high-availability <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">systems.</span>
        </h1>
        
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed">
          I'm Rakesh Androtula, a visionary engineering leader currently managing a 90+ member organization. 
          I specialize in scaling enterprise Fintech platforms serving 16M+ users and driving customer adoption 
          through innovative GenAI solutions.
        </p>

        <div className="flex flex-wrap gap-4 pt-4">
          <a href="mailto:rakeshandrotula@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg font-medium transition-colors">
            <Mail className="w-4 h-4" />
            Get in touch
          </a>
          <a href="/Rakesh Androtula_Excutive Profile.pdf" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-lg font-medium transition-colors">
            <FileText className="w-4 h-4" />
            Executive Profile
          </a>
        </div>

        <div className="flex items-center gap-6 pt-6 text-slate-400">
          <a href="https://github.com/rakeshandrotula" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">
            <span className="sr-only">GitHub</span>
            <GithubIcon />
          </a>
          <a href="https://www.linkedin.com/in/rakeshandrotula/" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">
            <span className="sr-only">LinkedIn</span>
            <LinkedinIcon />
          </a>
          <a href="https://xdaforums.com/m/rakesh-androtula.5113824/" target="_blank" rel="noreferrer" className="text-sm font-medium hover:text-cyan-400 transition-colors flex items-center gap-1">
            XDA <ChevronRight className="w-3 h-3" />
          </a>
        </div>
      </motion.div>

      <motion.div 
        className="w-48 h-48 md:w-72 md:h-72 shrink-0 relative"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-2xl"></div>
        <img 
          src="/profile.jpg" 
          alt="Rakesh Androtula" 
          className="relative z-10 w-full h-full object-cover rounded-full border-4 border-slate-800 shadow-2xl"
          onError={(e) => {
            e.target.src = 'https://ui-avatars.com/api/?name=Rakesh+Androtula&background=0D8ABC&color=fff&size=256';
          }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
