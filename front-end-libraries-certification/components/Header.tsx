import React from "react";

type Props = {};

function Header({}: Props) {
  return (
    <div>
      <header aria-label="Site Header" className="bg-white dark:bg-gray-900">
        <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
          

          <div className="flex flex-1 items-center justify-end md:justify-between">
            <nav aria-label="Site Nav" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a
                    className="relative font-medium text-yellow-300 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-yellow-600 before:transition hover:before:scale-x-100"
                    href=""
                  >
                    View course
                  </a>
                </li>

                <li>
                  <a
                    className="relative font-medium text-yellow-300 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-yellow-600 before:transition hover:before:scale-x-100"
                    href=""
                  >
                    View Certificate
                  </a>
                </li>

                <li>
                  <a
                    className="relative font-medium text-yellow-300 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-yellow-600 before:transition hover:before:scale-x-100"
                    href="/"
                  >
                    History
                  </a>
                </li>

                <li>
                  <a
                    className="relative font-medium text-yellow-300 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-yellow-600 before:transition hover:before:scale-x-100"
                    href=""
                  >
                    My Blogs
                  </a>
                </li>
                <li>
                  <a
                    className="relative font-medium text-yellow-300 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-yellow-600 before:transition hover:before:scale-x-100"
                    href=""
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    className="relative font-medium text-yellow-300 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-yellow-600 before:transition hover:before:scale-x-100"
                    href=""
                  >
                    Resume
                  </a>
                </li>
              </ul>
              
            </nav>

           

              <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75 md:hidden">
                <span className="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        
      </header>
    </div>
  );
}

export default Header;
