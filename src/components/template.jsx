import React from 'react'
import { useState } from 'react';

const Template = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(!isHovered);
    if(props.onMouseEnter) {
      props.onMouseEnter();
    }
  };
  
  return (
    <div 
    onMouseOver={handleMouseOver}
    onMouseLeave={handleMouseOver}
    className='relative flex items-center justify-start gap-2 p-5 w-80 hover:bg-[#f5f5f5] transition-all'>
      {props.icon}
      {props.text}
      <div className='absolute right-6 top-[30%]'>
        {isHovered ? props.arrow : null}
      </div>
    </div>
  )
};

export default Template;