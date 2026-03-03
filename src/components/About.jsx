import { User } from "lucide-react"


export default function About({sectionBg,cardBg,textSecondary,textTertiary}){
   
    return(
       <section id="about" className={`py-20 px-4 ${sectionBg} border-b transition-colors duration-300`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 flex items-center gap-3">
            <User className="text-blue-400" size={32} />
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className={`${textTertiary} text-lg leading-relaxed mb-6`}>
                I'm a passionate developer with 1 year of experience building full-stack projects. My journey started with a love for problem-solving. I've built projects using Firebase and Supabase, and I'm currently learning Python.
              </p>
              <p className={`${textTertiary} text-lg leading-relaxed`}>
                I love mentoring other developers and sharing knowledge. When I'm not coding, you'll find me playing sports and exploring new technologies. I'm driven by continuous learning and building solutions that matter.
              </p>
            </div>

            <div className="space-y-4">
              <div className={`${cardBg} backdrop-blur-sm p-6 rounded-lg border hover:border-blue-500/50 transition-colors`}>
                <h3 className="text-xl font-semibold text-blue-400 mb-2">Experience</h3>
                <p className={textSecondary}>1 year building full-stack projects</p>
              </div>
              <div className={`${cardBg} backdrop-blur-sm p-6 rounded-lg border hover:border-blue-500/50 transition-colors`}>
                <h3 className="text-xl font-semibold text-blue-400 mb-2">Tech Stack</h3>
                <p className={textSecondary}>React, Next js, Firebase, Supabase, Python (Learning)</p>
              </div>
              <div className={`${cardBg} backdrop-blur-sm p-6 rounded-lg border hover:border-blue-500/50 transition-colors`}>
                <h3 className="text-xl font-semibold text-blue-400 mb-2">Passion</h3>
                <p className={textSecondary}>Problem-solving, Mentoring, Sports</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
} 