import { Menu, Moon, Sun, X } from "lucide-react"
import { usePortfolio } from "../hooks/usePortfolio"
import Footer from './Footer';
import Projects from './Projects';
import Skills from './Skills';
import Experience from './Experience';
import About from './About';
import Hero from './Hero';

export default function Navbar(){
    const {
    menuOpen,
    setMenuOpen,
    activeSection,
    scrollToSection,
    isDark,
    setIsDark,
    projects,
    skills,
    bgColor,
    textColor,
    navBg,
    cardBg,
    sectionBg,
    textSecondary,
    textTertiary,
    hoverBg,experience
  } = usePortfolio();
    return(
        <div className={`${bgColor} ${textColor} overflow-hidden transition-colors duration-300`}>
        <nav className={`fixed top-0 w-full ${navBg} backdrop-blur-md z-50 border-b transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Dev
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8 items-center">
              {['home', 'about', 'experience', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors duration-300 ${
                    activeSection === item ? 'text-blue-400' : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-950'
                  }`}
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => setIsDark(!isDark)}
                className={`p-2 rounded-lg transition-colors duration-300 ${isDark ? 'bg-slate-800 hover:bg-slate-700' : 'bg-slate-200 hover:bg-slate-300'}`}
                title="Toggle theme"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Menu Button and Theme Toggle */}
            <div className="md:hidden flex items-center gap-4">
              <button
                onClick={() => setIsDark(!isDark)}
                className={`p-2 rounded-lg transition-colors duration-300 ${isDark ? 'bg-slate-800 hover:bg-slate-700' : 'bg-slate-200 hover:bg-slate-300'}`}
                title="Toggle theme"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className={`md:hidden pb-4 space-y-2 ${isDark ? 'bg-slate-900' : 'bg-slate-50'}`}>
              {['home', 'about', 'experience', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block w-full text-left px-4 py-2 capitalize rounded transition-colors ${hoverBg}`}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

     <Hero isDark={isDark} bgColor={bgColor} textSecondary={textSecondary} scrollToSection={scrollToSection}/> 
     <About sectionBg={sectionBg} cardBg={cardBg} textSecondary={textSecondary} textTertiary={textTertiary}/>
     <Experience experience={experience} cardBg={cardBg} textSecondary={textSecondary} textTertiary={textTertiary} isDark={isDark}/> 
     <Skills cardBg={cardBg} isDark={isDark} skills={skills}/>
     <Projects sectionBg={sectionBg} isDark={isDark} textSecondary={textSecondary} projects={projects}/>
     <Footer textSecondary={textSecondary} isDark={isDark} />


   <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
     </div>
    )
}