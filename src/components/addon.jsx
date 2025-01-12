import React from 'react'

const Addon = (props) => {
  return (
    <div className="flex flex-col-reverse items-baseline gap-5 sm:flex-row justify-between sm:align-middle sm:items-center sm:w-full p-8  sm:px-10 sm:py-12 bg-white rounded-lg">
          <div className="flex flex-col justify-between align-middle items-start gap-1">
            <h3 className="sm:text-xl font-bold opacity-65">{props.title}</h3>
            <p className="font-serif font-light text-md opacity-65">
              {props.text}
            </p>
            <a className="text-xs text-[#00b289]">{props.link}</a>
          </div>
          <div className="flex flex-col justify-middle align-middle items-center gap-2 pr-20">
            <h3 className="text-3xl sm:text-4xl font-extrabold opacity-70">{props.price}</h3>
            <h4 className="text-xs font-serif font-normal opacity-70">{props.per}</h4>
          </div>
        </div>
  )
}

export default Addon
