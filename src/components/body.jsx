import { useState } from "react";
import Card from "./card";
import Addon from "./addon";
import Faq from "./faq";

const Body = () => {
  const [card, setCard] = useState(false);

  const handleToggle = () => {
    setCard((prev) => !prev);
  };

  return (
    <div className="body bg-[#f5f5f5] p-6 lg:px-20 pt-20 lg:pt-52 mt-[50px] flex flex-col gap-12">
      <div className="flex sm:flex-row flex-col align-middle items-center justify-between gap-20 mx-auto z-10">
        <div className="sm:text-3xl">PLANS & PRICING</div>
        <div className="flex align-middle items-center justify-between gap-8">
          <h3>MONTHLY</h3>
          <div
            className={`relative w-14 h-8 bg-[#00b289] rounded-3xl flex align-middle items-center px-1 hover:cursor-pointer`}
          >
            <div
              onClick={handleToggle}
              className={`absolute left-1 w-7 h-7 bg-white rounded-full hover:cursor-pointer ${
                card ? "toggle" : "toggle-off"
              }`}
            ></div>
          </div>
          <h3>YEARLY</h3>
        </div>
      </div>

      {/* Card section */}
      <div className="flex lg:flex-row flex-col justify-between gap-5 sm:p-0 z-10 w-full">
        <Card
          card={card}
          title="Starter"
          text="Ideal for freelancers and contractors just starting out."
          priceM={24}
          priceY={17}
          features={[
            "All Templates",
            "Unlimited Clients & Projects",
            "Invoicing & Payments",
            "Proposals & Contracts",
            "Tasks & Time Tracking",
            "Client CRM",
            "Expense Tracking",
            "Up to 5 Project Collaborators",
          ]}
          icon={<i class="bx bx-check"></i>}
        />
        <Card
          card={card}
          title="Professional"
          text="Everything a growing independent business needs to thrive."
          priceM={39}
          priceY={32}
          features={[
            "Everything in Starter plus...",
            "Custom Branding",
            "Forms & Questionnaires",
            "Workflow Automations",
            "Client Portal",
            "QuickBooks Integration",
            "Calendly Integration",
            "Zapier Integration",
            "Up to 15 Project Collaborators",
          ]}
          icon={<i class="bx bx-check"></i>}
        />
        <Card
          card={card}
          title="Business"
          text="The perfect package for small businesses and agencies."
          priceM={79}
          priceY={52}
          features={[
            "Everything in Starter and Professional plus...",
            "Subcontractor Management",
            "Hiring Agreement Templates (1099 contracts)",
            "Subcontractor Onboarding",
            "Talent Pool",
            "3 Team Seats (additional seats $9/month)",
            "Accountant Access",
            "Connect Multiple Bank Accounts",
            "Unlimited Subcontractors",
            "Unlimited Project Collaborators",
          ]}
          icon={<i class="bx bx-check"></i>}
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
