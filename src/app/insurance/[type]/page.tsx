import { notFound } from 'next/navigation';

const insuranceTypes = {
  health: {
    title: 'Health Insurance',
    description: 'Comprehensive health coverage for you and your family',
    features: [
      'Hospitalization coverage',
      'Pre and post hospitalization expenses',
      'Day care procedures',
      'Ambulance charges',
      'Critical illness coverage',
    ],
  },
  motor: {
    title: 'Motor Insurance',
    description: 'Protect your vehicle with our comprehensive motor insurance plans',
    features: [
      'Third-party liability coverage',
      'Own damage coverage',
      'Personal accident cover',
      'Roadside assistance',
      'Zero depreciation cover',
    ],
  },
  life: {
    title: 'Life Insurance',
    description: 'Secure your family\'s future with our life insurance plans',
    features: [
      'Death benefit',
      'Maturity benefit',
      'Tax benefits',
      'Riders available',
      'Flexible premium payment options',
    ],
  },
  travel: {
    title: 'Travel Insurance',
    description: 'Travel worry-free with our comprehensive travel insurance',
    features: [
      'Medical emergencies',
      'Trip cancellation',
      'Lost baggage',
      'Flight delays',
      '24/7 assistance',
    ],
  },
};

export default function InsurancePage({ params }: { params: { type: string } }) {
  const insuranceType = insuranceTypes[params.type as keyof typeof insuranceTypes];

  if (!insuranceType) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            {insuranceType.title}
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            {insuranceType.description}
          </p>
        </div>

        <div className="mt-16">
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Key Features
            </h2>
            <ul className="space-y-4">
              {insuranceType.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="h-6 w-6 text-green-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 text-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-700">
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 