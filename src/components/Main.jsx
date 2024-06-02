import React from "react";

const Main = ({ data }) => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      {data.media_type === "image" ? (
        <img
          src={data.url}
          alt={data.title || "NASA Image of the Day"}
          className="min-h-screen object-cover"
        />
      ) : (
        <p>No image available for today.</p>
      )}
      <div className="mt-4 text-center"></div>
    </div>
  );
};

export default Main;
