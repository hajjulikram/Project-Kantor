"use client";

import SideBar from "@/layouts/SideBar";
import { useSelector } from "react-redux";

export default function Home() {
  const {videoLink, videoName} = useSelector((state) => state.video);
  return (
    <SideBar>
      <iframe
        src={`${videoLink}`}
        className="w-full mx-auto aspect-video rounded-xl"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <h1 className="text-black font-extrabold text-2xl mt-5">
        {videoName}
      </h1>
    </SideBar>
  );
}
