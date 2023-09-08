"use client";

import React, { useState, useEffect } from "react";
import Icon from "@mdi/react";
import { mdiMenu, mdiFilePdfBox, mdiBackburger, mdiPlayCircle } from "@mdi/js";
import { initDropdowns, initAccordions } from "flowbite";
import dataExample from "@/data/dataExample.json";
import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { setVideoLink, setVideoName } from "@/stores/reducers/videoSlice";
import Logo from "../../public/assets/images/Logo NAS.png";
import logoSidebar from "../../public/assets/images/Asset-1.png";

const SideBar = ({ title, children }) => {
  const video_link = useSelector((state) => state.video.videoLink);
  const dispatch = useDispatch();
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
    }, 1000);
    initAccordions();
  }, []);

  // const handleCloseSidebar = (name, link) => {
  //   if (window.innerWidth > 1024) return;
  //   setShowSidebar(false);

  // };

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
          {/* <h1>Hajjul Ikram</h1> */}
          <Link href={"/"}>
            <Image
              className="ml-3"
              src={Logo}
              alt="NAS"
              width={80}
              height={80}
            />
          </Link>
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
        className={`pt-12 fixed top-0 z-40 bg-white left-0 w-64 shadow-md shadow-black h-screen transition-transform duration-1000 ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className=" flex gap-4 items-center px-5 my-5 sticky top-0 shadow-sm border-b">
          <div className="mb-2">
            <Image
              src={logoSidebar}
              alt=""
              className="h-14 w-16 rounded-full"
            />
          </div>
          <div className="w-2/3">
            <h1 className="font-bold">Playlist NAS</h1>
            <p className="text-gray-600 text-xs">Tutorial Playlist</p>
          </div>
        </div>

        <div className="h-full px-5 -mt-5 py-5 pb-4 overflow-y-auto">
          <div className="text-black">
            {/* <h2 className="text-lg font-bold">Video</h2> */}
            <div
              id="accordion-flush"
              data-accordion="collapse"
              data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
              data-inactive-classes="text-gray-500 dark:text-gray-400 my-5"
            >
              {dataExample &&
                dataExample.videoData.map((item) => (
                  <>
                    <h2
                      id={`accordion-flush-heading-${item.playlistId}`}
                      key={item.playlistId}
                    >
                      <button
                        type="button"
                        className="flex px-3 !bg-[#E5E9F2] rounded-xl items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                        data-accordion-target={`#accordion-flush-body-${item.playlistId}`}
                        aria-expanded="true"
                        aria-controls={`accordion-flush-body-${item.playlistId}`}
                      >
                        <span>{item.playlistName}</span>
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
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5 5 1 1 5"
                          />
                        </svg>
                      </button>
                    </h2>
                    <div
                      id={`accordion-flush-body-${item.playlistId}`}
                      className="hidden bg-[#E5E9F2] rounded-b-xl px-2 -mt-3"
                      aria-labelledby={`accordion-flush-heading-${item.playlistId}`}
                    >
                      <div className="py-5 dark:border-gray-700">
                        <ul className="flex  text-xs font-medium flex-col gap-2">
                          {item.videos.map((videoList) => (
                            <li
                              onClick={() => {
                                dispatch(setVideoLink(videoList?.videoId));
                                dispatch(setVideoName(videoList?.videoName));
                              }}
                              className={`${
                                video_link === videoList?.videoId
                                  ? "bg-[#1B8CCE] text-white "
                                  : "bg-white text-black hover:text-[#1B8CCE]"
                              } rounded-full px-2 flex gap-2 items-center  py-3  cursor-pointer`}
                              key={videoList?.videoId}
                            >
                              <div>
                                {videoList?.videoId.endsWith(".pdf") ? (
                                  <Icon
                                    path={mdiFilePdfBox}
                                    size={1}
                                    className="h-10 w-10"
                                  />
                                ) : (
                                  <Icon
                                    path={mdiPlayCircle}
                                    size={1}
                                    className="h-10 w-10"
                                  />
                                )}
                              </div>
                              <span>{videoList?.videoName}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </>
                ))}
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
