interface HomeProps {
  onNavigate: (section: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 to-indigo-100 py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-3">
          Hi, I'm Madhav Chintham
        </h1>
        <p className="text-lg sm:text-2xl text-gray-600 mb-3">
          I build websites and apps that help your business grow
        </p>
        <p className="text-base sm:text-lg text-gray-600 mb-4 max-w-2xl mx-auto">
          I create custom websites, web applications, and AI solutions for small businesses and entrepreneurs. Whether you need to get online, automate tasks, or add smart features to your business — I make the tech work for you.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <button
            onClick={() => onNavigate('projects')}
            className="px-6 sm:px-8 py-2 sm:py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
          >
            View My Work
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="px-6 sm:px-8 py-2 sm:py-3 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors text-sm sm:text-base"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}
