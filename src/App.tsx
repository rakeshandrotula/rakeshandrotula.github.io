import React from 'react';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 selection:bg-cyan-500/30 selection:text-cyan-50 relative overflow-hidden">
      {/* Background ambient light effects */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-900/20 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-900/20 blur-[120px]"></div>
      </div>
      
      <main className="max-w-5xl mx-auto px-6 py-12 md:py-20 space-y-24 md:space-y-32">
        <Hero />
        <Expertise />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
