"use client";

import SideBar from "@/layouts/SideBar";

export default function Home() {
  return (
    <SideBar>
      <iframe
        src={`https://www.youtube.com/embed/gdrdZSKwStg`}
        className="w-full mx-auto aspect-video rounded-xl"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <h1 className="text-black font-extrabold text-2xl mt-5">
        PT. Nusantara Sukses Teknologi
      </h1>
    </SideBar>
  );
}
