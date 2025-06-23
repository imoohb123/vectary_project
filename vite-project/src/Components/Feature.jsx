import React from 'react';

const features = [
  {
    title: 'Collaboration',
    desc: 'Practical features for communication and sharing. Easy access to projects from any device. File cloning, in-design commenting, and easy embedding of the whole 3D scene into presentations or productivity tools.',
  },
  {
    title: 'Security',
    desc: 'Business workspaces enable company administrators to distribute and regulate user roles, project access, and other features that improve team productivity without compromising on security.',
  },
  {
    title: 'Organization',
    desc: 'Set up team workspaces per project, client or department. Scale up as you go. Store your designs and access them right from the canvas. Share project links with anyone. Make it your integrated 3D design hub.',
  },
];

const Feature = () => {
  return (
    <section className="py-16 px-6 bg-white">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Empower small and large teams
      </h2>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto text-left">
        {features.map((feature, index) => (
          <div key={index}>
            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="text-center mt-12">
        <button className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-3 rounded-lg font-medium">
          Discover more business solutions
        </button>
      </div>
    </section>
  );
};

export default Feature;
