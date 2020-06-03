import React, { useState, useEffect } from "react";
import Navigation from "./Components/Navigation//Navigation";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Products from "./Components/Products/Products";
import Personalize from "./Components/Personalize/Personalize";

function App() {
  const [hhData, sethhData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const setData = await fetch("/hhmData.json").then((res) => res.json());
      sethhData(setData);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <Navigation />
      <Home data={hhData.main} />
      <Personalize />
      <Products />
      <About />
    </div>
  );
}

export default App;
