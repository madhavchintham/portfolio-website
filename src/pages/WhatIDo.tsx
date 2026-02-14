export default function WhatIDo() {
  const services = [
    {
      id: 1,
      title: 'Website Development',
      description: 'Get a professional website that looks great and works perfectly on all devices. From simple landing pages to full business websites.'
    },
    {
      id: 2,
      title: 'Web Applications',
      description: 'Custom tools built specifically for your business needs — booking systems, dashboards, customer portals, and more.'
    },
    {
      id: 3,
      title: 'AI Integration',
      description: 'Add smart features to your business with AI chatbots, automation, and data analysis tools that save you time and money.'
    },
    {
      id: 4,
      title: 'Support & Maintenance',
      description: 'Keep your website running smoothly with regular updates, fixes, and improvements. I\'m here when you need me.'
    }
  ];

  return (
    <section id="whatido" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">What I Do</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-md p-6 sm:p-8 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{service.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
