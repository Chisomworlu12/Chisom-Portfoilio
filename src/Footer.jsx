import { Github, Linkedin, Mail } from "lucide-react"

function Footer() {
    
    const emailAddress = "worluchisom4real@gmail.com";

    return (
        <footer id="contact" className="border-t border-slate-800/50 pt-12 pb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-slate-500 italic text-sm mb-2">
                Psalm 90:17 — Let the beauty of our work be established
              </p>
              <p className="text-slate-600 text-xs">
                Built with React · Tailwind · Love · © {new Date().getFullYear()}
              </p>
            </div>
            
            <div className="flex gap-3">
              {/* LinkedIn Link */}
              <a 
                href="https://www.linkedin.com/in/Chisomworlu/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-slate-900/50 hover:bg-slate-800/80 rounded-xl transition-all group border border-transparent hover:border-cyan-500/30"
              >
                <Linkedin size={22} className="text-slate-500 group-hover:text-cyan-400 transition-colors" />
              </a>

              {/* GitHub Link */}
              <a 
                href="https://github.com/Chisomworlu12" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-slate-900/50 hover:bg-slate-800/80 rounded-xl transition-all group border border-transparent hover:border-slate-400"
              >
                <Github size={22} className="text-slate-500 group-hover:text-white transition-colors" />
              </a>

              {/* Email Link (mailto:) */}
              <a 
                href={`mailto:${emailAddress}?subject=Portfolio Inquiry`}
                className="p-3 bg-slate-900/50 hover:bg-slate-800/80 rounded-xl transition-all group border border-transparent hover:border-purple-500/30"
              >
                <Mail size={22} className="text-slate-500 group-hover:text-purple-400 transition-colors" />
              </a>
            </div>
          </div>
        </footer>
    )
}

export default Footer