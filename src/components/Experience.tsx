import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: "Head of Product Engineering",
    company: "Experian",
    period: "May 2024 – Present",
    location: "Hyderabad (GIC)",
    bullets: [
      "Increased customer adoption by 53% (30K → 46K) through data-driven enhancements and high-velocity A/B testing.",
      "Architected and deployed a GenAI Virtual Assistant using RAG, reducing support volume by 600K+ calls/month.",
      "Avoided $228K/year in infrastructure costs by leveraging cross-region Neptune DB deployments.",
      "Mentored engineers, led tech talks, and fostered a culture of ownership and continuous improvement.",
      "Implementing ML-based personalization and Gen AI use cases for predictive user flows."
    ]
  },
  {
    role: "Engineering Manager",
    company: "Outplay",
    period: "May 2022 – Apr 2024",
    location: "Hyderabad",
    bullets: [
      "Led a 40-member team for a multi-tenant SaaS platform serving 1M+ users.",
      "Implemented microservices and Kafka for real-time event processing.",
      "Strengthened CI/CD pipelines and automated testing, resulting in a 30% reduction in production defect leakage."
    ]
  },
  {
    role: "Technical Architect",
    company: "Coforge",
    period: "Nov 2021 – May 2022",
    location: "Hyderabad",
    bullets: [
      "Designed and architected an API-first, event-driven system for real-time transactions.",
      "Converted legacy ETL packages into scalable RESTful services using a modern architectural approach."
    ]
  },
  {
    role: "Project Lead / Solution Architect",
    company: "Applied Info Services",
    period: "Dec 2014 – Nov 2021",
    location: "Hyderabad",
    bullets: [
      "Migrated legacy .NET applications to microservices and containerized them for deployment on Azure.",
      "Delivered enterprise-grade Azure PaaS solutions and developed mobile applications using Xamarin.",
      "Implemented workflow automation and alert systems using MS Teams to improve team communication and response times."
    ]
  },
  {
    role: "Programmer Analyst",
    company: "Franklin Templeton Investments",
    period: "Sep 2011 – Dec 2014",
    location: "Hyderabad",
    bullets: [
      "Developed scalable web applications using ASP.NET MVC and SQL Server.",
      "Modernized legacy VB6 apps into .NET Windows applications.",
      "Built notification systems for print order workflows."
    ]
  },
  {
    role: "IT Engineer",
    company: "CMC Ltd.",
    period: "Aug 2006 – Sep 2011",
    location: "Hyderabad",
    bullets: [
      "Developed Windows and Web applications using .NET framework."
    ]
  }
];

const Experience = () => {
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
          Professional Experience
        </h2>
        
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[8.5rem] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-800 text-slate-400 group-hover:text-cyan-400 group-hover:border-cyan-500/50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors z-10">
                <Briefcase className="w-4 h-4" />
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-panel p-6 hover:border-slate-600/50 transition-colors">
                <div className="flex flex-col xl:flex-row xl:items-baseline xl:justify-between mb-2 gap-2">
                  <h3 className="font-bold text-slate-200 text-lg">{exp.role}</h3>
                  <span className="text-sm font-medium text-cyan-500 bg-cyan-500/10 px-2 py-0.5 rounded w-fit whitespace-nowrap lg:shrink-0">
                    {exp.period}
                  </span>
                </div>
                <div className="text-slate-400 font-medium mb-4">
                  {exp.company} <span className="text-slate-600 px-1">•</span> <span className="text-sm">{exp.location}</span>
                </div>
                <ul className="space-y-2">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="text-slate-400 text-sm leading-relaxed flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-1.5 shrink-0 group-hover:bg-cyan-500/50 transition-colors"></span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
