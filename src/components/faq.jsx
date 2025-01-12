import React from 'react';
import"boxicons";

const Faq = (props) => {
  return (
    <div className='w-full'>
      <div className='w-full flex flex-col justify-middle align-middle items-center gap-8 p-6 sm:px-40'>
        <h2 className='text-3xl text-[#00b289]'>Frequently Asked Questions</h2>
        <div className='w-full flex flex-col justify-between items-center align-middle gap-6 font-serif'>
          <div className='flex justify-between align-middle items-center w-full hover:text-[#00b289] hover:cursor-pointer'>
            <p className='text-2xl font-semibold opacity-75'>How does the free trial work?</p>
            <i className="bx bx-md bx-chevron-down"></i>
          </div>
          <div className='flex justify-between align-middle items-center w-full hover:text-[#00b289] hover:cursor-pointer'>
            <p className='text-2xl font-semibold opacity-75'>Can I change plans anytime?</p>
            <i className="bx bx-md bx-chevron-down"></i>
          </div>
          <div className='flex justify-between align-middle items-center w-full hover:text-[#00b289] hover:cursor-pointer'>
            <p className='text-2xl font-semibold opacity-75'>How do I pause my Bonsai subscription?</p>
            <i className="bx bx-md bx-chevron-down"></i>
          </div>
          <div className='flex justify-between align-middle items-center w-full hover:text-[#00b289] hover:cursor-pointer'>
            <p className='text-2xl font-semibold opacity-75'>What is your refund policy?</p>
            <i className="bx bx-md bx-chevron-down"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faq;
