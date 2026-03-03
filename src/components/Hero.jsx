import { Github, Linkedin, Mail, User } from "lucide-react"


export default function Hero ({isDark,bgColor, textSecondary,scrollToSection}){
   
    return(
         <section id="home" className="min-h-screen flex items-center justify-center pt-16 pb-2 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <div className="w-40 h-40 mx-auto mb-8 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full p-1">
                <div className={`w-full h-full ${bgColor} rounded-full flex items-center justify-center`}>
                  <img src="./chisom.png" className="rounded-full w-full h-full object-cover" alt="" />
                </div>
              </div>
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Chisom Worlu
            </span>
          </h1>

          <p className={`text-xl md:text-2xl ${textSecondary} mb-8 max-w-2xl mx-auto animate-fade-in`} style={{animationDelay: '0.4s'}}>
            Building beautiful, performant web experiences that solve real problems. Specialized in React, full-stack development, and design systems.
          </p>

          <div className="flex gap-4 justify-center mb-12 flex-wrap animate-fade-in" style={{animationDelay: '0.6s'}}>
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1 text-white"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`px-8 py-3 border rounded-lg font-semibold transition-all duration-300 ${isDark ? 'border-slate-600 hover:bg-slate-800' : 'border-slate-400 hover:bg-slate-200'}`}
            >
              Get in Touch
            </button>
          </div>

          <div className={`flex gap-6 justify-center animate-fade-in ${textSecondary}`} style={{animationDelay: '0.8s'}}>
            <a href="https://github.com/Chisomworlu12" target="_blank"
              rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/Chisomworlu/" target="_blank"
              rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=worluchisom4real@gmail.com&su=Portfolio Inquiry" className="hover:text-blue-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce ${textSecondary}`}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>
    )
}