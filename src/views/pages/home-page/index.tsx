import React from "react";

export default function HomePageView() {
  return (
    <div>
      <main>
        <div className="flex items-center justify-center text-center w-auto h-dvh bg-slate-500">
          {/* Ubah flex direction jadi column agar h1 di atas h2 */}
          <div className="flex flex-col gap-2 text-2xl">
            <h1>Hi, I'm Lomona Gagasi Pasaribu</h1>
            <h2>A Fullstack Website Developer</h2>
          </div>
        </div>
        <div className="text-center w-auto h-dvh bg-gray-500">About me</div>
        <div className="text-center w-auto h-dvh bg-slate-500">Projects</div>
        <div className="text-center w-auto h-dvh bg-gray-500">Experience</div>
        <div className="text-center w-auto h-dvh bg-slate-500">Contact</div>
      </main>
    </div>
  );
}
