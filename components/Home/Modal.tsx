// @ts-nocheck

import React from "react";
import dynamic from "next/dynamic";
const ModalVideo = dynamic(() => import("react-modal-video"), { ssr: false });

const Modal = () => {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <>
      <div className="flex items-center flex-col py-24 justify-center">
        <h1 className="font-medium sm:text-4xl text-center text-3xl pb-8 text-dark font-sansm">
          Celebrating 20 Years of RK Video
        </h1>
        <img
          src="https://media.discordapp.net/attachments/855442145916616724/968891577848180857/sddefault.jpg"
          className="rounded-t-md lg:w-1/2"
          alt="thumbnail"
        />
        <button
          className="bg-black text-white lg:w-1/2 py-4 w-full text-xl rounded-b-md"
          onClick={() => setOpen(true)}
        >
          Play
        </button>
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="LmK33VtXm18"
          onClose={() => setOpen(false)}
        />
      </div>
    </>
  );
};

export default Modal;
