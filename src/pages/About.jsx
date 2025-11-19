import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <Header />

      <main className="flex-1">
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold mb-4">About BSL</h1>
            <p className="text-gray-700 mb-6">
              BSL (Building Supplies Limited) has been supplying high-quality building materials to contractors and manufacturers
              for over 30 years. Our mission is to deliver durable, reliable products with transparent pricing and exceptional support.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Our Values</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Quality & consistency</li>
                  <li>Customer-first approach</li>
                  <li>Timely delivery and logistics</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Our Capabilities</h3>
                <p className="text-gray-700">
                  Bulk sourcing, custom orders, logistics coordination, and a dedicated support team for project planning and execution.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-4">Founder</h2>
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-6">

              <div className="bg-gray-100 p-4 rounded shadow text-center">
                <img
                  src="/assets/11.JPG"
                  alt="Faraz Alvi — Founder"
                  className="h-32 w-32 rounded-full mx-auto mb-3 object-cover border-2 border-gray-100 shadow-sm"
                  onError={(e) => { e.currentTarget.src = '/assets/placeholder.png'; }}
                />
                <div className="font-semibold">Faraz Alvi</div>
                <div className="text-sm text-gray-500">Founder</div>
              </div>

              
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
