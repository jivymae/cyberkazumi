import React from 'react';
import { BriefcaseIcon, GraduationCapIcon, AwardIcon } from 'lucide-react';
const Resume = () => {
  return <section id="resume" className="py-20 relative">
      <div className="absolute -right-40 top-1/3 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl"></div>
      <div className="relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-violet-600">
              Resume
            </span>
          </h2>
          <div className="h-px w-24 bg-purple-500 mx-auto mb-6"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience Section */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-purple-900/30 rounded-lg border border-purple-500/30">
                <BriefcaseIcon className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Experience</h3>
            </div>
            {experience.map((item, index) => <TimelineItem key={index} {...item} />)}
          </div>
          <div className="space-y-12">
            {/* Education Section */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-purple-900/30 rounded-lg border border-purple-500/30">
                  <GraduationCapIcon className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Education</h3>
              </div>
              {education.map((item, index) => <TimelineItem key={index} {...item} />)}
            </div>
            {/* Achievements Section */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-purple-900/30 rounded-lg border border-purple-500/30">
                  <AwardIcon className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Achievements</h3>
              </div>
              <ul className="space-y-4">
                {achievements.map((achievement, index) => <li key={index} className="p-4 bg-purple-900/10 border border-purple-500/30 rounded-lg hover:bg-purple-900/20 transition-all duration-300">
                    {achievement}
                  </li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
const TimelineItem = ({
  title,
  company,
  period,
  description
}) => <div className="relative pl-6 pb-6 group">
    <div className="absolute left-0 top-0 h-full w-px bg-purple-500/30 group-last:h-6"></div>
    <div className="absolute left-[-4px] top-2 h-2 w-2 rounded-full bg-purple-500"></div>
    <div className="p-4 bg-purple-900/10 border border-purple-500/30 rounded-lg hover:bg-purple-900/20 transition-all duration-300">
      <h4 className="text-lg font-bold text-white mb-1">{title}</h4>
      <p className="text-purple-300 mb-2">{company}</p>
      <p className="text-sm text-gray-400 mb-3">{period}</p>
      <p className="text-gray-300">{description}</p>
    </div>
  </div>;
const experience = [{
  title: 'Senior UI/UX Designer',
  company: 'Tech Innovations Inc.',
  period: '2021 - Present',
  description: 'Lead designer for multiple high-profile projects, managing a team of designers and developers.'
}, {
  title: 'UI Designer',
  company: 'Digital Creatives',
  period: '2019 - 2021',
  description: 'Created user interfaces for web and mobile applications, collaborating with development teams.'
}, {
  title: 'Junior Designer',
  company: 'StartUp Studio',
  period: '2018 - 2019',
  description: 'Designed marketing materials and website interfaces for various startup clients.'
}];
const education = [{
  title: 'Bachelor of Science in Information Technology',
  company: 'Capitol University',
  period: '2021 - 2025',
  description: 'Focuses on the study of technology, computer systems, software, networks, and data management.'
}, {
  title: 'TVL - Information and Communication Technology',
  company: 'Informatics Computer Institue',
  period: '2019 - 2021',
  description: 'Focuses on areas like computing, digital literacy, and the use of technology to communicate and process information.'
}];
const achievements = ['Best Design Award 2023 - Tech Innovation Summit', 'Featured Designer - Adobe Design Conference 2022', 'Speaker at UX/UI Conference 2021', 'Published article in Web Design Magazine'];
export default Resume;