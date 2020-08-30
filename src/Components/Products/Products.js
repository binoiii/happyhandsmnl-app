import React, { useState } from "react";
import Modal from "./Modal/Modal";
import ImageHandler from "./ImageHandler/ImageHandler";
import "./Products.css";

import Flask1 from "./img/Products/Flask/Flask1.jpg";
import Flask2 from "./img/Products/Flask/Flask2.jpg";
import Flask3 from "./img/Products/Flask/Flask3.jpg";
import Flask4 from "./img/Products/Flask/Flask4.jpg";

import BambooTumbler1 from "./img/Products/BambooTumbler/BambooTumbler1.jpg";
import BambooTumbler2 from "./img/Products/BambooTumbler/BambooTumbler2.jpg";
import BambooTumbler3 from "./img/Products/BambooTumbler/BambooTumbler3.jpg";
import BambooTumbler4 from "./img/Products/BambooTumbler/BambooTumbler4.jpg";

import BambooUtensils1 from "./img/Products/BambooUtensils/BambooUtensils1.jpg";
import BambooUtensils2 from "./img/Products/BambooUtensils/BambooUtensils2.jpg";
import BambooUtensils3 from "./img/Products/BambooUtensils/BambooUtensils3.jpg";
import BambooUtensils4 from "./img/Products/BambooUtensils/BambooUtensils4.jpg";

import ChoppingBoard1 from "./img/Products/ChoppingBoard/ChoppingBoard1.jpg";
import ChoppingBoard2 from "./img/Products/ChoppingBoard/ChoppingBoard2.jpg";
import ChoppingBoard3 from "./img/Products/ChoppingBoard/ChoppingBoard3.jpg";
import ChoppingBoard4 from "./img/Products/ChoppingBoard/ChoppingBoard4.jpg";

import Bambaunan1 from "./img/Products/Bambaunan/Bambaunan1.jpg";
import Bambaunan2 from "./img/Products/Bambaunan/Bambaunan2.jpg";
import Bambaunan3 from "./img/Products/Bambaunan/Bambaunan3.jpg";
import Bambaunan4 from "./img/Products/Bambaunan/Bambaunan4.jpg";

import BambooPen1 from "./img/Products/BambooPen/BambooPen1.jpg";
import BambooPen2 from "./img/Products/BambooPen/BambooPen2.jpg";
import BambooPen3 from "./img/Products/BambooPen/BambooPen3.jpg";
import BambooPen4 from "./img/Products/BambooPen/BambooPen4.jpg";

import Shades1 from "./img/Products/Shades/Shades1.jpg";
import Shades2 from "./img/Products/Shades/Shades2.jpg";
import Shades3 from "./img/Products/Shades/Shades3.jpg";
import Shades4 from "./img/Products/Shades/Shades4.jpg";

import Mirror1 from "./img/Products/Mirror/Mirror1.jpg";
import Mirror2 from "./img/Products/Mirror/Mirror2.jpg";
import Mirror3 from "./img/Products/Mirror/Mirror3.jpg";
import Mirror4 from "./img/Products/Mirror/Mirror4.jpg";

import Brush1 from "./img/Products/Brush/Brush1.jpg";
import Brush2 from "./img/Products/Brush/Brush2.jpg";
import Brush3 from "./img/Products/Brush/Brush3.jpg";
import Brush4 from "./img/Products/Brush/Brush4.jpg";

import BottleOpener1 from "./img/Products/BottleOpener/BottleOpener1.jpg";
import BottleOpener2 from "./img/Products/BottleOpener/BottleOpener2.jpg";
import BottleOpener3 from "./img/Products/BottleOpener/BottleOpener3.jpg";
import BottleOpener4 from "./img/Products/BottleOpener/BottleOpener4.jpg";

import BambooNB1 from "./img/Products/BambooNB/BambooNB1.jpg";
import BambooNB2 from "./img/Products/BambooNB/BambooNB2.jpg";
import BambooNB3 from "./img/Products/BambooNB/BambooNB3.jpg";
import BambooNB4 from "./img/Products/BambooNB/BambooNB4.jpg";

import CellphoneStand1 from "./img/Products/CellphoneStand/CellphoneStand1.jpg";
import CellphoneStand2 from "./img/Products/CellphoneStand/CellphoneStand2.jpg";
import CellphoneStand3 from "./img/Products/CellphoneStand/CellphoneStand3.jpg";
import CellphoneStand4 from "./img/Products/CellphoneStand/CellphoneStand4.jpg";

