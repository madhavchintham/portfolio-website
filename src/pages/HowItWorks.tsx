interface HowItWorksProps {
  onNavigate: (section: string) => void;
}

export default function HowItWorks({ onNavigate }: HowItWorksProps) {
  const steps = [
    {
      number: 1,
      title: "Let's Talk",
      description: 'Tell me about your business and what you need. No tech jargon, just a friendly conversation.'
    },
    {
      number: 2,
      title: 'I Build It',
      description: 'I create your solution and keep you updated every step of the way.'
    },
    {
      number: 3,
      title: 'You Launch',
      description: 'Your new website or app goes live, and I make sure everything works perfectly.'
    },
    {
      number: 4,
      title: 'Ongoing Support',
      description: 'I\'m here whenever you need updates, fixes, or improvements.'
    }
  ];

  return (
    <section id="howitworks" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">How It Works</h2>
        
        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Step Card */}
              <div className="bg-gray-50 rounded-lg p-6 sm:p-8 h-full border-l-4 border-blue-600">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{step.description}</p>
              </div>
              
              {/* Connector Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute -right-4 top-1/2 transform -translate-y-1/2">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 sm:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Ready to Get Started?</h3>
          <p className="text-base sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Whether you have a clear idea or just know you need something better, let's talk about how I can help your business grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 sm:px-8 py-2 sm:py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
