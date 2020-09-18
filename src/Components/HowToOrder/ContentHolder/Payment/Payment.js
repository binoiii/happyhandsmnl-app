import React from "react";
import "./Payment.css";

import bpi_logo from "./img/bpi.jpg";
import bpi_qr from "./img/bpi-qr.jpg";
import gcash_pal_wu_ceb_logo from "./img/gcash-pal-wu-ceb.jpg";

const Payment = () => {
  //       profile: {
  //         name: "June Anne Nepomuceno",
  //         address: "1341 M. Naval St., San Roque, Navotas",
  //         number: "0915-344-9219",
  //       },

  return (
    <div className="Payment__cont">
      <div className="Merchants__cont">
        <img src={bpi_logo} alt="bpi_logo" className="bpi_logo" />
        <div className="account_number">4349-1085-13</div>
        <img src={bpi_qr} alt="bpi_logo" className="Merchant_qr" />
      </div>
      <div className="Merchants__cont">
        <img
          src={gcash_pal_wu_ceb_logo}
          alt="gcash_pal_wu_ceb_logo"
          className="multi_logo"
        />
        <div className="Merchant_details">
          <ul>
            <li>June Anne Nepomuceno</li>
            <li>0915-344-9219</li>
            <li>1341 M. Naval St. San Roque Navotas</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Payment;