import WoodenSpeakers1 from "./img/Products/WoodenSpeakers/WoodenSpeakers1.jpg";
import WoodenSpeakers2 from "./img/Products/WoodenSpeakers/WoodenSpeakers2.jpg";
import WoodenSpeakers3 from "./img/Products/WoodenSpeakers/WoodenSpeakers3.jpg";
import WoodenSpeakers4 from "./img/Products/WoodenSpeakers/WoodenSpeakers4.jpg";

import BambooToothBrush1 from "./img/Products/BambooToothBrush/BambooToothBrush1.jpg";
import BambooToothBrush2 from "./img/Products/BambooToothBrush/BambooToothBrush2.jpg";
import BambooToothBrush3 from "./img/Products/BambooToothBrush/BambooToothBrush3.jpg";
import BambooToothBrush4 from "./img/Products/BambooToothBrush/BambooToothBrush4.jpg";

import CombMen1 from "./img/Products/CombMen/CombMen1.jpg";
import CombMen2 from "./img/Products/CombMen/CombMen2.jpg";
import CombMen3 from "./img/Products/CombMen/CombMen3.jpg";
import CombMen4 from "./img/Products/CombMen/CombMen4.jpg";

import CombWomen1 from "./img/Products/CombWomen/CombWomen1.jpg";
import CombWomen2 from "./img/Products/CombWomen/CombWomen2.jpg";
import CombWomen3 from "./img/Products/CombWomen/CombWomen3.jpg";
import CombWomen4 from "./img/Products/CombWomen/CombWomen4.jpg";

import PaddleBrush1 from "./img/Products/PaddleBrush/PaddleBrush1.jpg";
import PaddleBrush2 from "./img/Products/PaddleBrush/PaddleBrush2.jpg";
import PaddleBrush3 from "./img/Products/PaddleBrush/PaddleBrush3.jpg";
import PaddleBrush4 from "./img/Products/PaddleBrush/PaddleBrush4.jpg";

import Straw1 from "./img/Products/Straw/Straw1.jpg";
import Straw2 from "./img/Products/Straw/Straw2.jpg";
import Straw3 from "./img/Products/Straw/Straw3.jpg";
import Straw4 from "./img/Products/Straw/Straw4.jpg";

import Tumbler1 from "./img/Products/Tumbler/Tumbler1.jpg";
import Tumbler2 from "./img/Products/Tumbler/Tumbler2.jpg";
import Tumbler3 from "./img/Products/Tumbler/Tumbler3.jpg";
import Tumbler4 from "./img/Products/Tumbler/Tumbler4.jpg";

import Tag1 from "./img/Products/Tag/Tag1.jpg";
import Tag2 from "./img/Products/Tag/Tag2.jpg";
import Tag3 from "./img/Products/Tag/Tag3.jpg";
import Tag4 from "./img/Products/Tag/Tag4.jpg";

import PassportHolder1 from "./img/Products/PassportHolder/PassportHolder1.jpg";
import PassportHolder2 from "./img/Products/PassportHolder/PassportHolder2.jpg";
import PassportHolder3 from "./img/Products/PassportHolder/PassportHolder3.jpg";
import PassportHolder4 from "./img/Products/PassportHolder/PassportHolder4.jpg";

import ChordOrganizerA1 from "./img/Products/ChordOrganizerA/ChordOrganizerA1.jpg";
import ChordOrganizerA2 from "./img/Products/ChordOrganizerA/ChordOrganizerA2.jpg";
import ChordOrganizerA3 from "./img/Products/ChordOrganizerA/ChordOrganizerA3.jpg";
import ChordOrganizerA4 from "./img/Products/ChordOrganizerA/ChordOrganizerA4.jpg";

import ChordOrganizerB1 from "./img/Products/ChordOrganizerB/ChordOrganizerB1.jpg";
import ChordOrganizerB2 from "./img/Products/ChordOrganizerB/ChordOrganizerB2.jpg";
import ChordOrganizerB3 from "./img/Products/ChordOrganizerB/ChordOrganizerB3.jpg";
import ChordOrganizerB4 from "./img/Products/ChordOrganizerB/ChordOrganizerB4.jpg";

