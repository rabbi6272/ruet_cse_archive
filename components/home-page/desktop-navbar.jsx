export function DesktopNavbar() {
  return (
    <div className="desktop-menu hidden md:block">
      <div className="ml-10 flex items-baseline space-x-8">
        {/* <!-- Nav Item 1 --> */}
        <div className="nav-item relative">
          <button className="text-gray-700 hover:text-indigo-600 hover:bg-gray-200 px-3.5 py-2.5 rounded-md text-sm font-medium transition-all duration-500 flex items-center">
            Resources
            <i className="fas fa-chevron-down ml-1 text-xs"></i>
          </button>
          <div className="dropdown absolute left-0 mt-3 w-48 rounded-md shadow-lg bg-white z-50">
            <a
              href="#"
              className="block w-full px-4 py-2 rounded text-sm text-gray-700 hover:bg-gray-200 hover:text-indigo-600"
            >
              1<sup>st</sup> year
            </a>
            <a
              href="#"
              className="block w-full px-4 py-2 rounded text-sm text-gray-700 hover:bg-gray-200 hover:text-indigo-600"
            >
              2<sup>nd</sup> Year
            </a>
            <a
              href="#"
              className="block w-full px-4 py-2 rounded text-sm text-gray-700 hover:bg-gray-200 hover:text-indigo-600"
            >
              3<sup>rd</sup> Year
            </a>
            <a
              href="#"
              className="block w-full px-4 py-2 rounded text-sm text-gray-700 hover:bg-gray-200 hover:text-indigo-600"
            >
              4<sup>th</sup> Year
            </a>
          </div>
        </div>

        {/* <!-- Nav Item 2 --> */}
        <div className="nav-item relative">
          <button className="text-gray-700 hover:text-indigo-600 hover:bg-gray-200 px-3.5 py-2.5 rounded-md text-sm font-medium 5 flex items-center">
            Book shelf
            <i className="fas fa-chevron-down ml-1 text-xs"></i>
          </button>
          <div className="dropdown absolute left-0 mt-3 w-56 rounded-md shadow-lg bg-white z-50">
            <a
              href="#"
              className="block w-full px-4 py-2 rounded text-sm text-gray-700 hover:bg-gray-200 hover:text-indigo-600"
            >
              Physics
            </a>
            <a
              href="#"
              className="block px-4 py-2 rounded text-sm text-gray-700 hover:bg-gray-200 hover:text-indigo-600"
            >
              Chemistry
            </a>
            <a
              href="#"
              className="block px-4 py-2 rounded text-sm text-gray-700 hover:bg-gray-200 hover:text-indigo-600"
            >
              Maths
            </a>
            <a
              href="#"
              className="block px-4 py-2 rounded text-sm text-gray-700 hover:bg-gray-200 hover:text-indigo-600"
            >
              CSE
            </a>
            <a
              href="#"
              className="block px-4 py-2 rounded text-sm text-gray-700 hover:bg-gray-200 hover:text-indigo-600"
            >
              Hardware
            </a>
            <a
              href="#"
              className="block px-4 py-2 rounded text-sm text-gray-700 hover:bg-gray-200 hover:text-indigo-600"
            >
              Productivity
            </a>
            <a
              href="#"
              className="block px-4 py-2 rounded text-sm text-gray-700 hover:bg-gray-200 hover:text-indigo-600"
            >
              English
            </a>
          </div>
        </div>

        {/* <!-- Nav Item 3 --> */}
        <div className="nav-item relative">
          <button className="text-gray-700 hover:text-indigo-600 hover:bg-gray-200 px-3.5 py-2.5 rounded-md text-sm font-medium 5 flex items-center">
            Code Library
          </button>
        </div>

        {/* <!-- Nav Item 4 --> */}
        <div className="nav-item relative">
          <button className="text-gray-700 hover:text-indigo-600 hover:bg-gray-200 px-3.5 py-2.5 rounded-md text-sm font-medium 5 flex items-center">
            Global Ruet
          </button>
        </div>

        {/* <!-- Nav Item 5 --> */}
        <div className="nav-item relative">
          <button className="text-gray-700 hover:text-indigo-600 hover:bg-gray-200 px-3.5 py-2.5 rounded-md text-sm font-medium 5 flex items-center">
            Informations
            {/* <!-- <i className="fas fa-chevron-down ml-1 text-xs"></i> --> */}
          </button>
        </div>

        {/* <!-- Nav Item 6 --> */}
        <div className="nav-item relative">
          <button className="text-gray-700 hover:text-indigo-600 hover:bg-gray-200 px-3.5 py-2.5 rounded-md text-sm font-medium transition-all duration-500 flex items-center">
            Contact & Help
            <i className="fas fa-chevron-down ml-1 text-xs"></i>
          </button>
          <div className="dropdown absolute left-0 mt-3 w-48 rounded-md shadow-lg bg-white z-50">
            <a
              href="#"
              className="block px-4 py-2 rounded text-sm text-gray-700 hover:bg-gray-200 hover:text-indigo-600"
            >
              Email
            </a>
            <a
              href="#"
              className="block px-4 py-2 rounded text-sm text-gray-700 hover:bg-gray-200 hover:text-indigo-600"
            >
              Official Website
            </a>
            <a
              href="#"
              className="block px-4 py-2 rounded text-sm text-gray-700 hover:bg-gray-200 hover:text-indigo-600"
            >
              Facebook Page 1
            </a>
            <a
              href="#"
              className="block px-4 py-2 rounded text-sm text-gray-700 hover:bg-gray-200 hover:text-indigo-600"
            >
              Facebook Page 2
            </a>
            <a
              href="#"
              className="block px-4 py-2 rounded text-sm text-gray-700 hover:bg-gray-200 hover:text-indigo-600"
            >
              Facebook Page 3
            </a>
            <a
              href="#"
              className="block px-4 py-2 rounded text-sm text-gray-700 hover:bg-gray-200 hover:text-indigo-600"
            >
              About developers
            </a>
            <a
              href="#"
              className="block px-4 py-2 rounded text-sm text-gray-700 hover:bg-gray-200 hover:text-indigo-600"
            >
              Why this?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
