import { useState } from "react";
export default function Footer() {
  
  return (
    <footer className="bg-gray-800 text-white py-10 mt-12">
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex flex-wrap justify-between">
          <div className="flex-1 min-w-48 mb-5">
            <h3 className="mb-4 text-lg font-medium">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Shipping Info
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Returns
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Warranty
                </a>
              </li>
            </ul>
          </div>

          <div className="flex-1 min-w-48 mb-5">
            <h3 className="mb-4 text-lg font-medium">About</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Our Story
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Press
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Sustainability
                </a>
              </li>
            </ul>
          </div>

          <div className="flex-1 min-w-48 mb-5">
            <h3 className="mb-4 text-lg font-medium">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Newsletter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Social Media
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Community
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-5 mt-5 text-center text-sm text-gray-400">
          &copy; 2025 TechStore. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
