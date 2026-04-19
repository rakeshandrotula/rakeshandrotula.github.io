import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-24 py-8 border-t border-slate-800/50">
      <div className="max-w-5xl mx-auto px-6 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Rakesh Androtula. All rights reserved.</p>
        <p className="mt-1">Designed by Antigravity AI Engine.</p>
      </div>
    </footer>
  );
};

export default Footer;
