import { Briefcase } from "lucide-react";


export default function Experience ({experience, cardBg,textSecondary,textTertiary,isDark}){

    return(
        <section id="experience" className="py-20 px-4 transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 flex items-center gap-3">
            <Briefcase className="text-orange-400" size={32} />
            Work Experience
          </h2>

          <div className="space-y-8">
            {experience.map((job, index) => (
              <div
                key={index}
                className={`${cardBg} backdrop-blur-sm p-8 rounded-lg border hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-orange-400">{job.title}</h3>
                    <div className="flex flex-col gap-1 mt-2">
                      <p className={`${textSecondary} text-lg font-semibold`}>{job.company}</p>
                      <p className={`${textSecondary} text-sm`}>{job.location}</p>
                    </div>
                  </div>
                  <span className={`px-4 py-2 rounded-lg ${isDark ? 'bg-orange-900/30 text-orange-300' : 'bg-orange-200/50 text-orange-700'} whitespace-nowrap text-sm h-fit`}>
                    {job.duration}
                  </span>
                </div>
                
                <p className={`${textTertiary} mb-6 leading-relaxed`}>{job.description}</p>

                {/* Key Achievements */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-orange-300 mb-3 uppercase tracking-wide">Key Achievements</h4>
                  <ul className={`space-y-2 ${textSecondary}`}>
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-orange-400 mt-1 flex-shrink-0">•</span>
                        <span className="text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {job.highlights.map((skill, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 ${isDark ? 'bg-orange-900/40 border-orange-700/50 text-orange-300' : 'bg-orange-200/50 border-orange-400/50 text-orange-700'} rounded-full text-sm border`}
                    >
                      {skill}
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