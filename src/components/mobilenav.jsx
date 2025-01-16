import React from 'react';
import 'boxicons';

const Mobilenav = (props) => {
  return (
    <div className={`h-[90vh] w-screen bg-[#f5f5f5] flex-col justify-start  absolute top-14 left-0 px-8 py-6 ${props.nav ? 'toggle-nav' : 'toggle-nav-off'} lg:hidden`}>
      <div className='flex flex-col justify-between align-middle items-start py-6'>
        <div className='flex justify-between align-middle items-center py-4 border-b border-b-[#808080af] w-full'>
          <p>Product</p>
          <i className="bx bx-sm bx-chevron-down"></i>
        </div>
        <div className='flex justify-between align-middle items-center py-4 border-b border-b-[#808080af] w-full'>
          <p>Templates</p>
          <i className="bx bx-sm bx-chevron-down"></i>
        </div>
        <div className='flex justify-between align-middle items-center py-4 border-b border-b-[#808080af] w-full'>
          <p>Pricing</p>
        </div>
        <div className='flex justify-between align-middle items-center py-4 border-b border-b-[#808080af] w-full'>
          <p>Reviews</p>
        </div>
      </div>

      <div className='flex flex-col justify-between align-middle items-center gap-4'>
        <button className='w-full border border-[#00b289] p-2.5 rounded-md text-[#00b289] text-sm font-semibold'>LOG IN</button>
        <button className='w-full bg-[#00b289] p-2.5 rounded-md text-white text-sm font-semibold'>START FREE</button>
      </div>
    </div>
  )
}

export default Mobilenav;
