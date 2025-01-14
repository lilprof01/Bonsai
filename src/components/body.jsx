import React from "react";
import Card from "./card";
import Addon from "./addon";
import Faq from "./faq";

const Body = () => {
  return (
    <div className="body bg-[#f5f5f5] p-6 lg:px-20 pt-20 lg:pt-52 mt-[50px] flex flex-col gap-12">
      <div className="flex sm:flex-row flex-col align-middle items-center justify-between gap-20 mx-auto z-10">
        <div className="sm:text-3xl">PLANS & PRICING</div>
        <div className="flex align-middle items-center justify-between gap-8">
          <h3>MONTHLY</h3>
          <div className="relative w-14 h-8 bg-[#00b289] rounded-3xl flex align-middle items-center px-1 hover:cursor-pointer">
            <div className="absolute w-7 h-7 bg-white rounded-full hover:cursor-pointer"></div>
          </div>
          <h3>YEARLY</h3>
        </div>
      </div>

      {/* Card section */}
      <div className="flex lg:flex-row flex-col justify-between gap-5 sm:p-0 z-10 w-full">
        <Card
          title="Starter"
          text="Ideal for freelancers and contractors just starting out."
          price={24}
          l0="All Templates"
          l1="Unlimited Clients & Projects"
          l2="Invoicing & Payments"
          l3="Proposals & Contracts"
          l4="Tasks & Time Tracking"
          l5="Client CRM"
          l6="Expense Tracking"
          l7="Up to 5 Project Collaborators"
          l8=""
          l9=""
          icon={<i class="bx bx-check"></i>}
        />
        <Card
          title="Professional"
          text="Everything a growing independent business needs to thrive."
          price={39}
          l0="Everything in Starter plus..."
          l1="Custom Branding"
          l2="Forms & Questionnaires"
          l3="Workflow Automations"
          l4="Client Portal"
          l5="QuickBooks Integration"
          l6="Calendly Integration"
          l7="Zapier Integration"
          l8="Up to 15 Project Collaborators"
          l9=""
        />
        <Card
          title="Business"
          text="The perfect package for small businesses and agencies."
          price={79}
          l0="Everything in Starter and Professional plus..."
          l1="Subcontractor Management"
          l2="Hiring Agreement Templates (1099 contracts)"
          l3="Subcontractor Onboarding"
          l4="Talent Pool"
          l5="3 Team Seats (additional seats $9/month)"
          l6="Accountant Access"
          l7="Connect Multiple Bank Accounts"
          l8="Unlimited Subcontractors"
          l9="Unlimited Project Collaborators"
        />
      </div>

      {/* Addon section */}
      <div className="w-full flex flex-col justify-between align-middle items-center gap-3 sm:py-12">
        <h2 className="text-2xl sm:text-3xl p-8 opacity-80 text-center">
          Super charge your work with add-ons
        </h2>
        <Addon
          title="Collaborators"
          text="Invite other users to specific projects for limited access and
              functionality."
          price={"Free"}
        />
        <Addon
          title="Partners"
          text="Invite other users for full account access and company management."
          price={"$9"}
          per="/MONTH"
        />
        <Addon
          title="Bonsai Task"
          text="Track expenses, identify write-offs, and estimate quarterly taxes easily."
          price={"$10"}
          link="LEARN MORE &gt;"
          per="/MONTH"
        />
      </div>

      <div className="p-10 flex flex-col sm:flex-row text-center gap-4 md:text-left justify-between align-middle items-center lg:text-left lg:w-5/6 mx-auto bg-[#f2faff] rounded-xl mb-12">
        <div className="flex flex-col justify-between align-middle items-center text-center lg:text-left gap-2">
          <p className="text-4xl md:text-5xl opacity-65">
            It's <span className="opacity-100 text-[#00b289]">your</span>{" "}
            business.
          </p>
          <p className="text-4xl md:text-5xl opacity-65">
            We're here to help it grow.
          </p>
        </div>
        <button className="text-nowrap px-6 py-3 rounded-lg bg-[#00b289] text-white">
          START FREE
        </button>
      </div>
      <Faq />
    </div>
  );
};

export default Body;
