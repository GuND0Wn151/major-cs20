import React from "react";

function Navbar() {
  return (
    <nav className=" items-center  flex justify-evenly bg-indigo-600 p-6 h-16">
      <div class="   text-white mr-6 ">
        <p className="text-lg font-semibold">Testing Title</p>
      </div>

      <div class=" basis-2/5">
        <div class=" flex items-center h-10 rounded-lg  w-100 focus-within:shadow-lg bg-white overflow-hidden">
          <div class="grid place-items-center h-full w-12 text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <input
            class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
            type="text"
            id="search"
            placeholder="Search something.."
          />
        </div>
      </div>

      <div className="flex item-center justify-between ">
        <a href="/" className="lg-inline-block  font-serif mr-6">
          Home
        </a>
        <a href="/" className="lg-inline-block font-serif mr-6 ">
          Blogs
        </a>
        <a href="/" className="lg-inline-block font-serif mr-6">
          Trending
        </a>
        <a href="/" className="lg-inline-block font-serif mr-6">
          Profile
        </a>
      </div>
    </nav>
  );
}

export default Navbar;