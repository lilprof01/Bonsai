import React, { useState } from "react";
import "boxicons";

const Footer = (props) => {
  const [show, setShow] = useState({});

  const handleShow = (number) => {
    setShow({
      ...show,
      [number]: !show[number],
    });
  };

  return (
    <div className="footer px-6 py-20 md:px-10 lg:px-36 bg-[#f5f5f5]">
      <div className="flex flex-col md:flex-row justify-start md:justify-between align-middle items-left gap-5 md:px-10">
        <div className="flex flex-col justify-start align-middle items-left gap-4 w-full">
          <h3 className="text-xl font-semibold">PRODUCT</h3>
          <ul className="flex flex-col justify-between align-middle items-left gap-2 font-light text-md">
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
          <ul className="flex flex-col justify-between align-middle items-left gap-2 mt-6 font-light text-md">
            <li className="text-[#00b289]">Pricing</li>
            <li>Bonsai Reviews</li>
          </ul>
        </div>
        <div className="flex flex-col justify-start align-middle items-left gap-5 w-full">
          <div className="flex flex-col justify-start align-middle items-left gap-4">
            <h3 className="text-xl font-semibold">FREE RESOURCES</h3>
            <ul className="flex flex-col justify-between align-middle items-left gap-2 font-light text-md">
              <li>Freelance Resources</li>
              <li>Freelance Blog by Bonsai</li>
              <li>How to Write a Contract</li>
              <li>Online Signature Marker</li>
            </ul>
            <ul className="flex flex-col justify-between align-middle items-left gap-2 mt-8 font-light text-md">
              <li>Self-Employed Taxes Hub</li>
              <li>Self-Employed Taxe Calculator</li>
              <li>Self-Employed Taxes Deduction</li>
            </ul>
          </div>
          <div className="flex flex-col justify-start align-middle items-left gap-4">
            <h3 className="text-xl font-semibold">Templates</h3>
            <ul className="flex flex-col justify-between align-middle items-left gap-2 font-light text-md">
              <li>
                <div onClick={() => handleShow(1)}>
                  Invoice Templates <i className="bx bx-chevron-down"></i>
                </div>
                {show[1] && (
                  <ul className="pl-3 template-drop text-sm flex flex-col justify-between items-left align-middle gap-2">
                    <li>Invoice Generator</li>
                    <li>Blank Invoice Template</li>
                    <li>Consultant Invoice Template</li>
                    <li>Editable Invoice Template</li>
                    <li>Graphic Design Invoice</li>
                    <li>Web Design Invoice</li>
                    <li>Contractor Invoice Template</li>
                    <li>Photography Invoice Template</li>
                    <li>Self Employed Invoice Template</li>
                  </ul>
                )}
              </li>

              <li>
                <div onClick={() => handleShow(2)}>
                  Proposal Templates <i className="bx bx-chevron-down"></i>
                </div>
                {show[2] && (
                  <ul className="pl-3 template-drop text-sm flex flex-col justify-between items-left align-middle gap-2">
                    <li>Website Proposal Template</li>
                    <li>Digital Marekting Proposal Template</li>
                    <li>Social Media Marketing Proposal</li>
                    <li>Graphic Design Proposal</li>
                    <li>Freelance Proposal Template</li>
                    <li>SEO Proposal Template</li>
                  </ul>
                )}
              </li>

              <li>
                <div onClick={() => handleShow(3)}>
                  Contract Templates <i className="bx bx-chevron-down"></i>
                </div>
                {show[3] && (
                  <ul className="pl-3 template-drop text-sm flex flex-col justify-between items-left align-middle gap-2">
                    <li>Online Contract</li>
                    <li>Graphic Design Contract</li>
                    <li>Freelance Contract Template</li>
                    <li>Social Media Marketting Contract</li>
                    <li>Software Development Contract</li>
                    <li>Web Design Contract</li>
                    <li>Video Production Contract</li>
                    <li>Public Relations Contract</li>
                    <li>Translation Contract</li>
                  </ul>
                )}
              </li>

              <li>
                <div onClick={() => handleShow(4)}>
                  Agreement Templates <i className="bx bx-chevron-down"></i>
                </div>
                {show[4] && (
                  <ul className="pl-3 template-drop text-sm flex flex-col justify-between items-left align-middle gap-2">
                    <li>Retainer Agreement Template</li>
                    <li>Influencer Agreement Template</li>
                    <li>Collaboration Agreement Template</li>
                    <li>Software Development Agreement</li>
                    <li>Marketing Agreement Template</li>
                  </ul>
                )}
              </li>

              <li>
                <div onClick={() => handleShow(5)}>
                  Scope of Work Templates <i className="bx bx-chevron-down"></i>
                </div>
                {show[5] && (
                  <ul className="pl-3 template-drop text-sm flex flex-col justify-between items-left align-middle gap-2">
                    <li>Website Development Template</li>
                    <li>Work</li>
                    <li>Digital Marketing Scope of Work</li>
                    <li>Consultant Statement of Work Template</li>
                    <li>Software Development Scope of Work</li>
                  </ul>
                )}
              </li>

              <li>
                <div onClick={() => handleShow(6)}>
                  Quote Templates <i className="bx bx-chevron-down"></i>
                </div>
                {show[6] && (
                  <ul className="pl-3 template-drop text-sm flex flex-col justify-between items-left align-middle gap-2">
                    <li>Freelance Quotation Template</li>
                    <li>Web Design Quotation Template</li>
                    <li>Graphic Design Quotation Template</li>
                    <li>Interior Design Quotation Template</li>
                    <li>Video Production Template</li>
                    <li>Social Media Marketing Quotation</li>
                  </ul>
                )}
              </li>
              <li>Credit Note Templates</li>
              <li>Estimate Templates</li>
              <li>Form Templates</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-start align-middle items-left gap-4 w-full">
          <h3 className="text-xl font-semibold">BONSAI</h3>
          <ul className="flex flex-col justify-between align-middle items-left gap-2 font-light text-md">
            <li>About</li>
            <li>Careers</li>
            <li>Support</li>
            <li>linkedIn</li>
            <li>Twitter</li>
            <li>Privacy Policy</li>
            <li>Legal</li>
          </ul>
          <ul className="flex flex-col justify-between align-middle items-left gap-2 mt-6 font-light text-md">
            <li>Affiliates</li>
            <li>Write for us</li>
          </ul>
          <ul className="flex flex-col justify-between align-middle items-left gap-2 mt-6 font-light text-md">
            <li>
              <div onClick={() => handleShow(7)}>
                Comparisons <i className="bx bx-chevron-down"></i>
              </div>
              {show[7] && (
                <ul className="pl-3 template-drop text-sm flex flex-col justify-between items-left align-middle gap-2">
                  <li>Freshbook Alternatives</li>
                  <li>Quickbook Alternatives</li>
                  <li>Wave vs Quickbooks</li>
                  <li>Xero vs Quickbooks</li>
                  <li>Freshbooks vs Quickbooks</li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
