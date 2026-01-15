import { Database, ExternalLink, Zap, Github, X } from "lucide-react"
const news = [
    { liveLink: "https://news-summarizer-hazel.vercel.app/", github:"https://github.com/Chisomworlu12/News-Summarizer.git"}]
function CaseStudy({setOpenCaseStudy}) {
    return (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center px-6 animate-in fade-in duration-300"
          onClick={() => setOpenCaseStudy(false)}
        >
          <div 
            className="bg-slate-950 max-w-4xl w-full border border-slate-800 rounded-3xl overflow-hidden shadow-2xl shadow-cyan-500/20 animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border-b border-slate-800 px-8 py-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-cyan-500/20 rounded-lg">
                  <Database size={24} className="text-cyan-400" />
                </div>
                <h2 className="text-2xl font-black text-cyan-400">
                  AI News Summarizer
                </h2>
              </div>
              <button
                onClick={() => setOpenCaseStudy(false)}
                className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
              >
                <X size={24} className="text-slate-400 hover:text-white transition-colors" />
              </button>
            </div>

          
            <div className="p-8 overflow-y-auto max-h-[70vh]">
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                An AI-powered news platform that ingests articles from RSS feeds,
                stores them in Supabase (PostgreSQL), and generates concise summaries
                using Gemini AI.
              </p>

              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <Zap size={18} className="text-cyan-400" />
                  <h3 className="font-bold text-white">Architecture Flow</h3>
                </div>
                <pre className="text-cyan-400 font-mono text-sm leading-loose">
{`RSS Feeds
    ↓
Normalization & Parsing
    ↓
Supabase (PostgreSQL)
    ↓
React Frontend (Fetch)
    ↓
Gemini AI (On-Demand)
    ↓
Cached Summaries`}
                </pre>
              </div>

              <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-cyan-400 rounded" />
                Key Features
              </h3>
              <ul className="space-y-3 mb-8 text-slate-400">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span>Custom RSS ingestion pipeline with error handling and deduplication</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span>Persistent storage in PostgreSQL for consistent data access</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span>Reduced API costs through intelligent caching strategy</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span>UX designed for async AI operations with loading states</span>
                </li>
              </ul>

              <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-slate-800 rounded-2xl p-6">
                <p className="text-slate-300">
                  <span className="font-bold text-white">Tech Stack:</span> React · Tailwind CSS · Supabase · PostgreSQL · RSS Parser · Gemini AI API
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-slate-800 px-8 py-5 flex gap-3">
              <a href={news[0].github} target="_blank"
                    rel="noopener noreferrer" className="flex-1 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan-500/30 transition-all">
                <Github size={18} />
                View Code
              </a>
              <a href={news[0].liveLink} target="_blank"
                    rel="noopener noreferrer" className="flex-1 py-3 bg-slate-800 border border-slate-700 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-700 transition-all">
                <ExternalLink size={18} />
                Live Demo
              </a>
            </div>
          </div>
        </div>
    )
}

export default CaseStudy
