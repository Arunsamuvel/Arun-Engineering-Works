import React from "react";
import Github from "../assets/Github.png";

const Cards = ({ item }) => {
  return (
    <div className="border border-red-500 rounded-lg w-[350px] lg:w-[400px] bg-red-50">
      <img src={item.image} alt={item.title} className="rounded-lg" />
      <div className="p-4">
        <h1 className="font-semibold text-xl mb-2">{item.title}</h1>
        <p>{item.desc}</p>
        <div className="flex gap-3 mt-4">
          <a
            href={item.live}
            target="_blank"
            className="bg-red-500 text-white px-3 py-2 rounded-md"
          >
            Live Preview
          </a>
          <a
            href={item.github}
            target="_blank"
            className="bg-black text-white px-3 py-2 rounded-md flex gap-1"
          >
            <img src=".png" alt="Github" className="w-6" />
            Github Link
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cards;
