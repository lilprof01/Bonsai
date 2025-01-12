import React from 'react'

const Footer = (props) => {
  return (
    <div className='flex flex-col justify-between align-middle items-left gap-5 px-6 py-20 bg-[#f5f5f5]'>
      <div className='flex flex-col justify-between align-middle items-left gap-5'>
        <h3 className='text-xl font-semibold'>PRODUCT</h3>
        <ul className='flex flex-col justify-between align-middle items-left gap-2 font-light text-md'>
          <li>Proposal</li>
          <li>Contracts</li>
          <li>Invoicing</li>
          <li>Client CRM</li>
          <li>Time Tracking</li>
          <li>Task Tracking</li>
          <li>Forms</li>
          <li>Accounting</li>
          <li>Bonsai Tax</li>
          <li>Bonsai Cash</li>
        </ul>
        <ul className='flex flex-col justify-between align-middle items-left gap-2 mt-6 font-light text-md'>
          <li>Pricing</li>
          <li>Bonsai Reviews</li>
        </ul>
      </div>
      <div className='flex flex-col justify-between align-middle items-left gap-4'>
        <h3 className='text-xl font-semibold'>FREE RESOURCES</h3>
        <ul className='flex flex-col justify-between align-middle items-left gap-2 font-light text-md'>
          <li>Freelance Resources</li>
          <li>Freelance Blog by Bonsai</li>
          <li>How to Write a Contract</li>
          <li>Online Signature Marker</li>
        </ul>
        <ul className='flex flex-col justify-between align-middle items-left gap-2 mt-8 font-light text-md'>
          <li>Self-Employed Taxes Hub</li>
          <li>Self-Employed Taxe Calculator</li>
          <li>Self-Employed Taxes Deduction</li>
        </ul>
      </div>
      <div className='flex flex-col justify-between align-middle items-left gap-4'>
        <h3 className='text-xl font-semibold'>Templates</h3>
        <ul className='flex flex-col justify-between align-middle items-left gap-2 font-light text-md'>
          <li>Invoice Templates</li>
          <li>Proposal Templates</li>
          <li>Contract Templates</li>
          <li>Agreement Templates</li>
          <li>Scope of Work Templates</li>
          <li>Quote Templates</li>
          <li>Credit Note Templates</li>
          <li>Estimate Templates</li>
          <li>Form Templates</li>
        </ul>
      </div>
      <div className='flex flex-col justify-between align-middle items-left gap-4'>
        <h3 className='text-xl font-semibold'>BONSAI</h3>
        <ul className='flex flex-col justify-between align-middle items-left gap-2 font-light text-md'>
          <li>links</li>
          <li>links</li>
          <li>links</li>
          <li>links</li>
          <li>links</li>
          <li>links</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
