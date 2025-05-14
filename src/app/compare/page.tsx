export default function ComparePage() {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Compare Insurance Plans</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Add plan comparison cards here */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Basic Plan</h2>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-600">
                <span className="mr-2">✓</span> Basic Coverage
              </li>
              <li className="flex items-center text-gray-600">
                <span className="mr-2">✓</span> 24/7 Support
              </li>
              <li className="flex items-center text-gray-600">
                <span className="mr-2">✓</span> Online Claims
              </li>
            </ul>
          </div>
          {/* Add more plan cards */}
        </div>
      </div>
    </div>
  );
} 