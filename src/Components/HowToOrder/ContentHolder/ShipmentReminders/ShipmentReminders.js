import React from "react";
import "./ShipmentReminders.css";

const ConfirmDelivery = () => {
  return (
    <div className="ShipmentReminders__cont">
      <div className="Reminders__cont">
        <ul>
          {/* <li>
            <span>Lead Time</span>1 - 2 weeks
          </li> */}
          <li>
            <span>Metro Manila</span>
            <span>2 - 3 days (via MCFA Express)</span>
            <span>50 - Small | 55 - Medium | 70 - Large</span>
          </li>
          <li>
            <span>Cavite / Laguna / Rizal / Bulacan (Selected Areas)</span>2 - 4
            days via (MCFA Express)
          </li>
          <li>
            <span>Provincial</span>
            <span>Delivers via LBC</span>
            <span>95 via COP (Cash on Pick-Up)</span>
          </li>
          <li>
            <span>Order Lead Time</span>1 week
          </li>
        </ul>
        <div className="DeliveryMessage__cont">
          {/* <div className="Message1">
            <span>Kindly inform us once you received your orders</span>
            <span>so we can monitor delayed parcels and</span>
            <span> coordinate with our partner couriers.</span>
          </div> */}
          <div className="Message2">
            <span>We also do shipping via Grab and LalaMove.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDelivery;
