import React from "react";

const Card = (props) => {
  return (
    <div className="z-10 border border-[#00000043] flex flex-col justify-start gap-9 items-center py-16 px-9 bg-white shadow-md rounded-md popular w-full">
      <div className="border-b-2 py-4 border-b-[#00b289]">
        <div className="sm:text-2xl mb-3">{props.title}</div>
        <div className="font-serif font-light opacity-65 text-sm">{props.text}</div>
        <div className="mt-4 text-md font-serif"><span className="text-2xl place-items-baseline">$</span><span className="text-6xl font-serif font-medium mb-16">{props.price}</span>/MONTH</div>
      </div>
      <div className="flex flex-col justify-start items-center w-full h-full">
        <ul className="bx-ul flex flex-col justify-start gap-6">
          <li>
            <i class="bx bx-check"></i>
            {props.l0}
          </li>
          <li>
            <i class="bx bx-check"></i>
            {props.l1}
          </li>
          <li>
            <i class="bx bx-check"></i>
            {props.l2}
          </li>
          <li>
            <i class="bx bx-check"></i>
            {props.l3}
          </li>
          <li>
            <i class="bx bx-check"></i>
            {props.l4}
          </li>
          <li>
            <i class="bx bx-check"></i>
            {props.l5}
          </li>
          <li>
            <i class="bx bx-check"></i>
            {props.l6}
          </li>
          <li>
            <i class="bx bx-check"></i>
            {props.l7}
          </li>
          <li>
            <i class="bx bx-check"></i>
            {props.l8}
          </li>
          <li>
            {props.icon}
            {props.l9}
          </li>
        </ul>
      </div>
      <button className="bg-[#00b289] w-full p-5 rounded-md text-white hover:opacity-85 active:opacity-95 transition-all">START FREE</button>
    </div>
  );
};

export default Card;
