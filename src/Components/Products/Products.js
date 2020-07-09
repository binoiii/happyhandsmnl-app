import React, { useState } from "react";
import Modal from "./Modal/Modal";
import "./Products.css";

/* Direct Import for Local Environment */

import Prod1_1 from "./img/Products/1_Bambaunan/Bambaunan1.jpg";
import Prod1_2 from "./img/Products/1_Bambaunan/Bambaunan2.jpg";
import Prod1_3 from "./img/Products/1_Bambaunan/Bambaunan3.jpg";
import Prod1_4 from "./img/Products/1_Bambaunan/Bambaunan4.jpg";

import Prod2_1 from "./img/Products/2_BambooUtensils/BambooUtensils1.jpg";
import Prod2_2 from "./img/Products/2_BambooUtensils/BambooUtensils2.jpg";
import Prod2_3 from "./img/Products/2_BambooUtensils/BambooUtensils3.jpg";
import Prod2_4 from "./img/Products/2_BambooUtensils/BambooUtensils4.jpg";

import Prod3_1 from "./img/Products/3_ChoppingBoard/ChoppingBoard1.jpg";
import Prod3_2 from "./img/Products/3_ChoppingBoard/ChoppingBoard2.jpg";
import Prod3_3 from "./img/Products/3_ChoppingBoard/ChoppingBoard3.jpg";
import Prod3_4 from "./img/Products/3_ChoppingBoard/ChoppingBoard4.jpg";

// import Prod4_1 from "./img/Products/5_BambooPen/BambooPen1.jpg";
// import Prod4_2 from "./img/Products/5_BambooPen/BambooPen2.jpg";
// import Prod4_3 from "./img/Products/5_BambooPen/BambooPen3.jpg";
// import Prod4_4 from "./img/Products/5_BambooPen/BambooPen4.jpg";

import Prod5_1 from "./img/Products/5_BambooPen/BambooPen1.jpg";
import Prod5_2 from "./img/Products/5_BambooPen/BambooPen2.jpg";
import Prod5_3 from "./img/Products/5_BambooPen/BambooPen3.jpg";
import Prod5_4 from "./img/Products/5_BambooPen/BambooPen4.jpg";

import Prod6_1 from "./img/Products/6_Shades/Shades1.jpg";
import Prod6_2 from "./img/Products/6_Shades/Shades2.jpg";
import Prod6_3 from "./img/Products/6_Shades/Shades3.jpg";
import Prod6_4 from "./img/Products/6_Shades/Shades4.jpg";

import Prod7_1 from "./img/Products/7_BambooNB/BambooNB1.jpg";
import Prod7_2 from "./img/Products/7_BambooNB/BambooNB2.jpg";
import Prod7_3 from "./img/Products/7_BambooNB/BambooNB3.jpg";
import Prod7_4 from "./img/Products/7_BambooNB/BambooNB4.jpg";

import Prod8_1 from "./img/Products/8_Brush/Brush1.jpg";
import Prod8_2 from "./img/Products/8_Brush/Brush2.jpg";
import Prod8_3 from "./img/Products/8_Brush/Brush3.jpg";
import Prod8_4 from "./img/Products/8_Brush/Brush4.jpg";

// import Prod9_1 from "./img/Products/9_BottleOpenner/Brush1.jpg";
// import Prod9_2 from "./img/Products/9_BottleOpenner/Brush2.jpg";
// import Prod9_3 from "./img/Products/9_BottleOpenner/Brush3.jpg";
// import Prod9_4 from "./img/Products/9_BottleOpenner/Brush4.jpg";

import Prod10_1 from "./img/Products/10_CellphoneStand/CellphoneStand1.jpg";
import Prod10_2 from "./img/Products/10_CellphoneStand/CellphoneStand2.jpg";
import Prod10_3 from "./img/Products/10_CellphoneStand/CellphoneStand3.jpg";
import Prod10_4 from "./img/Products/10_CellphoneStand/CellphoneStand4.jpg";

import Prod11_1 from "./img/Products/11_WoodenSpeakers/WoodenSpeakers1.jpg";
import Prod11_2 from "./img/Products/11_WoodenSpeakers/WoodenSpeakers2.jpg";
import Prod11_3 from "./img/Products/11_WoodenSpeakers/WoodenSpeakers3.jpg";
import Prod11_4 from "./img/Products/11_WoodenSpeakers/WoodenSpeakers4.jpg";

