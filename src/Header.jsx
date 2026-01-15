import {
  ArrowRight,
  Terminal,
  Layers,
  Mail,
  FileDown 
} from 'lucide-react';

const skills = ["JavaScript (ES6+)","CSS", "React", "Supabase", "TypeScript", "Tailwind", "RSS Parsing"];

function Header() {
  const emailAddress = "worluchisom4real@gmail.com"; 

 
  const handleScroll = (e) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="min-h-[85vh] flex flex-col items-center justify-center text-center">
      <div
        className="relative mb-12 group"
        style={{ transform: typeof window !== 'undefined' ? `translateY(${Math.min(window.scrollY * 0.1, 50)}px)` : 'none' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 blur-2xl opacity-50 group-hover:opacity-70 rounded-full transition-opacity duration-500" />
        <div className="relative w-52 h-52 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 p-1">
          <img
            src="chisom.png"
            alt="Chisom"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        <div className="absolute -bottom-3 -right-3 bg-green-400 w-7 h-7 rounded-full border-4 border-slate-950 shadow-lg shadow-green-400/50" />
      </div>

      <h1 className="text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 mb-5 tracking-tight uppercase">
        Chisom Worlu
      </h1>

      <div className="flex items-center gap-3 text-cyan-400 font-mono text-sm tracking-wider mb-8">
        <Terminal size={18} />
        <span>FRONTEND DEVELOPER · AI-INTEGRATED APPS</span>
        <Layers size={18} />
      </div>

      <p className="max-w-2xl text-slate-400 text-lg leading-relaxed mb-10 px-4">
        Frontend developer focused on building clean, responsive user
        interfaces with React. I enjoy integrating APIs and AI into real-world
        products that solve actual problems.
      </p>

      <div className="flex flex-wrap gap-2.5 justify-center mb-12">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-5 py-2.5 bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-full text-sm font-medium text-slate-300 hover:bg-cyan-500/10 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300 cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        {/* Updated with onClick for smooth scroll */}
        <a 
          href="#projects" 
          onClick={handleScroll}
          className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-bold text-white flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300"
        >
          View Projects
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </a>

        <a 
          href={`mailto:${emailAddress}?subject=Project Inquiry`}
          className="px-8 py-4 bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl font-bold text-slate-300 hover:bg-slate-800 hover:border-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-2"
        >
          <Mail size={18} />
          Contact Me
        </a>

        <a 
          href="/Chisom_Worlu_CV.pdf" 
          download
          className="px-8 py-4 bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl font-bold text-slate-300 hover:bg-slate-800 hover:border-purple-500/50 hover:text-purple-400 transition-all duration-300 flex items-center justify-center gap-2"
        >
          <FileDown size={18} />
          View CV
        </a>
      </div>
    </header>
  );
}

export default Header;