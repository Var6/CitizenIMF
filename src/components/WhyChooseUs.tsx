const WhyChooseUs = () => {
  const features = [
    {
      title: "24/7 Support",
      description: "Round-the-clock customer service for all your insurance needs"
    },
    {
      title: "Easy Claims",
      description: "Quick and hassle-free claim settlement process"
    },
    {
      title: "Best Rates",
      description: "Competitive premiums with maximum coverage"
    },
    {
      title: "Expert Guidance",
      description: "Professional advice to choose the right insurance plan"
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose CitizenIMF</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6">
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs; 