import Prod12_1 from "./img/Products/12_BambooToothBrush/BambooToothBrush1.jpg";
import Prod12_2 from "./img/Products/12_BambooToothBrush/BambooToothBrush2.jpg";
import Prod12_3 from "./img/Products/12_BambooToothBrush/BambooToothBrush3.jpg";
import Prod12_4 from "./img/Products/12_BambooToothBrush/BambooToothBrush4.jpg";

import Prod13_1 from "./img/Products/13_CombMen/CombMen1.jpg";
import Prod13_2 from "./img/Products/13_CombMen/CombMen2.jpg";
import Prod13_3 from "./img/Products/13_CombMen/CombMen3.jpg";
import Prod13_4 from "./img/Products/13_CombMen/CombMen4.jpg";

import Prod14_1 from "./img/Products/14_CombWomen/CombWomen1.jpg";
import Prod14_2 from "./img/Products/14_CombWomen/CombWomen2.jpg";
import Prod14_3 from "./img/Products/14_CombWomen/CombWomen3.jpg";
import Prod14_4 from "./img/Products/14_CombWomen/CombWomen4.jpg";

import Prod15_1 from "./img/Products/15_PaddleBrush/PaddleBrush1.jpg";
import Prod15_2 from "./img/Products/15_PaddleBrush/PaddleBrush2.jpg";
import Prod15_3 from "./img/Products/15_PaddleBrush/PaddleBrush3.jpg";
import Prod15_4 from "./img/Products/15_PaddleBrush/PaddleBrush4.jpg";

import Prod16_1 from "./img/Products/16_Straw/Straw1.jpg";
import Prod16_2 from "./img/Products/16_Straw/Straw2.jpg";
import Prod16_3 from "./img/Products/16_Straw/Straw3.jpg";
import Prod16_4 from "./img/Products/16_Straw/Straw4.jpg";

import Prod17_1 from "./img/Products/17_Tumbler/Tumbler1.jpg";
import Prod17_2 from "./img/Products/17_Tumbler/Tumbler2.jpg";
import Prod17_3 from "./img/Products/17_Tumbler/Tumbler3.jpg";
import Prod17_4 from "./img/Products/17_Tumbler/Tumbler4.jpg";

import Prod18_1 from "./img/Products/18_Tag/Tag1.jpg";
import Prod18_2 from "./img/Products/18_Tag/Tag2.jpg";
import Prod18_3 from "./img/Products/18_Tag/Tag3.jpg";
import Prod18_4 from "./img/Products/18_Tag/Tag4.jpg";

import Prod19_1 from "./img/Products/19_PassportHolder/PassportHolder1.jpg";
import Prod19_2 from "./img/Products/19_PassportHolder/PassportHolder2.jpg";
import Prod19_3 from "./img/Products/19_PassportHolder/PassportHolder3.jpg";
import Prod19_4 from "./img/Products/19_PassportHolder/PassportHolder4.jpg";

import Prod20_1 from "./img/Products/20_ChordOrganizerA/ChordOrganizerA1.jpg";
import Prod20_2 from "./img/Products/20_ChordOrganizerA/ChordOrganizerA2.jpg";
import Prod20_3 from "./img/Products/20_ChordOrganizerA/ChordOrganizerA3.jpg";
import Prod20_4 from "./img/Products/20_ChordOrganizerA/ChordOrganizerA4.jpg";

import Prod21_1 from "./img/Products/21_ChordOrganizerB/ChordOrganizerB1.jpg";
import Prod21_2 from "./img/Products/21_ChordOrganizerB/ChordOrganizerB2.jpg";
import Prod21_3 from "./img/Products/21_ChordOrganizerB/ChordOrganizerB3.jpg";
import Prod21_4 from "./img/Products/21_ChordOrganizerB/ChordOrganizerB4.jpg";

import Prod22_1 from "./img/Products/22_Wallet2/Wallet21.jpg";
import Prod22_2 from "./img/Products/22_Wallet2/Wallet22.jpg";
import Prod22_3 from "./img/Products/22_Wallet2/Wallet23.jpg";
import Prod22_4 from "./img/Products/22_Wallet2/Wallet24.jpg";

import Prod23_1 from "./img/Products/23_Wallet/Wallet1.jpg";
import Prod23_2 from "./img/Products/23_Wallet/Wallet2.jpg";
import Prod23_3 from "./img/Products/23_Wallet/Wallet3.jpg";
import Prod23_4 from "./img/Products/23_Wallet/Wallet4.jpg";

import Prod24_1 from "./img/Products/24_CoinPurse/CoinPurse1.jpg";
import Prod24_2 from "./img/Products/24_CoinPurse/CoinPurse2.jpg";
import Prod24_3 from "./img/Products/24_CoinPurse/CoinPurse3.jpg";
import Prod24_4 from "./img/Products/24_CoinPurse/CoinPurse4.jpg";

