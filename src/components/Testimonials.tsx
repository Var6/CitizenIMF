const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      role: "Health Insurance Customer",
      content: "Excellent service and comprehensive coverage. Highly recommended!",
    },
    {
      name: "Jane Smith",
      role: "Motor Insurance Customer",
      content: "Quick claim settlement and great customer support.",
    },
    {
      name: "Mike Johnson",
      role: "Life Insurance Customer",
      content: "Peace of mind knowing my family is protected.",
    },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600 mb-4">{testimonial.content}</p>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-gray-500 text-sm">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials; 