import React, { useState } from "react";
import NavigationMain from "./NavigationMain/NavigationMain.js";
import NavigationMobile from "./NavigationMobile/NavigationMobile.js";
import Backdrop from "./Backdrop/Backdrop.js";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleNavLinks = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      {isMenuOpen && <Backdrop toggleMenu={toggleMenu} />}
      <NavigationMobile
        toggleNavLinks={toggleNavLinks}
        isMenuOpen={isMenuOpen}
      />
      <NavigationMain toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
    </div>
  );
};

export default Navigation;
