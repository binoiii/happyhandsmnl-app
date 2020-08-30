import React from "react";
import "./Payment.css";

import bpi from "./img/bpi.jpg";
import bpi_qr from "./img/bpi-qr.png";
import gcash from "./img/gcash.jpg";
import we_palawan_cebuana from "./img/we_palawan_cebuana.jpg";

const Payment = () => {
  const partnerMerchants = [
    {
      merchant: "bpi",
      logo: bpi,
      details: { description: "bpi_qr", qr: bpi_qr, profile: "3399-3908-33" },
    },
    {
      merchant: "gcash",
      logo: gcash,
      details: { qr: "", profile: "0915-344-9219" },
    },
    {
      merchant: "wu-cebuana-palawan",
      logo: we_palawan_cebuana,
      details: {
        profile: {
          name: "June Anne Nepomuceno",
          address: "1341 M. Naval St., San Roque, Navotas",
          number: "0915-344-9219",
        },
      },
    },
  ];

  return (
    <div className="Payment__cont">
      <div className="Merchants__cont">
        {partnerMerchants.map(
          ({ merchant, logo, details: { qr, profile, description } }) => (
            <div className="Merchant__cont" key={merchant}>
              <img className="Merchant__logo" src={logo} alt={merchant} />
              <div className="Details__cont">
                {merchant === "bpi" || merchant === "gcash" ? (
                  <>
                    <img src={qr} alt={description} />
                    <div className="Detail__cont">{profile}</div>
                  </>
                ) : (
                  <>
                    <div className="Detail__cont">{profile.name}</div>
                    <div className="Detail__cont">{profile.address}</div>
                    <div className="Detail__cont">{profile.number}</div>
                  </>
                )}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Payment;
