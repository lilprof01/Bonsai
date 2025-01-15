import React from "react";

const Card = (props) => {
  return (
    <div className="z-10 border border-[#00000043] flex flex-col justify-start md:items-baseline gap-9 items-center py-16 px-9 md:p-6 bg-white shadow-md rounded-md popular w-full">
      <div className="relative border-b-2 py-4 px-5 border-b-[#00b289] w-full">
        <div className="sm:text-2xl mb-3">{props.title}</div>
        <div className="font-serif font-light opacity-65 text-sm">
          {props.text}
        </div>
        {!props.card && (
          <div className="mt-4 text-md font-serif">
            <span className="text-2xl place-items-baseline">$</span>
            <span className="text-6xl font-serif font-medium mb-16">
              {props.priceM}
            </span>
            /MONTH
          </div>
        )}

        {props.card && (
          <div className="mt-4 text-md font-serif">
            <span className="text-2xl place-items-baseline">$</span>
            <span className="text-6xl font-serif font-medium mb-16">
              {props.priceY}
            </span>
            /MONTH
          </div>
        )}

        {props.card && (
          <div className="absolute right-2 bottom-2 text-sm">Billed yearly</div>
        )}
      </div>
      <div className="flex flex-col justify-start items-center md:items-baseline w-full h-full">
        <ul className="bx-ul flex flex-col justify-start md:items-baseline gap-6">
          {props.features.map((feature, index) => (
            <li>
              {props.icon}
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <button className="bg-[#00b289] w-full p-5 rounded-md text-white hover:opacity-85 active:opacity-95 transition-all">
        START FREE
      </button>
    </div>
  );
};

export default Card;
