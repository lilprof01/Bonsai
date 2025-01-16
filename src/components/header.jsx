import React from "react";
import { useState } from "react";
import "boxicons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileInvoice } from "@fortawesome/free-solid-svg-icons";
import { faNoteSticky } from "@fortawesome/free-solid-svg-icons";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { faReceipt } from "@fortawesome/free-solid-svg-icons";
import { faFileInvoiceDollar } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import Template from "./template";
import Feature from "./feature";
import Mobilenav from "./mobilenav";

// Dropbox Card components
const DropBox = (props) => {
  return (
    <div
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      className={`relative border-b-2 border-b-[#f5f5f5] p-8 w-80 hover:bg-[#f5f5f5] transition-all`}
    >
      <h3 className="text-2xl">{props.title}</h3>
      <p className="font-serif font-normal text-md">{props.text}</p>
      <div>{props.arrow}</div>
    </div>
  );
};

// FlowCard components
const FlowCard = (props) => {
  return (
    <div
      className={`p-4 hover:bg-[#f5f5f5] flex gap-2 align-middle justify-center transition-all`}
    >
      <div>{props.icon}</div>
      <div>
        <h3 className="text-md">{props.title}</h3>
        <p className="font-serif font-normal text-sm">{props.text}</p>
      </div>
    </div>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTemplate, setIsTemplate] = useState(false);
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState("");
  const [nav, setNav] = useState(false);

  const handleSeelect = (element) => {
    console.log('selected', element);
    setSelected(element);
  };

  const toggleMenu = () => {
    setTimeout(() => {
      setIsOpen((prev) => !prev);
    }, 100);
  };

  const toggleTemplate = () => {
    setTimeout(() => {
      setIsTemplate((prev) => !prev);
    }, 100);
    clearTimeout();
  };

  const toggleVisible = () => {
    setTimeout(() => {
      setVisible((prev) => !prev);
    }, 100);
    clearTimeout();
  };

  const toggleNav = () => {
    setNav((prev) => !prev);
  }

  return (
    <header className="fixed top-0 z-50 w-full flex sm:px-20 px-4 py-6 justify-between align-middle bg-gray-100 items-center">
      <div className="flex items-center">
        <i className="bx-md bx bxl-xing"></i>
        <h1 className={`text-2xl ${nav ? 'hidden' : ''}`}>Company</h1>
      </div>

      <div className="items-center hidden lg:flex">
        <ul className="flex justify-center align-middle items-center gap-8 text-md">
          <li
            onMouseEnter={toggleMenu}
            onMouseLeave={toggleMenu}
            className="relative opacity-70 hover:opacity-100 hover:cursor-pointer"
          >
            Products
            <i className="bx bx-chevron-down"></i>
            {/* dropbox content */}
            <div className="absolute top-12 -left-20 bg-white shadow-lg flex justify-between transition-all">
              <div
                className={`flex-col justify-between ${
                  isOpen ? "flex" : "hidden"
                } hover:flex transition-all`}
              >
                <DropBox
                  onMouseEnter={toggleVisible}
                  onMouseLeave={toggleVisible}
                  title="Bonsai Tax"
                  text="Look professional, win more clients and manage your business
                  from one place"
                  arrow={
                    visible ? (
                      <i className="bx-md bx bx-chevron-right right"></i>
                    ) : (
                      ""
                    )
                  }
                />
                <DropBox
                  title="Bonsai Tax"
                  text="Look professional, win more clients and manage your business
                  from one place"
                />
                <DropBox
                  title="Bonsai Tax"
                  text="Look professional, win more clients and manage your business
                  from one place"
                />
              </div>

              {/* Flowcard box */}
              <div
                className={`grid-cols-2 gap-3 w-[50vw] ${
                  visible ? "grid" : "hidden"
                } hover:grid transition-all`}
              >
                <FlowCard
                  icon={<FontAwesomeIcon icon={faFileInvoice} />}
                  title="Invoices"
                  text="Get paid faster with automatic invoicing, online payments and more"
                />
                <FlowCard
                  icon={<FontAwesomeIcon icon={faNoteSticky} />}
                  title="Proposals"
                  text="Get paid faster with automatic invoicing, online payments and more"
                />
                <FlowCard
                  icon={<FontAwesomeIcon icon={faFileLines} />}
                  title="Contracts"
                  text="Get paid faster with automatic invoicing, online payments and more"
                />
                <FlowCard
                  icon={<FontAwesomeIcon icon={faFileInvoice} />}
                  title="Client CRM"
                  text="Get paid faster with automatic invoicing, online payments and more"
                />
                <FlowCard
                  icon={<FontAwesomeIcon icon={faReceipt} />}
                  title="Form and Automation"
                  text="Get paid faster with automatic invoicing, online payments and more"
                />
                <FlowCard
                  icon={<FontAwesomeIcon icon={faClock} />}
                  title="Time Tracking"
                  text="Get paid faster with automatic invoicing, online payments and more"
                />
                <FlowCard
                  icon={<FontAwesomeIcon icon={faReceipt} />}
                  title="Accounting"
                  text="Get paid faster with automatic invoicing, online payments and more"
                />
                <FlowCard
                  icon={<FontAwesomeIcon icon={faFileInvoiceDollar} />}
                  title="Task Tracking"
                  text="Get paid faster with automatic invoicing, online payments and more"
                />
              </div>
            </div>
          </li>

          <li
            onMouseEnter={toggleTemplate}
            onMouseLeave={toggleTemplate}
            className="relative opacity-70 hover:opacity-100 hover:cursor-pointer transition-all"
          >
            Templates
            <i className="bx bx-chevron-down"></i>
            {/* Templates dropdown */}
            <div
              onMouseEnter={toggleTemplate}
              onMouseLeave={toggleTemplate}
              className={`absolute top-12 -left-20 py-3 bg-white shadow-lg justify-between ${
                isTemplate ? "flex" : "hidden"
              } hover:flex`}
            >
              <div className={`flex-col justify-start flex`}>
                <Template
                  onMouseEnter={() => handleSeelect('Contract Templates')}
                  icon={<FontAwesomeIcon icon={faFileInvoice} />}
                  text="Contract Templates"
                  arrow={<i className="bx-md bx bx-chevron-right"></i>}
                />
                <Template
                  onMouseEnter={() => handleSeelect('Proposal Templates')}
                  icon={<FontAwesomeIcon icon={faFileInvoice} />}
                  text="Proposal Templates"
                  arrow={<i className="bx-md bx bx-chevron-right"></i>}
                />
                <Template
                  onMouseEnter={() => handleSeelect('Invoice Templates')}
                  icon={<FontAwesomeIcon icon={faFileInvoice} />}
                  text="Invoice Templates"
                  arrow={<i className="bx-md bx bx-chevron-right"></i>}
                />
                <Template
                  onMouseEnter={() => handleSeelect('Agreement Templates')}
                  icon={
                    <FontAwesomeIcon
                      icon={faFileInvoice}
                    />
                  }
                  text="Agreement Templates"
                  arrow={<i className="bx-md bx bx-chevron-right"></i>}
                />
                <Template
                  onMouseEnter={() => handleSeelect('Quote Templates')}
                  icon={
                    <FontAwesomeIcon
                      icon={faFileInvoice}
                    />
                  }
                  text="Quote Templates"
                  arrow={<i className="bx-md bx bx-chevron-right"></i>}
                />
                <Template
                  onMouseEnter={() => handleSeelect('Scope of Work Templates')}
                  icon={
                    <FontAwesomeIcon
                      icon={faFileInvoice}
                      text="Scope of Work Templates"
                    />
                  }
                  text="Scope of work Templates"
                  arrow={<i className="bx-md bx bx-chevron-right"></i>}
                />
                <Template
                  onMouseEnter={() => handleSeelect('Brief Templates')}
                  icon={
                    <FontAwesomeIcon
                      icon={faFileInvoice}
                    />
                  }
                  text="Brief Templates"
                  arrow={<i className="bx-md bx bx-chevron-right"></i>}
                />
              </div>

              {/* Feature box */}
              <div className={`block`}>
                {selected === 'Contract Templates' && (
                  <Feature
                  title="Featured Contract Templates"
                  text1="Free Contract Maker"
                  text2="Social Media Management Contract Template"
                  text3="Graphich Design Contract Template"
                  text4="Digital Market Contract Template"
                  link="See All Templates"
                />
                )}
                {selected === 'Proposal Templates' && (
                  <Feature
                  title="Featured Proposal Templates"
                  text1="Graphic design business propsoal Template"
                  text2="Business Proposal Template"
                  text3="Brand Ambassador proposal Template"
                  text4="Data Entry proposal LetterTemplate"
                  link="See All Templates"
                />
                )}
                {selected === 'Invoice Templates' && (
                  <Feature
                  title="Featured Invoice Templates"
                  text1="Free Contract Maker"
                  text2="Social Media Management Contract Template"
                  text3="Graphich Design Contract Template"
                  text4="Digital Market Contract Template"
                  link="See All Templates"
                />
                )}
                {selected === 'Agreement Templates' && (
                  <Feature
                  title="Featured Agreement Templates"
                  text1="Free Contract Maker"
                  text2="Social Media Management Contract Template"
                  text3="Graphich Design Contract Template"
                  text4="Digital Market Contract Template"
                  link="See All Templates"
                />
                )}
                {selected === 'Quote Templates' && (
                  <Feature
                  title="Featured Quote Templates"
                  text1="Free Contract Maker"
                  text2="Social Media Management Contract Template"
                  text3="Graphich Design Contract Template"
                  text4="Digital Market Contract Template"
                  link="See All Templates"
                />
                )}
                {selected === 'Scope of Work Templates' && (
                  <Feature
                  title="Featured Scope of Work Templates"
                  text1="Free Contract Maker"
                  text2="Social Media Management Contract Template"
                  text3="Graphich Design Contract Template"
                  text4="Digital Market Contract Template"
                  link="See All Templates"
                />
                )}
                {selected === 'Brief Templates' && (
                  <Feature
                  title="Featured Brief Templates"
                  text1="Free Contract Maker"
                  text2="Social Media Management Contract Template"
                  text3="Graphich Design Contract Template"
                  text4="Digital Market Contract Template"
                />
                )}
              </div>
            </div>
          </li>

          <li className="opacity-70 hover:opacity-100 hover:cursor-pointer transition-all">
            Pricing
          </li>

          <li className="opacity-70 hover:opacity-100 hover:cursor-pointer transition-all">
            Reviews
          </li>
        </ul>
      </div>

      <div className="hidden lg:flex items-center gap-6">
        <button className="px-6 py-2 rounded-md border border-[#00b289] text-[#00b289] hover:bg-[#00b289] hover:opacity-85 active:opacity-95 hover:text-white transition-all">
          LOG IN
        </button>
        <button className="px-6 py-2 rounded-md bg-[#00b289] text-white hover:opacity-85 active:opacity-95 transition-all">
          START FREE
        </button>
      </div>

      {/* hamburger and mobile nav menu*/}
      <div onClick={toggleNav} className="flex flex-col items-center align-middle lg:hidden hover:cursor-pointer">
        <div className={`h-1 w-8 rounded-md mb-1 bg-[black] ${nav ? 'burger1' : 'burger-1'}`}></div>
        <div className={`h-1 w-8 rounded-md bg-[black] ${nav ? 'invisible' : 'show'}`}></div>
        <div className={`h-1 w-8 rounded-md mt-1 bg-[black] ${nav ? 'burger2' : 'burger-2'}`}></div>
      </div>

      <Mobilenav nav={nav} />
    </header>
  );
};

export default Header;
