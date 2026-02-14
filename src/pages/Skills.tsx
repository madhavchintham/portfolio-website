import skillsData from '../data/skills.json';

export default function Skills() {
  return (
    <section id="technologies" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Technologies I Use</h2>
        <p className="text-center text-gray-600 text-lg mb-12">I choose the right tools for your specific needs</p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {skillsData.technologies.map((tech) => (
            <div
              key={tech}
              className="flex items-center justify-center p-4 bg-gray-50 border border-gray-200 rounded-lg hover:shadow-md hover:border-blue-300 transition-all"
            >
              <span className="text-gray-900 font-medium text-center">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
