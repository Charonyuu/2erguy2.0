import React from "react";
import VisitorOneHeader from "./components/VisitorOneHeader";
import VisitorTwoSection from "./components/VisitorTwoSection";
import VisitorThirdSection from "./components/VisitorThirdSection";
import VisitorFourSection from "./components/VisitorFourSection";
import VisitorFiveSection from "./components/VisitorFiveSection";
import VisitorSixSection from "./components/VisitorSixSection";


const VisitorOne = () => {
  return (
    <>
      <VisitorOneHeader />
      <VisitorTwoSection />
      <VisitorThirdSection />
      <VisitorFourSection />
      <VisitorFiveSection />
      <VisitorSixSection />
    </>
  );
};

export default VisitorOne;
