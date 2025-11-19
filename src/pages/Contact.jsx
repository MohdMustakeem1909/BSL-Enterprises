import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  // Exact coordinates you provided
  const lat = 28.362739;
  const lng = 79.423189;

  const phone = "+91 7078634633";
  const email = "bsl.enterprises19@gmail.com";
  const address = "Ahmad ali k talab, 108 bagh, near nai masjid, Shyamjang, Bareilly, Uttar Pradesh 243001";

  // iframe embed using coordinates (centers and will show map at that location)
  const mapSrc = `https://www.google.com/maps?q=${lat},${lng}&z=18&output=embed`;

  // Open in Google Maps (better UX to open full map with marker)
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;

  // WhatsApp (international format without +)
  const whatsappNumberIntl = "917078634633";
  const waMessage = encodeURIComponent(`Hello, I'm contacting from the website. I'd like to enquire about BSL Enterprises located at ${address}`);
  const waUrl = `https://wa.me/${whatsappNumberIntl}?text=${waMessage}`;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <Header />

      <main className="flex-1 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-3">Contact Us</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visit us at our exact location, call, email or message on WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Info Card */}
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Get in Touch</h2>

              <div className="space-y-4 text-gray-700">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Address</h4>
                  <p className="text-sm">{address}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                  <a
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="text-indigo-600 hover:underline font-medium"
                  >
                    {phone}
                  </a>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                  <a
                    href={`mailto:${email}`}
                    className="text-indigo-600 hover:underline font-medium"
                  >
                    {email}
                  </a>
                </div>

                <div className="pt-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Business Hours</h4>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>Mon — Wed : 9:00 AM – 7:00 PM</li>
                    <li className="font-semibold">Thu : Closed</li>
                    <li>Fri — Sun : 9:00 AM – 7:00 PM</li>
                  </ul>
                </div>

                <div className="mt-6 flex gap-3">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition"
                  >
                    Chat on WhatsApp
                  </a>

                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-teal-800 hover:bg-teal-900 text-white rounded-lg font-medium transition"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Map card with exact pin centered */}
            <div className="bg-white p-2 rounded-2xl shadow-md overflow-hidden">
              <div className="w-full h-96 rounded-xl overflow-hidden border">
                <iframe
                  title="BSL Exact Location"
                  src={mapSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="mt-3 text-sm text-gray-600">
                <p>Coordinates: <span className="font-medium text-gray-800">{lat}, {lng}</span></p>
                <p className="mt-1">Click <a href={mapsUrl} target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">Open in Google Maps</a> to see the pin and directions.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
