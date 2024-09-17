import React from "react";

function Card({ color, image, title }) {
  return (
    <div
      className={` flex flex-wrap flex-col items-center justify-center gap-4 w-[278px] h-[391px] rounded-lg hover:-translate-y-6 duration-700`}
      style={{ backgroundColor: color }}
    >
      <h2 className="font-bold text-white text-2xl text-center px-14">{title}</h2>
      <img src={image} alt="program" height="72" width="130" />
    </div>
  );
}

export default Card;
