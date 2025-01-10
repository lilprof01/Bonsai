import React from "react";
import Card from "./card";

const Body = () => {
  return (
    <div className="body bg-[#f5f5f5] h-[3000px] sm:px-20 pt-52 mt-[50px] flex flex-col gap-12">
      <div className="h-[50px] w-[80%] mx-auto bg-[green] p-10 z-10"></div>
      <div className="flex justify-between gap-8 z-10">
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
    </div>
  );
};

export default Body;
