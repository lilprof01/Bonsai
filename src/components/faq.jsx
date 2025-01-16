import React, { useState } from "react";
import "boxicons";

const Faq = (props) => {
  const [show, setShow] = useState({});

  const handleShow = (number) => {
    setShow({
      ...show,
      [number]: !show[number],
    });
  };

  return (
    <div className="w-full">
      <div className="w-full flex flex-col justify-middle align-middle items-center gap-8 p-6 lg:px-40">
        <h2 className="text-2xl sm:text-3xl text-[#00b289] text-nowrap font-semibold">Frequently Asked Questions</h2>
        <div className="w-full flex flex-col justify-between items-center align-middle gap-6 font-serif">
          <div className="flex flex-col justify-between align-middle items-center gap-4 w-full">
            <div
              onClick={() => handleShow(1)}
              className="flex justify-between align-middle items-center w-full hover:text-[#00b289] hover:cursor-pointer"
            >
              <p className="text-xl sm:text-2xl font-semibold">
                How does the free trial work?
              </p>
              <i className="bx bx-md bx-chevron-down"></i>
            </div>
            {show[1] && (
              <div className="faq-text">
                <p>
                  When you start your trial with Bonsai you'll receive full,
                  unlimited access to all of Bonsai's Workflow or Workflow Plus
                  Features! You will need to enter your credit card information
                  to begin your trial, but don't worry - we won't charge you
                  anything until the subscription ends! If you wish to cancel at
                  any time during the trial period, you can do so through your
                  Subscriptions Settings Page.
                </p>
              </div>
            )}
          </div>
          <div className="flex flex-col justify-between align-middle items-center gap-4 w-full">
            <div
              onClick={() => handleShow(2)}
              className="flex justify-between align-middle items-center w-full hover:text-[#00b289] hover:cursor-pointer"
            >
              <p className="text-xl sm:text-2xl font-semibold">
                Can I change plans anytime?
              </p>
              <i className="bx bx-md bx-chevron-down"></i>
            </div>
            {show[2] && (
              <div className="faq-text">
                <p>
                  Yes, you can from within your account. If you have already
                  subscribed to a plan, or want to downgrade or upgrade your
                  current one, you can do this by going to your "Settings" and
                  "Subscription".
                </p>
              </div>
            )}
          </div>
          <div className="flex flex-col justify-between align-middle items-center gap-4 w-full">
            <div
              onClick={() => handleShow(3)}
              className="flex justify-between align-middle items-center w-full hover:text-[#00b289] hover:cursor-pointer"
            >
              <p className="text-xl sm:text-2xl font-semibold">
                How do I pause my Bonsai subscription?
              </p>
              <i className="bx bx-md bx-chevron-down"></i>
            </div>
            {show[3] && (
              <div className="faq-text">
                <p>
                  We totally understand that with the nature of freelancing,
                  work ebbs and flows so you might not always need your Bonsai
                  subscription to remain active! The good news is that you can
                  cancel or pause your monthly subscription at any time without
                  penalty. Once cancelled, you'll be able to continue logging in
                  to access all your documents and even continue to use our free
                  features, like Time Tracking! In order to cancel your
                  subscription, login to your Bonsai account.
                </p>
              </div>
            )}
          </div>
          <div className="flex flex-col justify-between align-middle items-center gap-4 w-full">
            <div
              onClick={() => handleShow(4)}
              className="flex justify-between align-middle items-center w-full hover:text-[#00b289] hover:cursor-pointer"
            >
              <p className="text-xl sm:text-2xl font-semibold">
                What is your refund policy?
              </p>
              <i className="bx bx-md bx-chevron-down"></i>
            </div>
            {show[4] && (
              <div className="faq-text">
                <p>
                  If you contact us within 2 weeks of being charged for your
                  subscription, we will be happy to issue a refund for
                  you!Beyond those 2 weeks, you will need to cancel or modify
                  the subscription from the Subscriptions Tab in Settings to
                  avoid future charges, but refunds will not be issued. This
                  applies to both monthly and annual plans.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
