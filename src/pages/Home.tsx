interface HomeProps {
  onNavigate: (section: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
          Hi, I'm Madhav Chintham
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 mb-8">
          Software Engineer crafting elegant solutions to complex problems
        </p>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          I'm passionate about writing clean, maintainable code and building products that make an impact. I'm open to exciting opportunities in software development, whether it's full-stack projects, backend systems, or innovative AI solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => onNavigate('projects')}
            className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            View My Work
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}