const imgCont = [
  {
    index: 0,
    prodName: "bamboo tumbler",
    prodImgCont: [Prod1_1, Prod1_2, Prod1_3, Prod1_4],
  },
  {
    index: 1,
    prodName: "bambootensils",
    prodImgCont: [Prod2_1, Prod2_2, Prod2_3, Prod2_4],
  },

  {
    index: 2,
    prodName: "bamboo-chopping board",
    prodImgCont: [Prod3_1, Prod3_2, Prod3_3, Prod3_4],
  },

  {
    index: 3,
    prodName: "bamboo-unan",
    prodImgCont: [Prod1_1, Prod1_2, Prod1_3, Prod1_4],
  },

  {
    index: 4,
    prodName: "bamboo pen",
    prodImgCont: [Prod5_1, Prod5_2, Prod5_3, Prod5_4],
  },

  {
    index: 5,
    prodName: "bamboo shades",
    prodImgCont: [Prod6_1, Prod6_2, Prod6_3, Prod6_4],
  },

  {
    index: 6,
    prodName: "bamboo notebook",
    prodImgCont: [Prod7_1, Prod7_2, Prod7_3, Prod7_4],
  },

  {
    index: 7,
    prodName: "wooden brush",
    prodImgCont: [Prod8_1, Prod8_2, Prod8_3, Prod8_4],
  },

  {
    index: 8,
    prodName: "bottle opener",
    prodImgCont: [Prod8_1, Prod8_2, Prod8_3, Prod8_4],
  },

  {
    index: 9,
    prodName: "cellphone stand",
    prodImgCont: [Prod10_1, Prod10_2, Prod10_3, Prod10_4],
  },

  {
    index: 10,
    prodName: "wooden speakers",
    prodImgCont: [Prod11_1, Prod11_2, Prod11_3, Prod11_4],
  },

  {
    index: 11,
    prodName: "bamboo toothbrush",
    prodImgCont: [Prod12_1, Prod12_2, Prod12_3, Prod12_4],
  },

  {
    index: 12,
    prodName: "comb-men",
    prodImgCont: [Prod13_1, Prod13_2, Prod13_3, Prod13_4],
  },

  {
    index: 13,
    prodName: "comb-women",
    prodImgCont: [Prod14_1, Prod14_2, Prod14_3, Prod14_4],
  },

  {
    index: 14,
    prodName: "paddle brush",
    prodImgCont: [Prod15_1, Prod15_2, Prod15_3, Prod15_4],
  },

  {
    index: 15,
    prodName: "Metal Straw",
    prodImgCont: [Prod16_1, Prod16_2, Prod16_3, Prod16_4],
  },

  {
    index: 16,
    prodName: "tumbler",
    prodImgCont: [Prod17_1, Prod17_2, Prod17_3, Prod17_4],
  },

  {
    index: 17,
    prodName: "leather key chain",
    prodImgCont: [Prod18_1, Prod18_2, Prod18_3, Prod18_4],
  },

  {
    index: 18,
    prodName: "passport holder",
    prodImgCont: [Prod19_1, Prod19_2, Prod19_3, Prod19_4],
  },

  {
    index: 19,
    prodName: "chord organizer - a",
    prodImgCont: [Prod20_1, Prod20_2, Prod20_3, Prod20_4],
  },

  {
    index: 20,
    prodName: "chord organizer - b",
    prodImgCont: [Prod21_1, Prod21_2, Prod21_3, Prod21_4],
  },

  {
    index: 21,
    prodName: "long wallet",
    prodImgCont: [Prod22_1, Prod22_2, Prod22_3, Prod22_4],
  },

  {
    index: 22,
    prodName: "wallet",
    prodImgCont: [Prod23_1, Prod23_2, Prod23_3, Prod23_4],
  },

  {
    index: 23,
    prodName: "coin purse",
    prodImgCont: [Prod24_1, Prod24_2, Prod24_3, Prod24_4],
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
        {imgCont.map(({ index, prodName, prodImgCont }) => (
          <div className="Grid__box" key={index}>
            <img src={prodImgCont[0]} alt={prodName} />

            <div className="Gridlabels__cont" id={index}>
              <div className="GridLabelsItem__cont">
                <div className={index} onClick={handleModal}>
                  {prodName}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div>
        {isModal && (
          <Modal
            exitModal={exitModal}
            prodImages={imgCont[productCount].prodImgCont}
          />
        )}
      </div>
    </div>
  );
}

export default Products;
