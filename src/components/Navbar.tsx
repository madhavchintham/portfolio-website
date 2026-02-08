interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const sections = ['home', 'skills', 'projects', 'contact'];

  return (
    <nav className="sticky top-0 bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-xl font-bold text-gray-900">Madhav Chintham</h1>
          <ul className="hidden sm:flex gap-8">
            {sections.map((section) => (
              <li key={section}>
                <button
                  onClick={() => onNavigate(section)}
                  className={`capitalize font-medium transition-colors ${
                    activeSection === section
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {section}
                </button>
              </li>
            ))}
          </ul>
          <div className="sm:hidden">
            <select
              value={activeSection}
              onChange={(e) => onNavigate(e.target.value)}
              className="p-2 border border-gray-300 rounded"
            >
              {sections.map((section) => (
                <option key={section} value={section}>
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
}
