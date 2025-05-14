import Link from 'next/link';

const CallToAction = () => {
  return (
    <div className="bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-blue-100 mb-8">
            Get your insurance quote today and protect what matters most
          </p>
          <Link
            href="/compare"
            className="bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-50"
          >
            Get a Quote Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CallToAction; 