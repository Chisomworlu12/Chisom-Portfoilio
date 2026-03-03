import { Code2 } from "lucide-react";


 
export default function Skills({cardBg, isDark,skills}){
    
    return(
         <section id="skills" className="py-20 px-4 transition-colors duration-300">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-4xl md:text-5xl font-bold mb-12 flex items-center gap-3">
                    <Code2 className="text-cyan-400" size={32} />
                    Skills
                  </h2>
        
                  <div className="grid md:grid-cols-2 gap-8">
                    {skills.map((skill, index) => (
                      <div
                        key={index}
                        className={`${cardBg} backdrop-blur-sm p-8 rounded-lg border hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1`}
                      >
                        <h3 className="text-xl font-semibold text-cyan-400 mb-4">{skill.category}</h3>
                        <div className="flex flex-wrap gap-2">
                          {skill.items.map((item, i) => (
                            <span
                              key={i}
                              className={`px-3 py-1 ${isDark ? 'bg-slate-700/50 border-slate-600 text-slate-300' : 'bg-slate-300/50 border-slate-400 text-slate-700'} rounded-full text-sm border`}
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
        
    )
}