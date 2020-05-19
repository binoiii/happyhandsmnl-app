import React, { useState } from "react";
import NavigationMain from "./NavigationMain/NavigationMain.js";
import NavigationMobile from "./NavigationMobile/NavigationMobile.js";
import Backdrop from "./Backdrop/Backdrop.js";

const Navigation = (props) => {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  const toggleMenu = () => {
    setisMenuOpen(!isMenuOpen);
  };

  const toggleNavLinks = () => {
    setisMenuOpen(false);
  };

  return (
    <div>
      {isMenuOpen && <Backdrop backDropToggle={toggleMenu} />}
      <NavigationMobile
        toggleNavLinks={toggleNavLinks}
        isMenuOpen={isMenuOpen}
      />
      <NavigationMain toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
    </div>
  );
};

export default Navigation;
