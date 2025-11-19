import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Search from "./pages/Search";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/search" element={<Search />} />
        <Route
          path="*"
          element={
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
              <div className="text-center p-6">
                <h1 className="text-3xl font-bold mb-2">404 — Page not found</h1>
                <p className="text-gray-600 mb-4">The page you requested doesn’t exist.</p>
                <a href="/" className="inline-block px-4 py-2 bg-indigo-600 text-white rounded">Go home</a>
              </div>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
