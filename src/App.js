import React, { useState, useEffect } from "react";
import Navigation from "./Components/Navigation//Navigation";
import Home from "./Components/Home/Home";
import ContactForm from "./Components/ContactForm/ContactForm";
import Personalize from "./Components/Personalize/Personalize";
import Products from "./Components/Products/Products";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";

function App() {
  const [hhData, sethhData] = useState({});
  const [isContactForm, setContactForm] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/hhmData.json");
      const data = await response.json();
      sethhData(data.main);
    };

    fetchData();
  }, []);

  const handleContactForm = (e) => {
    e.preventDefault();
    setContactForm(!isContactForm);
  };

  const exitContactForm = (e) => {
    const key = e.key || e.keyCode;

    if (e.target === e.currentTarget || key === "Escape" || key === 27) {
      if (window.confirm("Are you sure to cancel?")) {
        setContactForm(false);
      }
    }
  };

  return (
    <div className="App">
      <Navigation />
      <Home
        hhData={hhData}
        handleContactForm={handleContactForm}
        exitContactForm={exitContactForm}
      />
      {isContactForm && <ContactForm exitContactForm={exitContactForm} />}
      <Personalize />
      <Products />
      <About />
      <Footer handleContactForm={handleContactForm} />
    </div>
  );
}

export default App;
