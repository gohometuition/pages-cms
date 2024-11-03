export default function Home() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Find Your Perfect Tutor
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Expert home tutoring services for all subjects and levels
        </p>
        <div className="flex gap-4 justify-center">
          <a 
            href="/request-tutor" 
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Find a Tutor
          </a>
          <a 
            href="/become-tutor" 
            className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50"
          >
            Become a Tutor
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold mb-2">Qualified Tutors</h3>
              <p className="text-gray-600">
                All our tutors are carefully screened and verified
              </p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold mb-2">Flexible Schedule</h3>
              <p className="text-gray-600">
                Choose times that work best for you
              </p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold mb-2">All Subjects</h3>
              <p className="text-gray-600">
                From primary school to university level
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Learning?
          </h2>
          <p className="text-xl mb-8">
            Join thousands of students achieving their academic goals
          </p>
          <a 
            href="/request-tutor" 
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100"
          >
            Get Started Today
          </a>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            What Our Students Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="mb-4 text-gray-600">
                "My tutor helped me improve my grades significantly. 
                The personalized attention made all the difference."
              </p>
              <p className="font-semibold">- Sarah L.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="mb-4 text-gray-600">
                "Very professional and patient teaching style. 
                Highly recommended for anyone struggling with math."
              </p>
              <p className="font-semibold">- John K.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
