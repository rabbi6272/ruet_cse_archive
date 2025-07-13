import { useState } from 'react';

export function CardGrid() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const cards = [
    {
      id: 1,
      title: "1st Year Resources",
      description: "Resources for first year students including syllabus, books, and study materials.",
      ordinal: "st"
    },
    {
      id: 2,
      title: "2nd Year Resources",
      description: "Resources for second year students including lab manuals and project ideas.",
      ordinal: "nd"
    },
    {
      id: 3,
      title: "3rd Year Resources",
      description: "Resources for third year students including internship opportunities.",
      ordinal: "rd"
    },
    {
      id: 4,
      title: "4th Year Resources",
      description: "Resources for final year students including placement preparation.",
      ordinal: "th"
    },
    {
      id: 5,
      title: "Higher Studies & Internship Details",
      description: "Information about postgraduate studies and internship opportunities.",
    }
  ];

  return (
    <>
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-dark">
          Regain{' '}
          <mark className="px-2 text-white bg-blue-600 rounded-sm dark:bg-blue-500">
            control
          </mark>{' '}
          over your days
        </h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.
        </p>
      </div>
      <br/>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 p-6">
        {cards.map((card) => (
          <div key={card.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
            </a>
            <div className="p-5 relative">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {card.title.includes("Higher") ? card.title : `${card.id}<sup>${card.ordinal}</sup> Year Resources`}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {card.description}
              </p>
              
              {/* Dropdown Button */}
              <button 
                onClick={() => toggleDropdown(card.id)}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Options
                <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              {openDropdown === card.id && (
                <div className="z-10 absolute mt-1 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">View Details</a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Download</a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Share</a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
