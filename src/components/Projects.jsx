import { Briefcase, ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";


export default function Projects({ sectionBg, isDark, textSecondary, projects }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoSlide, setIsAutoSlide] = useState(true);

  
  useEffect(() => {
    if (!isAutoSlide) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoSlide, projects.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index % projects.length);
    setIsAutoSlide(false);
    
    setTimeout(() => setIsAutoSlide(true), 10000);
  };

  const nextSlide = () => {
    goToSlide(currentIndex + 1);
  };

  const prevSlide = () => {
    goToSlide(currentIndex - 1);
  };

  const project = projects[currentIndex];

  return (
    <section id="projects" className={`py-20 px-4 md:w-[70%] md:mx-auto ${sectionBg} border-b transition-colors duration-300 rounded-2xl`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 flex items-center gap-3">
          <Briefcase className="text-purple-400" size={32} />
          Featured Projects
        </h2>

        
        <div className="relative">
         
          <div
            key={currentIndex}
            className={`group relative rounded-lg overflow-hidden border transition-all duration-500 animate-fade-in ${
              isDark
                ? 'bg-slate-800/30 border-slate-700 hover:border-purple-500/50 hover:shadow-purple-900/20'
                : 'bg-slate-200/30 border-slate-400 hover:border-purple-500/50 hover:shadow-purple-400/20'
            }`}
          >
           
            <div className="h-64 md:h-80 relative overflow-hidden bg-linear-to-br from-purple-600 to-purple-900">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className={`w-full h-full flex items-center justify-center ${project.image || 'bg-linear-to-br from-purple-600 to-purple-900'}`}>
                  <Briefcase size={64} className="text-white/30" />
                </div>
              )}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>

            
            <div className="p-8">
              <h3 className={`text-3xl font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {project.title}
              </h3>
              <p className={`${textSecondary} mb-6 leading-relaxed text-lg`}>{project.description}</p>

              
              {project.achievements && (
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-purple-300 mb-3 uppercase tracking-wide">
                    Key Achievements
                  </h4>
                  <ul className={`space-y-2 ${textSecondary} text-sm`}>
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1 shrink-0">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className={`px-2 py-1 rounded text-xs border ${
                      isDark
                        ? 'bg-purple-900/30 text-purple-300 border-purple-700/50'
                        : 'bg-purple-200/50 text-purple-700 border-purple-400/50'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              
              <div className="flex gap-4">
               
                <a
                  href={project.link} target="blank" 
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded border transition-colors ${
                    isDark
                      ? 'bg-purple-600/20 hover:bg-purple-600/40 border-purple-500/30 text-purple-400'
                      : 'bg-purple-300/30 hover:bg-purple-300/50 border-purple-500/50 text-purple-700'
                  }`}
                >
                  View <ExternalLink size={16} />
                </a>
                <a
                  href={project.github} target="blank" 
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded border transition-colors ${
                    isDark
                      ? 'bg-slate-700/20 hover:bg-slate-700/40 border-slate-600/30 text-slate-400'
                      : 'bg-slate-300/30 hover:bg-slate-300/50 border-slate-500/50 text-slate-700'
                  }`}
                >
                  Code <Github size={16} />
                </a>
              </div>
            </div>
          </div>

          
          <button
            onClick={prevSlide}
            className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full transition-all duration-300 ${
              isDark
                ? 'bg-purple-600/30 hover:bg-purple-600/60 text-white'
                : 'bg-purple-300/30 hover:bg-purple-300/60 text-slate-900'
            }`}
            aria-label="Previous project"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full transition-all duration-300 ${
              isDark
                ? 'bg-purple-600/30 hover:bg-purple-600/60 text-white'
                : 'bg-purple-300/30 hover:bg-purple-300/60 text-slate-900'
            }`}
            aria-label="Next project"
          >
            <ChevronRight size={24} />
          </button>
        </div>

      
        <div className="flex justify-center gap-2 mt-8">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-purple-500 w-8'
                  : isDark
                  ? 'bg-slate-600 w-2 hover:bg-slate-500'
                  : 'bg-slate-400 w-2 hover:bg-slate-300'
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>

       
        <div className={`text-center mt-4 ${textSecondary}`}>
          <p className="text-sm">
            {currentIndex + 1} of {projects.length}
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </section>
  );
}