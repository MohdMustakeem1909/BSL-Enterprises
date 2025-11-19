import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-teal-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo + About */}
          <div>
            <h2 className="text-2xl font-bold mb-3">BSL</h2>
            <p className="text-sm leading-relaxed">
              BSL (Building Supplies Limited) is your trusted partner for
              high-quality construction and industrial products — designed to last.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    isActive ? "font-semibold " : "hover:text-gray-100"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "font-semibold " : "hover:text-gray-100"
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/service"
                  className={({ isActive }) =>
                    isActive ? "font-semibold " : "hover:text-gray-100"
                  }
                >
                  Service
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "font-semibold " : "hover:text-gray-100"
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                📍 108 Bagh Ahmad Ali Ka Talab, Gangapur, Bareilly, UP, India
              </li>
              <li>
                📞{" "}
                <a
                  href="tel:+917078634633"
                  className="hover:underline hover:text-gray-100"
                >
                  +91 7078634633
                </a>
              </li>
              <li>
                ✉️{" "}
                <a
                  href="mailto:enterprisesbsl470@gmail.com"
                  className="hover:underline hover:text-gray-100"
                >
                  enterprisesbsl470@gmail.com
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex space-x-5 mt-5">
              {/* Facebook placeholder */}
              <a
                href="https://www.facebook.com/share/1BoFwoC5b4/"
                className="hover:text-gray-100 transition"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12a10 10 0 10-11.5 9.95V15.4h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 2 .1v2.3h-1.2c-1 0-1.3.6-1.3 1.3v1.7h2.5l-.4 3h-2v6.55A10 10 0 0022 12z" />
                </svg>
              </a>

              {/* Instagram link */}
              <a
                href="https://www.instagram.com/faraz.bsl?igsh=dzEwcHFjNHdjcTB3"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-100 transition"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.6 0 3 1.4 3 3v10c0 1.6-1.4 3-3 3H7c-1.6 0-3-1.4-3-3V7c0-1.6 1.4-3 3-3h10zm-5 3.5A5.5 5.5 0 1012 17a5.5 5.5 0 000-11zM12 8a4 4 0 110 8 4 4 0 010-8zm5.5-.9a1.1 1.1 0 110 2.2 1.1 1.1 0 010-2.2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white mt-10 pt-6 text-sm text-center">
          <p>
            © {new Date().getFullYear()} BSL Enterprises. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
