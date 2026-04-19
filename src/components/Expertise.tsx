import React from 'react';
import { motion } from 'framer-motion';
import { Server, Cpu, Code2, LineChart } from 'lucide-react';

const expertiseData = [
  {
    category: "Leadership & Scale",
    icon: <LineChart className="w-5 h-5 text-indigo-400" />,
    skills: ["Team Building (90+ org)", "Cost Governance", "Agile & OKRs", "Vendor Management"]
  },
  {
    category: "Fintech & Architecture",
    icon: <Server className="w-5 h-5 text-cyan-400" />,
    skills: ["High-Availability Systems", "Microservices", "Kafka", "AWS / Cloud Native"]
  },
  {
    category: "AI & Engineering",
    icon: <Code2 className="w-5 h-5 text-emerald-400" />,
    skills: ["Generative AI & RAG", "Python", "TypeScript/Node.js", "CI/CD Automation"]
  },
  {
    category: "Android Modding/OS",
    icon: <Cpu className="w-5 h-5 text-orange-400" />,
    skills: ["Custom ROMs", "GSI Flashing", "Kernel Testing", "AOSP"]
  }
];

const Expertise = () => {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
          <span className="w-8 h-[2px] bg-cyan-500 rounded-full"></span>
          Core Expertise
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {expertiseData.map((exp, index) => (
            <div key={index} className="glass-panel p-6 hover:border-slate-600/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-slate-800 rounded-lg border border-slate-700">
                  {exp.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-200">{exp.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-3 py-1 text-sm bg-slate-800/80 text-slate-300 border border-slate-700 rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Expertise;
