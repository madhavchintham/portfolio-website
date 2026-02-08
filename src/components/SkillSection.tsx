import { SkillCategory } from '../types/index';

interface SkillSectionProps {
  category: SkillCategory;
}

export default function SkillSection({ category }: SkillSectionProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{category.name}</h3>
      <ul className="space-y-2">
        {category.skills.map((skill) => (
          <li key={skill} className="flex items-center text-gray-700">
            <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
