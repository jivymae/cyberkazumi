import React from 'react';
import { CodeIcon, PaintbrushIcon, BrainIcon, RocketIcon } from 'lucide-react';
const About = () => {
  return <section id="about" className="py-20 relative">
      <div className="absolute -left-40 top-1/3 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl"></div>
      <div className="relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-violet-600">
              About Me
            </span>
          </h2>
          <div className="h-px w-24 bg-purple-500 mx-auto mb-6"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a Junior QA Engineer with a passion for ensuring software quality through manual testing,
              automation, and UI/UX design. I specialize in detecting and reporting bugs, improving user 
              experience, and collaborating with development teams for efficient product delivery.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Beyond QA, I have a background in digital marketing, content management, 
              and system design, which gives me a unique perspective on building user-friendly and
              scalable applications. My previous work includes developing a <b>Dental Clinic Management System</b> and 
              contributing multiple projects.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              {skills.map((skill, index) => <span key={index} className="px-4 py-2 bg-purple-900/20 border border-purple-500/30 rounded-full text-purple-300 text-sm">
                  {skill}
                </span>)}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {expertise.map((item, index) => <div key={index} className="p-6 bg-purple-900/10 border border-purple-500/30 rounded-lg hover:bg-purple-900/20 transition-all duration-300 group">
                <div className="p-3 bg-purple-900/30 rounded-lg border border-purple-500/30 w-fit mb-4 group-hover:bg-purple-600/50 transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.description}</p>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
const skills = ['UI/UX Design', 'React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Figma', 'User Research', 'Prototyping', 'Design Systems', 'Motion Design'];
const expertise = [{
  icon: <CodeIcon className="h-6 w-6 text-purple-400" />,
  title: 'Development',
  description: 'Building scalable and performant web applications with modern technologies.'
}, {
  icon: <PaintbrushIcon className="h-6 w-6 text-purple-400" />,
  title: 'Design',
  description: 'Creating intuitive and visually stunning user interfaces and experiences.'
}, {
  icon: <BrainIcon className="h-6 w-6 text-purple-400" />,
  title: 'Problem Solving',
  description: 'Finding innovative solutions to complex technical and design challenges.'
}, {
  icon: <RocketIcon className="h-6 w-6 text-purple-400" />,
  title: 'Innovation',
  description: 'Pushing boundaries and exploring new technologies and design trends.'
}];
export default About;