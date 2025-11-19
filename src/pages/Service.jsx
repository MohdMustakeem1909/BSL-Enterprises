import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Service() {
  const services = [
    { id: 1, title: "Bulk Material Supply", desc: "Steel, cement, aggregates and more — supplied in bulk for projects." },
    { id: 2, title: "Custom Fabrication", desc: "Custom metalwork and fabrication to your project specs." },
    { id: 3, title: "Logistics & Delivery", desc: "Coordinated freight and delivery across India." },
    { id: 4, title: "Installation Support", desc: "On-site consultation and installation assistance." },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <Header />

      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-6">Services</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s) => (
              <div key={s.id} className="bg-white rounded-lg shadow p-6">
                <h3 className="font-semibold text-lg">{s.title}</h3>
                <p className="text-gray-600 mt-2">{s.desc}</p>
                
              </div>
            ))}
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-3">How we work</h2>
            <ol className="list-decimal pl-5 space-y-2 text-gray-700">
              <li>Understand project requirements & volume</li>
              <li>Provide a competitive quote & lead-time estimate</li>
              <li>Arrange logistics & timely delivery</li>
              <li>After-sales support and repeat order handling</li>
            </ol>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
