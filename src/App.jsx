import React, { useState, useEffect } from 'react';
import Header from './Header';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Database,
  Wind,
  X,
  BookOpen,
  Zap
} from 'lucide-react';
import Projects from './Projects';
import CaseStudy from './CaseStudy';
import Footer from './Footer';

export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [openCaseStudy, setOpenCaseStudy] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) =>
      setMousePosition({ x: e.clientX, y: e.clientY });

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

function onOpenCaseStudy(){
  setOpenCaseStudy(true)
}

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans overflow-x-hidden">
      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10">
        <div
          className="absolute top-0 left-0 w-150 h-150 bg-cyan-500/15 blur-[140px] rounded-full transition-transform duration-700 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 0.015}px, ${
              mousePosition.y * 0.015
            }px)`
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-125 h-125 bg-purple-600/12 blur-[120px] rounded-full transition-transform duration-700 ease-out"
          style={{
            transform: `translate(${-mousePosition.x * 0.01}px, ${
              -mousePosition.y * 0.01
            }px)`
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 h-100 bg-blue-500/8 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20">
        
        <Header scrollY={scrollY}/>
      
        <Projects OpenCaseStudy={onOpenCaseStudy} />
  
        <Footer/>
      </div>

      
      {openCaseStudy && <CaseStudy setOpenCaseStudy={setOpenCaseStudy}/>}
    </div>
  );
}