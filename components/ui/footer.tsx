export function Footer() {
  return (
    <footer className="border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">V</span>
            </div>
            <span className="text-white font-semibold">Veredicto</span>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm mb-2">
              © 2024 Veredicto, Inc. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <button
                type="button"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </button>
              <button
                type="button"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </button>
              <button
                type="button"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
