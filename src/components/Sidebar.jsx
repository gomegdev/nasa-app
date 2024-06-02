import React from "react";

const Sidebar = ({ handleToggleModal, data }) => {
  return (
    <div className="fixed inset-0 z-10 flex flex-col shadow-[0_0_40px_1px_#030615] transition md:relative md:inset-[unset] md:max-h-screen md:w-[30%]">
      <div
        className="absolute inset-0 bg-[#030615] opacity-60 md:fixed"
        onClick={handleToggleModal}
      ></div>
      <div className="relative z-[15] ml-auto flex h-full min-h-screen w-[90%] max-w-[800px] flex-col gap-4 overflow-y-scroll bg-black p-4 md:min-h-screen md:w-full">
        <h2 className="text-2xl font-extralight capitalize">{data?.title}</h2>
        <div className="flex-1 space-y-2">
          <p className="text-base font-extralight uppercase tracking-widest opacity-70">
            Description
          </p>
          <p className="text-lg">{data?.explanation}</p>
        </div>
        <button
          className="mr-auto hover:opacity-70"
          onClick={handleToggleModal}
        >
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
