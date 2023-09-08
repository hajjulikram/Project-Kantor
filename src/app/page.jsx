"use client";

import SideBar from "@/layouts/SideBar";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useRef } from "react";
export default function Home() {
  const { videoLink, videoName } = useSelector((state) => state.video);
  const refIframe = useRef();
  useEffect(() => {
    document.addEventListener("contextmenu", (e) => e.preventDefault());
    document.onkeydown = function (e) {
      if (e.ctrlKey && e.shiftKey && e.keyCode === "I".charCodeAt(0)) {
        return false;
      }
      if (e.ctrlKey && e.shiftKey && e.keyCode === "J".charCodeAt(0)) {
        return false;
      }
      if (e.ctrlKey && e.keyCode === "U".charCodeAt(0)) {
        return false;
      }
      if (e.keyCode === 123) {
        return false;
      }
      if (e.ctrlKey && e.shiftKey && e.keyCode === "C".charCodeAt(0)) {
        return false;
      }
      if (e.ctrlKey && e.shiftKey && e.keyCode === "K".charCodeAt(0)) {
        return false;
      }
    };
    console.info(
      "%cTools ini hanya diperuntukan bagi Developer!",
      "color: red; font-size: 28px; font-weight: bold;"
    );
    debugger;
  }, []);

  // const iframe = document.querySelector(".aspect-video");
  // const blockerDiv = document.querySelector(".bg-transparent");

  // // Fungsi untuk memulai video YouTube
  // function playVideo() {
  //   iframe.contentWindow.postMessage(
  //     '{"event":"command","func":"playVideo","args":""}',
  //     "*"
  //   );
  // }

  // // Fungsi untuk menghentikan video YouTube
  // function pauseVideo() {
  //   iframe.contentWindow.postMessage(
  //     '{"event":"command","func":"pauseVideo","args":""}',
  //     "*"
  //   );
  // }

  // // Menambahkan event listener untuk mengendalikan video saat di-klik
  // blockerDiv.addEventListener("click", function () {
  //   playVideo(); // Memulai video saat div di-klik
  // });

  const handleClickMask = () => {
    console.log("cesk");
    refIframe.current?.contentWindow?.focus();
  };

  return (
    <SideBar>
      <div className="relative">
        <iframe
          ref={refIframe}
          src={`${videoLink}`}
          className="w-full mx-auto aspect-video rounded-xl"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div
          onClick={handleClickMask}
          className="w-full h-28 bg-transparent absolute top-0"
        ></div>
      </div>

      <h1 className="text-black font-extrabold text-2xl mt-5">{videoName}</h1>
    </SideBar>
  );
}
