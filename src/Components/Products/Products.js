import React, { useState } from "react";
import Modal from "./Modal/Modal";
import "./Products.css";

import Prod1 from "./img/product1.jpg";
import Prod2 from "./img/product2.jpg";
import Prod3 from "./img/product3.jpg";
import Prod4 from "./img/product4.jpg";
import Prod5 from "./img/product5.jpg";
import Prod6 from "./img/product6.jpg";
import Prod7 from "./img/product7.jpg";
import Prod8 from "./img/product8.jpg";
import Prod9 from "./img/product9.jpg";
import Prod10 from "./img/product10.jpg";
import Prod11 from "./img/product11.jpg";
import Prod12 from "./img/product12.jpg";

const imgCont = [
  { prodName: "chopping  board", prodImg: Prod1 },
  { prodName: "bamboo notebook", prodImg: Prod2 },
  { prodName: "product 3", prodImg: Prod3 },
  { prodName: "product 4", prodImg: Prod4 },
  { prodName: "product 5", prodImg: Prod5 },
  { prodName: "product 6", prodImg: Prod6 },
  { prodName: "product 7", prodImg: Prod7 },
  { prodName: "product 8", prodImg: Prod8 },
  { prodName: "product 9", prodImg: Prod9 },
  { prodName: "product 10", prodImg: Prod10 },
  { prodName: "product 11", prodImg: Prod11 },
  { prodName: "product 12", prodImg: Prod12 },
];

function Products() {
  const [isModal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!isModal);
  };

  const exitModal = (e) => {
    (e.target === e.currentTarget || e.keyCode === 27) && setModal(false);
  };

  return (
    <div id="products" className="Prod__Wrap">
      <div className="Grid__cont">
        {imgCont.map(({ prodName, prodImg }) => (
          <div key={prodName}>
            <div className="Grid__box" onClick={handleModal}>
              <img src={prodImg} alt={prodName} />
              <div className="Gridlabels__cont">
                <div className="GridLabelsItem__cont">
                  <p>{prodName}</p>
                  <div className="HL__cont">
                    {/* <div className="Heart">H E A R T</div>
                  <div className="Ddd">. . .</div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>{isModal && <Modal exitModal={exitModal} />}</div>
    </div>
  );
}

export default Products;

//grid container
//  grid box
//  grid labels container
//    label name
//    heart and like container
//      heart
//      like
