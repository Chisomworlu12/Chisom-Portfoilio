import { BookOpen, Code2, Database, ExternalLink, Github, Wind } from "lucide-react"

// 1. Updated Data Objects
const news = [
  {
    name: "AI News Summarizer",
    image: "/news-summarizer.png", 
    desc: "RSS-to-database pipeline with Gemini AI summarization, designed for performance and clean frontend consumption.",
    liveLink: "https://news-summarizer-hazel.vercel.app/",
    github: "https://github.com/Chisomworlu12/News-Summarizer.git",
    codeWalkthrough: "",
    tags: ["React", "Gemini AI", "supabase", "PostgreSQL","RSS Parsing", "Tailwind CSS"]
  }
]

const projects = [
  {
    name: "Weather Dashboard",
    image: "/ople-weather.png",
    desc: "Real-time weather app with clean API handling and UI state management. Features location search and forecast visualization.",
    liveLink: "https://weather-dashbord-one.vercel.app/",
    github: "https://github.com/Chisomworlu12/Weather-dashbord.git",
    codeWalkthrough: "https://www.loom.com/share/93e0bea7518d47a087609fb2f5e05387",
    tags: ["React", "OpenWeather API", "Tailwind CSS"]
  }
]

function Projects({ OpenCaseStudy }) {
  return (
    <section id="projects" className="py-32 px-4 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex items-center gap-3 mb-16">
        <div className="p-2 bg-cyan-500/10 rounded-lg">
          <Code2 size={20} className="text-cyan-400" />
        </div>
        <h2 className="uppercase tracking-[0.25em] text-slate-400 text-xs font-bold">
          Featured Work
        </h2>
        <div className="flex-1 h-px bg-gradient-to-r from-slate-800 to-transparent" />
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        
        {/* --- CARD 1: AI NEWS SUMMARIZER --- */}
        <div className="group relative bg-slate-900/40 backdrop-blur-sm border border-slate-800 rounded-3xl overflow-hidden hover:bg-slate-900/60 hover:border-cyan-500/50 transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          <div className="relative h-64 overflow-hidden border-b border-slate-800">
            <img 
              src={news[0].image} 
              alt={news[0].name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent opacity-60" />
          </div>

          <div className="p-10 relative">
            <div className="flex justify-between items-start mb-6">
                <a href={news[0].github} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-slate-800/50 hover:bg-slate-800 rounded-lg transition-colors group/link">
                  <Github size={20} className="text-slate-400 group-hover/link:text-white" />
                </a>
                <a href={news[0].liveLink} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-slate-800/50 hover:bg-slate-800 rounded-lg transition-colors group/link">
                  <ExternalLink size={20} className="text-slate-400 group-hover/link:text-cyan-400" />
                </a>
            </div>

           
            <a href={news[0].liveLink} target="_blank" rel="noopener noreferrer" className="block group/title">
              <h3 className="text-3xl font-black text-white mb-3 tracking-tight group-hover:text-cyan-400 group-hover/title:underline transition-colors duration-300">
                {news[0].name}
              </h3>
            </a>

            <p className="text-slate-400 mb-6 leading-relaxed">
              {news[0].desc}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {news[0].tags.map(tag => (
                <span key={tag} className="px-3 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            <div className="space-y-3">
              <button onClick={OpenCaseStudy} className="w-full py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300">
                <BookOpen size={18} />
                View Case Study
              </button>
              <a 
                href={news[0].codeWalkthrough || "#"} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full py-3.5 bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-slate-300 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-slate-800 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300 px-2"
              >
                <svg className="hidden md:block" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
                {news[0].codeWalkthrough ? "Watch Code Walkthrough" : "Walkthrough Coming Soon"}
              </a>
            </div>
          </div>
        </div>

        {/* --- CARD 2: WEATHER DASHBOARD --- */}
        <div className="group relative bg-slate-900/40 backdrop-blur-sm border border-slate-800 rounded-3xl overflow-hidden hover:bg-slate-900/60 hover:border-purple-500/50 transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          <div className="relative h-64 overflow-hidden border-b border-slate-800">
            <img 
              src={projects[0].image} 
              alt={projects[0].name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent opacity-60" />
          </div>

          <div className="p-10 relative">
            <div className="flex justify-between items-start mb-6">
                <a href={projects[0].github} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-slate-800/50 hover:bg-slate-800 rounded-lg transition-colors group/link">
                  <Github size={20} className="text-slate-400 group-hover/link:text-white" />
                </a>
                <a href={projects[0].liveLink} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-slate-800/50 hover:bg-slate-800 rounded-lg transition-colors group/link">
                  <ExternalLink size={20} className="text-slate-400 group-hover/link:text-purple-400" />
                </a>
            </div>

           
            <a href={projects[0].liveLink} target="_blank" rel="noopener noreferrer" className="block group/title">
              <h3 className="text-3xl font-black text-white mb-3 tracking-tight group-hover:text-purple-400 group-hover/title:underline transition-colors duration-300">
                {projects[0].name}
              </h3>
            </a>

            <p className="text-slate-400 mb-6 leading-relaxed">
              {projects[0].desc}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {projects[0].tags.map(tag => (
                <span key={tag} className="px-3 py-1 text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            <div className="space-y-3">
              <a href={projects[0].liveLink} target="_blank" rel="noopener noreferrer" className="w-full py-3.5 bg-slate-800/80 backdrop-blur-sm border border-slate-700 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-600 hover:border-transparent transition-all duration-300">
                <ExternalLink size={18} />
                View Project
              </a>
              <a href={projects[0].codeWalkthrough} target="_blank" rel="noopener noreferrer" className="w-full py-3.5 bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-slate-300 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-slate-800 hover:border-purple-500/50 hover:text-purple-400 transition-all duration-300 px-2">
                <svg className="hidden md:block" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
                Watch Code Walkthrough
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects