import React, { useState } from 'react';
import { ChevronRightIcon, XIcon } from 'lucide-react';
const categories = ['All', 'Web Design', 'UI/UX', 'Branding', 'Development'];
const projects = [{
  id: 1,
  title: 'Neon Horizon',
  category: 'Web Design',
  image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  description: 'A futuristic web design for a tech startup',
  fullDescription: `A cutting-edge web design project that pushes the boundaries of modern UI/UX. Features include:
    • Dynamic user interactions
    • Advanced animation systems
    • Responsive design principles
    • Next-generation visual effects`
}, {
  id: 2,
  title: 'Cyber Interface',
  category: 'UI/UX',
  image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  description: 'User interface design for a cybersecurity app',
  fullDescription: `Innovative UI/UX design for a cybersecurity platform that prioritizes both security and user experience:
    • Real-time threat visualization
    • Intuitive navigation system
    • Custom security dashboards
    • Advanced data visualization`
}, {
  id: 3,
  title: 'Quantum Brand',
  category: 'Branding',
  image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  description: 'Corporate identity for a quantum computing company',
  fullDescription: `Complete brand identity design for a quantum computing pioneer:
    • Logo and visual identity system
    • Brand guidelines and documentation
    • Marketing materials and templates
    • Digital asset library`
}, {
  id: 4,
  title: 'Neural Network',
  category: 'Development',
  image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  description: 'Full-stack development for AI platform',
  fullDescription: `Advanced full-stack development project for AI platform:
    • Robust backend infrastructure
    • Scalable frontend architecture
    • Integration with machine learning models`
}, {
  id: 5,
  title: 'Digital Flux',
  category: 'Web Design',
  image: 'https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  description: 'Interactive web experience with dynamic elements',
  fullDescription: `Interactive web design project with dynamic elements:
    • Real-time data visualization
    • User-generated content integration
    • Adaptive layout for various screen sizes`
}, {
  id: 6,
  title: 'Hologram UI',
  category: 'UI/UX',
  image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  description: 'Holographic user interface concept for AR application',
  fullDescription: `Holographic UI concept for AR application:
    • Immersive user experience
    • Augmented reality integration
    • Customizable user interface elements`
}];
const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);
  const [expandedProject, setExpandedProject] = useState(null);
  const filteredProjects = activeCategory === 'All' ? projects : projects.filter(project => project.category === activeCategory);
  const toggleProject = projectId => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };
  return <section id="portfolio" className="py-20">
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-violet-600">
            My Portfolio
          </span>
        </h2>
        <div className="h-px w-24 bg-purple-500 mx-auto mb-6"></div>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Explore my latest projects showcasing innovative designs and technical
          expertise. Each project represents my commitment to pushing creative
          boundaries.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
        {categories.map(category => <button key={category} onClick={() => setActiveCategory(category)} className={`px-5 py-2 rounded-full text-sm transition-all duration-300 ${activeCategory === category ? 'bg-purple-600 text-white shadow-[0_0_10px_rgba(139,92,246,0.5)]' : 'bg-purple-900/20 text-purple-200 hover:bg-purple-900/40'}`}>
            {category}
          </button>)}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map(project => <div key={project.id} className="group relative overflow-hidden rounded-lg bg-purple-900/10 border border-purple-900/50 transition-transform duration-500 hover:-translate-y-2" onMouseEnter={() => setHoveredProject(project.id)} onMouseLeave={() => setHoveredProject(null)}>
            <div className="relative h-64 overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              <div className={`absolute inset-0 border-2 border-purple-500/0 transition-all duration-500 ${hoveredProject === project.id ? 'border-purple-500/70 shadow-[inset_0_0_20px_rgba(139,92,246,0.3)]' : ''}`}></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-white">
                {project.title}
              </h3>
              <p className="text-purple-300 text-sm mb-4">{project.category}</p>
              <p className="text-gray-300">{project.description}</p>
            </div>
            <div className={`absolute inset-0 bg-black/95 backdrop-blur-sm transition-all duration-500 flex flex-col ${expandedProject === project.id ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
              <div className="p-6 flex-1 overflow-auto">
                <h3 className="text-xl font-bold mb-4 text-white bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-violet-600">
                  {project.title}
                </h3>
                <div className="h-px w-16 bg-purple-500 mb-4"></div>
                <p className="text-gray-300 whitespace-pre-line">
                  {project.fullDescription}
                </p>
              </div>
            </div>
            <button onClick={() => toggleProject(project.id)} className="absolute bottom-6 right-6 p-2 rounded-full bg-purple-600/80 hover:bg-purple-600 text-white shadow-[0_0_10px_rgba(139,92,246,0.5)] transition-all duration-300 group-hover:opacity-100" style={{
          opacity: hoveredProject === project.id || expandedProject === project.id ? 1 : 0
        }}>
              {expandedProject === project.id ? <XIcon className="h-5 w-5" /> : <ChevronRightIcon className="h-5 w-5" />}
            </button>
          </div>)}
      </div>
    </section>;
};
export default Portfolio;