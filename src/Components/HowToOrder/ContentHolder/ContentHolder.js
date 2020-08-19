import React from "react";
import Personalize from "./Personalize/Personalize";
import SendDetails from "./SendDetails/SendDetails";
import Payment from "./Payment/Payment";
import ShipmentReminders from "./ShipmentReminders/ShipmentReminders";
import "./ContentHolder.css";

const ContentHolder = ({ stepCount }) => {
  const moveX = 100 - 100 * stepCount;

  const stepsCont = [
    {
      step: 1,
      procedure: "Choose your Product and Font",
      content: <Personalize />,
    },
    {
      step: 2,
      procedure: "Send Us Your Order Details",
      content: <SendDetails />,
    },
    {
      step: 3,
      procedure: "Send the Proof of Payment",
      content: <Payment />,
    },
    {
      step: 4,
      procedure: "Shipping Reminders",
      content: <ShipmentReminders />,
    },
  ];

  return (
    <div className="Content__cont">
      {stepsCont.map(({ step, procedure, content }) => (
        <div
          key={step}
          className="Content"
          style={{
            transform: `translateX(${moveX}%)`,
          }}
        >
          <div className="Content__title">{procedure}</div>
          {content}
        </div>
      ))}
    </div>
  );
};

export default ContentHolder;
