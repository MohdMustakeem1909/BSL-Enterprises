import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  function handleSearch(e: { preventDefault: () => void; }) {
    e?.preventDefault();
    if (!query.trim()) return;
    navigate(`/search?q=${encodeURIComponent(query)}`);
    setQuery("");
    setIsOpen(false);
  }

  return (
    <nav className="bg-teal-900 text-white shadow-sm sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo */}
          <div className="flex items-center gap-4">
            <NavLink to="/" className="text-2xl font-bold tracking-tight">
              BSL
            </NavLink>
            <span className="hidden sm:inline-block text-sm text-white mt-1">
              Building Supplies Limited
            </span>
          </div>

          {/* Center: Search (desktop) */}
          <div className="hidden md:flex flex-1 justify-center px-4">
            <form
              onSubmit={handleSearch}
              className="w-full max-w-2xl"
              role="search"
              aria-label="Site search"
            >
              <div className="relative">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search products, categories, or SKUs..."
                  className="w-full rounded-lg bg-white placeholder-gray-600 text-gray-700 py-2.5 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-teal-300 transition"
                />
                <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                  </svg>
                </div>
                <button
                  type="submit"
                  aria-label="Search"
                  className="absolute right-1 top-1/2 -translate-y-1/2 bg-teal-900 text-white px-3 py-1.5 rounded-md hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-400"
                >
                  Search
                </button>
              </div>
            </form>
          </div>

          {/* Right: Links & CTA */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLink to="/" end className={({ isActive }) => isActive ? "text-white font-medium" : "text-sm hover:text-gray-200"}>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? "text-white font-medium" : "text-sm hover:text-gray-200"}>
              About
            </NavLink>
            <NavLink to="/service" className={({ isActive }) => isActive ? "text-white font-medium" : "text-sm hover:text-gray-200"}>
              Services
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "text-white font-medium" : "text-sm hover:text-gray-200"}>
              Contact
            </NavLink>

            
          </div>

          {/* Mobile: hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu + search */}
      {isOpen && (
        <div className="md:hidden bg-gray-700 border-t border-gray-600 px-4 py-3 space-y-3">
          <form onSubmit={handleSearch} className="w-full" role="search" aria-label="Mobile search">
            <div className="relative">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products, categories, or SKUs..."
                className="w-full rounded-md bg-gray-600 placeholder-gray-300 text-white py-2 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                </svg>
              </div>
                <button
                  type="submit"
                  aria-label="Search mobile"
                  className="absolute right-1 top-1/2 -translate-y-1/2 bg-teal-900 text-white px-3 py-1 rounded-md hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                >
                  Go
                </button>
            </div>
          </form>

          <div className="flex flex-col">
            <NavLink to="/" end className="py-2 text-sm hover:text-gray-200" onClick={() => setIsOpen(false)}>Home</NavLink>
            <NavLink to="/about" className="py-2 text-sm hover:text-gray-200" onClick={() => setIsOpen(false)}>About</NavLink>
            <NavLink to="/service" className="py-2 text-sm hover:text-gray-200" onClick={() => setIsOpen(false)}>Services</NavLink>
            <NavLink to="/contact" className="py-2 text-sm hover:text-gray-200" onClick={() => setIsOpen(false)}>Contact</NavLink>

            
          </div>
        </div>
      )}
    </nav>
  );
}
