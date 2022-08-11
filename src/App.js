import React from "react";
import BuySell from "./components/BuyerSeller/BuySell";
import Clientreview from "./components/Clientreview/Clientreview";
import FindHome from "./components/FindHome/FindHome";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Quote from "./components/Quote/Quote";
import Location from "./components/Location/Location";

const App = () => {
  return (
    <div>
      <Hero />
      <BuySell />
      <FindHome />
      <Quote />
      <Clientreview />
      <Location />
      <Footer />
    </div>
  );
};

export default App;
