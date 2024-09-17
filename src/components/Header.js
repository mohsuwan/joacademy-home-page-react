import React from "react";
import joacadymeylogo from "../images/joacadymeylogo.webp";
function Headar() {
  const headerElement = [
    "عن جو أكاديمي ",
    "خدمات جو أكاديمي ",
    "أخبار جو أكاديمي ",
    "فعاليات جوأكاديمي ",
    "مكتباتنا ",
    "كن مندوبنا ",
    "تواصل معنا ",
  ];
  return (
    <div className=" flex flex-row bg-[#1a428a]  justify-between px-10 items-center h-[100px] ">
      <img
        
        src={joacadymeylogo}
        alt="Logo"
        height="37"
        width="180"
      />
      <ul className="flex gap-10 text-sm text-white px-10 ">
        {headerElement.map((element, index) => {
          return (
            <li
              key={`item-id-${index}`}
              className="hover:underline cursor-pointer"
            >
              {element}
            </li>
          );
        })}
      </ul>
      <div className="bg-white w-16 rounded-xl h-12 content-center">
        <button className="      w-16">
          <i className="ri-global-line text-[26px] text-[#1a428a]"></i>
          <i className="ri-arrow-down-s-line text-[26px] text-[#1a428a]"></i>
        </button>
      </div>
    </div>
  );
}

export default Headar;
