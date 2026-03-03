import { Github, Linkedin, Mail } from "lucide-react"


function Footer({textSecondary,isDark}) {
    
    

    return (<>
         <section id="contact" className="py-20 px-4 transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 flex items-center justify-center gap-3">
            <Mail className="text-green-400" size={32} />
            Let's Connect
          </h2>

          <p className={`text-xl ${textSecondary} mb-12 max-w-2xl mx-auto`}>
            I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!
          </p>

          <div className="flex gap-6 justify-center flex-wrap mb-12">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=worluchisom4real@gmail.com&su=Portfolio Inquiry"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 hover:-translate-y-1 text-white"
            >
              Send Email
            </a>
            <a
              href="/CHISOM_WORLU_RESUME.pdf"
            download="CHISOM_WORLU_RESUME.pdf"
              className={`px-8 py-3 border rounded-lg font-semibold transition-all duration-300 ${isDark ? 'border-slate-600 hover:bg-slate-800' : 'border-slate-400 hover:bg-slate-200'}`}
            >
              Resume
            </a>
          </div>

          <div className={`flex gap-8 justify-center mb-12 flex-wrap ${textSecondary}`}>
            <a href="https://github.com/Chisomworlu12"  target="_blank" 
                rel="noopener noreferrer" className="hover:text-green-400 transition-colors flex items-center gap-2">
              <Github size={24} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/Chisomworlu/"  target="_blank" 
                rel="noopener noreferrer" className="hover:text-green-400 transition-colors flex items-center gap-2">
              <Linkedin size={24} /> LinkedIn
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=worluchisom4real@gmail.com&su=Portfolio Inquiry"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition-colors flex items-center gap-2">
              <Mail size={24} /> Email
            </a>
          </div>

          <div className={`pt-8 border-t ${isDark ? 'border-slate-800 text-slate-500' : 'border-slate-300 text-slate-600'}`}>
            <p className="text-slate-500 italic text-sm mb-2">
                Psalm 90:17 — Let the beauty of our work be established
              </p>
            <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          </div>
        </div>
      </section>
      </>
    )
}

export default Footer