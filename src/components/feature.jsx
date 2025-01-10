import React from "react";

const Feature = (props) => {
  return (
    <div className="flex flex-col items-center h-full justify-between align-middle gap-2 p-6 w-96">
      <h3>{props.title}</h3>
      <div className="flex flex-col justify-between align-middle items-center gap-2 p-4 flex-1 w-full">
        <div className="feature one border-2 w-full border-[#f5f5f5] p-6 text-center">{props.text1}</div>
        <div className="feature two border-2 w-full border-[#f5f5f5] p-6 text-center">{props.text2}</div>
        <div className="feature three border-2 w-full border-[#f5f5f5] p-6 text-center">{props.text3}</div>
        <div className="feature four border-2 w-full border-[#f5f5f5] p-6 text-center">{props.text4}</div>
      </div>
      <a className="text-[#00b289] font-semibold">{props.link}</a>
    </div>
  );
};

export default Feature;
