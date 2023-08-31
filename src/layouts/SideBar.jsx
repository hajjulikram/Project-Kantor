"use client";

import React, { useState, useEffect } from "react";
import Icon from "@mdi/react";
import { mdiMenu, mdiBackburger, mdiPlayCircle } from "@mdi/js";
import { initDropdowns, initAccordions } from "flowbite";
import dataExample from "@/data/dataExample.json";
import Link from "next/link";

const SideBar = ({ title, children }) => {
  const [showSidebar, setShowSidebar] = useState(true);
  useEffect(() => {
    if (window.innerWidth < 900) {
      setShowSidebar(false);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth < 900) {
        setShowSidebar(false);
      } else {
        setShowSidebar(true);
      }
    });
    setTimeout(() => {
      initDropdowns();
      initAccordions();
    }, 1000);
  }, []);

  const handleCloseSidebar = () => {
    if (window.innerWidth > 1024) return;
    setShowSidebar(false);
  };

  return (
    <>
      <nav className="sidebar bg-[#1B8CCE] text-white font-bold w-full h-12 fixed z-50 px-6 flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <button onClick={() => setShowSidebar(!showSidebar)}>
            <Icon
              path={`${showSidebar ? mdiBackburger : mdiMenu}`}
              size={1}
              className="w-6 h-6"
            />
          </button>
          <h1>Hajul Ikram</h1>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="font-semibold hidden sm:inline">
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
        </div>
      </nav>
      <aside
        id="logo-sidebar"
        className={`pt-12 fixed top-0 z-40 left-0 w-64 shadow-md shadow-black h-screen transition-transform duration-1000 ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className=" flex gap-4 items-center px-5 my-5 sticky top-0 shadow-sm border-b">
          <div>
            <img src="/vercel.svg" alt="" className="h-16 w-16 rounded-full" />
          </div>
          <div className="w-2/3">
            <h1 className="font-bold">Playlist Title</h1>
            <p className="text-gray-600 text-xs">Description Title</p>
          </div>
        </div>

        <div className="h-full px-5 -mt-5 py-5 pb-4 overflow-y-auto">
          <div className="text-gray-600">
            <h2 className="text-lg font-bold">Video</h2>
            <div
              id="accordion-flush"
              data-accordion="collapse"
              data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
              data-inactive-classes="text-gray-500 dark:text-gray-400"
            >
              <>
                <h2 id="accordion-flush-heading-1">
                  <button
                    type="button"
                    className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                    data-accordion-target="#accordion-flush-body-1"
                    aria-expanded="true"
                    aria-controls="accordion-flush-body-1"
                  >
                    <span>Judul Video</span>
                    <svg
                      data-accordion-icon
                      className="w-3 h-3 rotate-180 shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5 5 1 1 5"
                      />
                    </svg>
                  </button>
                </h2>
                <div
                  id="accordion-flush-body-1"
                  className="hidden"
                  aria-labelledby="accordion-flush-heading-1"
                >
                  <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                    <ul className="flex flex-col gap-2">
                      {dataExample.videos &&
                        dataExample.videos.map((item) => (
                          <Link href={`/playlist/video/${item.videoId}`}>
                            <li
                              className=" flex gap-2 items-center text-black py-3 hover:text-[#1B8CCE] cursor-pointer"
                              key={item?.videoId}
                            >
                              <Icon
                                path={mdiPlayCircle}
                                size={2}
                                className="h-10 w-10"
                              />
                              {item?.videoName}
                            </li>
                          </Link>
                        ))}
                    </ul>
                  </div>
                </div>
              </>

              <h2 id="accordion-flush-heading-2">
                <button
                  type="button"
                  className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                  data-accordion-target="#accordion-flush-body-2"
                  aria-expanded="false"
                  aria-controls="accordion-flush-body-2"
                >
                  <span>Is there a Figma file available?</span>
                  <svg
                    data-accordion-icon
                    className="w-3 h-3 rotate-180 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-flush-body-2"
                className="hidden"
                aria-labelledby="accordion-flush-heading-2"
              >
                <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Flowbite is first conceptualized and designed using the
                    Figma software so everything you see in the library has a
                    design equivalent in our Figma file.
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Check out the{" "}
                    <a
                      href="https://flowbite.com/figma/"
                      className="text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Figma design system
                    </a>{" "}
                    based on the utility classNamees from Tailwind CSS and
                    components from Flowbite.
                  </p>
                </div>
              </div>
              <h2 id="accordion-flush-heading-3">
                <button
                  type="button"
                  className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                  data-accordion-target="#accordion-flush-body-3"
                  aria-expanded="false"
                  aria-controls="accordion-flush-body-3"
                >
                  <span>
                    What are the differences between Flowbite and Tailwind UI?
                  </span>
                  <svg
                    data-accordion-icon
                    className="w-3 h-3 rotate-180 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-flush-body-3"
                className="hidden"
                aria-labelledby="accordion-flush-heading-3"
              >
                <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    The main difference is that the core components from
                    Flowbite are open source under the MIT license, whereas
                    Tailwind UI is a paid product. Another difference is that
                    Flowbite relies on smaller and standalone components,
                    whereas Tailwind UI offers sections of pages.
                  </p>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    However, we actually recommend using both Flowbite, Flowbite
                    Pro, and even Tailwind UI as there is no technical reason
                    stopping you from using the best of two worlds.
                  </p>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Learn more about these technologies:
                  </p>
                  <ul className="pl-5 text-gray-500 list-disc dark:text-gray-400">
                    <li>
                      <a
                        href="https://flowbite.com/pro/"
                        className="text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Flowbite Pro
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://tailwindui.com/"
                        rel="nofollow"
                        className="text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Tailwind UI
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>

      <div
        className={` pt-12 ${
          showSidebar ? "lg:ml-64" : "ml-0"
        } transition-all duration-1000 ease-in-out`}
      >
        {title && (
          <div className="h-16 flex items-center md:px-10 px-5 font-bold text-2xl border-b-2 border-itqan-green-50">
            {title}
          </div>
        )}

        <div className="p-7 bg-[#F6F8FD]">{children}</div>
      </div>
    </>
  );
};

export default SideBar;
