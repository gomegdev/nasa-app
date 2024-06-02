import React from "react";

const Footer = ({ handleToggleModal, data }) => {
  return (
    <footer className="fixed bottom-0 left-0 flex w-full items-center justify-between gap-4 p-4">
      <div className="absolute inset-0 z-[-1] bg-gradient-to-t from-[#030615] to-[#ffffff00]"></div>
      <div className="flex flex-col gap-2">
        <h1 className="text-base font-extralight uppercase">Apod project</h1>
        <h2 className="text-2xl capitalize">{data?.title}</h2>
      </div>
      <button onClick={handleToggleModal}>
        <i className="fa-solid fa-circle-info text-3xl transition hover:opacity-70"></i>
      </button>
    </footer>
  );
};

export default Footer;
