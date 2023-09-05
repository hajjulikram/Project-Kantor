"use client";

import SideBar from "@/layouts/SideBar";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";

export default function Playlist() {
  const params = useParams();

  

  return (
    <SideBar>
      {/* <iframe
        // src={`https://www.youtube.com/embed/${params.playlist[2]}`}
        src="/assets/pdf/Profile.pdf"
        className="w-full mx-auto aspect-video rounded-xl"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <h1 className="text-black font-extrabold text-2xl mt-5">
        {decodeURIComponent(params.playlist[1].replace(/\+/g, "%20"))}
      </h1> */}
    </SideBar>
  );
}