import Wallet21 from "./img/Products/Wallet2/Wallet21.jpg";
import Wallet22 from "./img/Products/Wallet2/Wallet22.jpg";
import Wallet23 from "./img/Products/Wallet2/Wallet23.jpg";
import Wallet24 from "./img/Products/Wallet2/Wallet24.jpg";

import Wallet1 from "./img/Products/Wallet/Wallet1.jpg";
import Wallet2 from "./img/Products/Wallet/Wallet2.jpg";
import Wallet3 from "./img/Products/Wallet/Wallet3.jpg";
import Wallet4 from "./img/Products/Wallet/Wallet4.jpg";

import CoinPurse1 from "./img/Products/CoinPurse/CoinPurse1.jpg";
import CoinPurse2 from "./img/Products/CoinPurse/CoinPurse2.jpg";
import CoinPurse3 from "./img/Products/CoinPurse/CoinPurse3.jpg";
import CoinPurse4 from "./img/Products/CoinPurse/CoinPurse4.jpg";

const imgCont = [
  {
    prodName: "Flask Set",
    prodImgCont: [Flask1, Flask2, Flask3, Flask4],
    prodDescription: ["9oz", "with Free Box Engrave"],
  },

  {
    prodName: "Bamboo Tumbler",
    prodImgCont: [
      BambooTumbler1,
      BambooTumbler2,
      BambooTumbler3,
      BambooTumbler4,
    ],
    prodDescription: [
      "350ml / 450ml with Tea Infuser",
      "10-12 Hours for Hot / Cold",
    ],
  },
  {
    prodName: "Bambootensils",
    prodImgCont: [
      BambooUtensils3,
      BambooUtensils2,
      BambooUtensils1,
      BambooUtensils4,
    ],
    prodDescription: ["Spoon, Fork and Knife", "with Free White Pouch"],
  },

  {
    prodName: "Bamboo Notebook",
    prodImgCont: [BambooNB1, BambooNB2, BambooNB3, BambooNB4],
    prodDescription: ["70 Leaves", "Crumple-Free Cover"],
  },

  {
    prodName: "Bamboo Chopping Board",
    prodImgCont: [
      ChoppingBoard1,
      ChoppingBoard2,
      ChoppingBoard3,
      ChoppingBoard4,
    ],
    prodDescription: ['11" x 7" x 0.5"', "with Stainless Ring Hook on Top"],
  },

  {
    prodName: "Bambaunan Bento Lunch Box",
    prodImgCont: [Bambaunan1, Bambaunan2, Bambaunan3, Bambaunan4],
    prodDescription: [
      '4.5" x 6.5" x 2.5"',
      "Made from Bamboo and Stainless Steel",
    ],
  },

  {
    prodName: "Bamboo Pen",
    prodImgCont: [BambooPen1, BambooPen2, BambooPen3, BambooPen4],
    prodDescription: ["Black Ink", "can be with Case"],
  },

  {
    prodName: "Bamboo Sunglasses",
    prodImgCont: [Shades1, Shades2, Shades3, Shades4],
    prodDescription: ["Bamboo Temples", "with Free Black Pouch"],
  },

  {
    prodName: "Wooden Bottle Opener",
    prodImgCont: [BottleOpener1, BottleOpener2, BottleOpener3, BottleOpener4],
    prodDescription: ['5.5" x 1"', "made of Solid Wood and Metal"],
  },

  {
    prodName: "Wooden Mirror",
    prodImgCont: [Mirror1, Mirror2, Mirror3, Mirror4],
    prodDescription: ['6" x 3"', "Handy and Portable Mirror"],
  },

  {
    prodName: "Mini Brush",
    prodImgCont: [Brush1, Brush2, Brush3, Brush4],
    prodDescription: ['6" x 2"', "with Soft Bristle"],
  },

  {
    prodName: "Wooden Phone Stand Keychain",
    prodImgCont: [
      CellphoneStand1,
      CellphoneStand2,
      CellphoneStand3,
      CellphoneStand4,
    ],
    prodDescription: ['3.9" x 1"', "Handy and Portable Cellphone Stand"],
  },

  {
    prodName: "Wooden Speaker & Phone Holder",
    prodImgCont: [
      WoodenSpeakers1,
      WoodenSpeakers2,
      WoodenSpeakers3,
      WoodenSpeakers4,
    ],
    prodDescription: ['2.8" x 4" x 2"', "on the go Speakers"],
  },

  {
    prodName: "Bamboo Toothbrush",
    prodImgCont: [
      BambooToothBrush1,
      BambooToothBrush2,
      BambooToothBrush3,
      BambooToothBrush4,
    ],
    prodDescription: ["Soft Bristle ", "Charcoal Infused"],
  },

  {
    prodName: "Comb for Gents",
    prodImgCont: [CombMen1, CombMen2, CombMen3, CombMen4],
    prodDescription: ['7" x 2"', "Groom's Men Favorite"],
  },

  {
    prodName: "Comb with Handle",
    prodImgCont: [CombWomen1, CombWomen2, CombWomen3, CombWomen4],
    prodDescription: ['6"', "Bride's Maid Favorite"],
  },

  {
    prodName: "Paddle Brush",
    prodImgCont: [PaddleBrush1, PaddleBrush2, PaddleBrush3, PaddleBrush4],
    prodDescription: ['10"x 3"', "Gentle to the Scalp"],
  },

  {
    prodName: "Stainless Straw Set",
    prodImgCont: [Straw1, Straw2, Straw3, Straw4],
    prodDescription: [
      "Multipurpose Straws, Brush Cleaner ",
      "with Free White Pouch",
    ],
  },

  {
    prodName: "Metal Vaccum Tumbler",
    prodImgCont: [Tumbler2, Tumbler4, Tumbler3, Tumbler1],
    prodDescription: ["450ml with Tea Infuser", "8-10 Hours for Hot / Cold"],
  },

  {
    prodName: "Leather Keyholder",
    prodImgCont: [Tag1, Tag2, Tag3, Tag4],
    prodDescription: ['4.5"', "Stlyish Leather"],
  },

  {
    prodName: "Leather Passport Holder",
    prodImgCont: [
      PassportHolder1,
      PassportHolder2,
      PassportHolder3,
      PassportHolder4,
    ],
    prodDescription: ['5.9" x 4"', "with Pocket Provision for Cash and Cards"],
  },

  {
    prodName: "Cord Organizer",
    prodImgCont: [
      ChordOrganizerA1,
      ChordOrganizerA2,
      ChordOrganizerA3,
      ChordOrganizerA4,
    ],
    prodDescription: ['2.4" x 1.8"', "Traveller's Essential"],
  },

  {
    prodName: "Cable Keeper",
    prodImgCont: [
      ChordOrganizerB1,
      ChordOrganizerB2,
      ChordOrganizerB3,
      ChordOrganizerB4,
    ],
    prodDescription: ['2.4" x 1.8"', "Reduces Cable Clutter"],
  },

  {
    prodName: "Long Wallet",
    prodImgCont: [Wallet21, Wallet22, Wallet23, Wallet24],
    prodDescription: ['4" x 7.9"', "can hold Phone, Cash, Cards and Coins"],
  },

  {
    prodName: "Handy Wallet",
    prodImgCont: [Wallet1, Wallet2, Wallet3, Wallet4],
    prodDescription: ['3.5" x 4.5"', "with Pockets for Cash / Cards"],
  },

  {
    prodName: "Coin Purse",
    prodImgCont: [CoinPurse1, CoinPurse2, CoinPurse3, CoinPurse4],
    prodDescription: ['3.2" x 3.6"', "Handy and Slick"],
  },
];

function Products() {
  const [isModal, setModal] = useState(false);
  const [productCount, setProductCount] = useState(null);

  const handleModal = (e) => {
    setModal(!isModal);
    setProductCount(e.target.className);
  };

  const exitModal = (e) => {
    const key = e.key || e.keyCode;

    if (e.target === e.currentTarget || key === "Escape" || key === 27) {
      setModal(false);
    }
  };

  return (
    <div id="products" className="Prod__Wrap">
      <div className="Grid__cont">
        {imgCont.map(({ prodName, prodImgCont }, index) => (
          <ImageHandler
            key={index}
            prodName={prodName}
            prodImgCont={prodImgCont}
            handleModal={handleModal}
            index={index}
          />
        ))}
      </div>

      <div>
        {isModal && (
          <Modal
            exitModal={exitModal}
            prodImages={imgCont[productCount].prodImgCont}
            prodName={imgCont[productCount].prodName}
            prodDescription={imgCont[productCount].prodDescription}
          />
        )}
      </div>
    </div>
  );
}

export default Products;
