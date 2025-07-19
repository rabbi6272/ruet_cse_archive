export function FeaturesList() {
  return (
    <>
      <div className="max-w-2xl mx-auto text-center">
{/*         <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-dark">
          We invest in the <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">world's potential</span>
        </h1> */}
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          Here we share study materials and essential resources provided by our humble seniors.  And guidelines for our future studies and job sectors.
        </p>
        <br />

        <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
          {[
            'Access every materials from one place',
            'Code Library to share your creativity',
            'Available PDF files: <span class="font-semibold text-gray-900 dark:text-white">10+</span>',
            'Code snippets: <span class="font-semibold text-gray-900 dark:text-white">10+</span>',
            'Alumni: <span class="font-semibold text-gray-900 dark:text-white">100+</span>',
          ].map((text, index) => (
            <li key={index} className="flex items-center space-x-3 rtl:space-x-reverse">
              <svg className="shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
              </svg>
              <span dangerouslySetInnerHTML={{ __html: text }} />
            </li>
          ))}
        </ul>
      </div>

      <br />
      <br />

      <div className="max-w-2xl mx-auto text-center">
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-dark md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            But Why?
          </span>{" "}
{/*           Scalable AI. */}
        </h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
         Let's answer some FAQ.</p>
        <br />

        <div className="space-y-4 max-w-2xl mx-auto">
          {/* Card 1 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700">
            <div className="p-5">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                How this site will be beneficial?
              </h3>
              <div className="text-gray-500 dark:text-gray-400 space-y-2">
                <p>
                  We all know that searching for a specific PDF file or YouTube video on the web can be frustrating and often disrupts our momentum and curiosity for learning. Here, we aim to gather everything you need to study in one place.
                <p>
                  Also you can search additional books in the Book Shelf as well.{" "}
                  <a href="/shelf" className="text-blue-600 dark:text-blue-500 hover:underline">
                    Book Shelf
                  </a>{" "}
                  and start developing websites even faster with components on top of Tailwind CSS.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700">
            <div className="p-5">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                How Code Library will benefit you?
              </h3>
              <div className="text-gray-500 dark:text-gray-400 space-y-2">
                <p>
                  This will boost the curiosity to learn something new and inspire the creativity to make something unique that stands out from the crowd.
                   </p>
                <p>
                  Check out the{" "}
                  <a href="/codelibrary" className="text-blue-600 dark:text-blue-500 hover:underline">
                     Code Library
                  </a>{" "}
                  Where learners debug..
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700">
            <div className="p-5">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
               Do you want to suggest any feature? or ask something? 
              </h3>
              <div className="text-gray-500 dark:text-gray-400 space-y-2">
                
                <p>
                  Feel free to contact with us.
                </p>
                {/* <ul className="ps-5 list-disc">
                  <li>
                    <a href="https://flowbite.com/pro/" className="text-blue-600 dark:text-blue-500 hover:underline">
                      Flowbite Pro
                    </a>
                  </li>
                  <li>
                    <a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600 dark:text-blue-500 hover:underline">
                      Tailwind UI
                    </a>
                  </li>
                </ul> */}
              
              </div>
            </div>
          </div>
        </div>
      </div>
        <br/>
                <br/>
    </>
  );
}
