import React from "react";
import "./ShipmentReminders.css";

const ConfirmDelivery = () => {
  return (
    <div className="ShipmentReminders__cont">
      <div className="Reminders__cont">
        <ul>
          <li>
            <span>Lead Time</span>1 - 2 weeks
          </li>
          <li>
            <span>Metro Manila (via MCFA Express)</span>1 - 2 days
          </li>
          <li>
            <span>Cavite / Laguna / Rizal / Bulacan (via MCFA Express)</span>2 -
            4 days
          </li>
          <li>
            <span>Provincial</span>
            Delivers via LBC
          </li>
        </ul>
        <div className="DeliveryMessage__cont">
          <div className="Message1">
            <span>Kindly inform us once you received your orders</span>
            <span>so we can monitor delayed parcels and</span>
            <span> coordinate with our partner courier.</span>
          </div>
          <div className="Message2">
            <span>Thank you for shopping with us!</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDelivery;
