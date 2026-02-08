import SkillSection from '../components/SkillSection';
import skillsData from '../data/skills.json';

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Skills</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.categories.map((category) => (
            <SkillSection key={category.name} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
