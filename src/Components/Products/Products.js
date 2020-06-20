import React, { useState } from "react";
import Modal from "./Modal/Modal";
import "./Products.css";

/* Direct Import for Local Environment */
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
  { index: 0, prodName: "chopping  board", prodImgCont: [Prod1, Prod2, Prod3] },
  { index: 1, prodName: "paddle brush", prodImgCont: [Prod4, Prod5, Prod6] },
  { index: 2, prodName: "bambaunan", prodImgCont: [Prod7, Prod8, Prod9] },
  { index: 3, prodName: "pacakages", prodImgCont: [Prod10, Prod11, Prod12] },
];

function Products() {
  const [isModal, setModal] = useState(false);
  const [prodCount, setProdCount] = useState(null);

  const handleModal = (e) => {
    setModal(!isModal);
    setProdCount(e.target.className);
  };

  const exitModal = (e) => {
    const key = e.key || e.keyCode;
    (e.target === e.currentTarget || key === "Escape" || key === 27) &&
      setModal(false);
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
            prodImages={imgCont[prodCount].prodImgCont}
          />
        )}
      </div>
    </div>
  );
}

export default Products;
