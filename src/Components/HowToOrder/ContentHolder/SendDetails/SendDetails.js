import React from "react";
import "./SendDetails.css";

const SendDetails = () => {
  return (
    <div className="SendDetails__cont">
      <div className="Steps__cont">
        <ul>
          <li>1. Fill-out order details.</li>
          <li>2. Send it to us to confirm prior to payment.</li>
          <li>3. Once confirmed, proceed to payment.</li>
        </ul>
      </div>
      <div className="SampleDetails__cont">
        <div>Example:</div>
        <ul className="Example__cont">
          <div className="Example1__cont">
            <li>
              <span>Product 1:</span> Bamboo Tumbler
            </li>
            <li>
              <span>Font:</span> Citrica
            </li>
            <li>
              <span>Name to Engrave:</span> Franny
            </li>
            <li>
              <span>Logo to Engrave:</span> Franny.jpg (Please see attached)
            </li>
          </div>
        </ul>
        <div className="ShippingDetails__cont">
          <ul>
            <li>
              <span>Complete Name:</span> Lonzo Dela Cruz
            </li>
            <li>
              <span>Complete Address:</span> 1101 Forbes St. Bel Air Makati
            </li>
            <li>
              <span>Contact Number:</span> 09172101112
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SendDetails;
