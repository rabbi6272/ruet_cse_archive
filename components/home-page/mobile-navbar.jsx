export function MobileNavbar() {
  return (
    <div id="mobile-menu" className="md:hidden hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        {/* <!-- Mobile Nav Item 1 --> */}
        <div className="relative">
          <button className="mobile-dropdown-btn text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium w-full text-left flex justify-between items-center">
            Products
            <i className="fas fa-chevron-down text-sm"></i>
          </button>
          <div className="mobile-dropdown hidden pl-4">
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-indigo-600"
            >
              Product 1
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-indigo-600"
            >
              Product 2
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-indigo-600"
            >
              Product 3
            </a>
          </div>
        </div>

        {/* <!-- Mobile Nav Item 2 --> */}
        <div className="relative">
          <button className="mobile-dropdown-btn text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium w-full text-left flex justify-between items-center">
            Solutions
            <i className="fas fa-chevron-down text-sm"></i>
          </button>
          <div className="mobile-dropdown hidden pl-4">
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-indigo-600"
            >
              Solution for Business
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-indigo-600"
            >
              Solution for Education
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-indigo-600"
            >
              Solution for Healthcare
            </a>
          </div>
        </div>

        {/* <!-- Mobile Nav Item 3 --> */}
        <div className="relative">
          <button className="mobile-dropdown-btn text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium w-full text-left flex justify-between items-center">
            Resources
            <i className="fas fa-chevron-down text-sm"></i>
          </button>
          <div className="mobile-dropdown hidden pl-4">
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-indigo-600"
            >
              Documentation
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-indigo-600"
            >
              Tutorials
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-indigo-600"
            >
              API Reference
            </a>
          </div>
        </div>

        {/* <!-- Mobile Nav Item 4 --> */}
        <div className="relative">
          <button className="mobile-dropdown-btn text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium w-full text-left flex justify-between items-center">
            Community
            <i className="fas fa-chevron-down text-sm"></i>
          </button>
          <div className="mobile-dropdown hidden pl-4">
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-indigo-600"
            ></a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-indigo-600"
            >
              Pro
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-indigo-600"
            >
              Enterprise
            </a>
          </div>
        </div>

        {/* <!-- Mobile Nav Item 5 --> */}
        <div className="relative">
          <button className="mobile-dropdown-btn text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium w-full text-left flex justify-between items-center">
            Company
            <i className="fas fa-chevron-down text-sm"></i>
          </button>
          <div className="mobile-dropdown hidden pl-4">
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-indigo-600"
            >
              About Us
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-indigo-600"
            >
              Careers
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-indigo-600"
            >
              Contact
            </a>
          </div>
        </div>

        {/* <!-- Mobile Nav Item 6 --> */}
        <div className="relative">
          <button className="mobile-dropdown-btn text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium w-full text-left flex justify-between items-center">
            Support
            <i className="fas fa-chevron-down text-sm"></i>
          </button>
          <div className="mobile-dropdown hidden pl-4">
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-indigo-600"
            >
              Help Center
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-indigo-600"
            >
              Community
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-indigo-600"
            >
              Status
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
