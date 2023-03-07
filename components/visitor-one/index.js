import React from "react";
import VisitorOneHeader from "./components/VisitorOneHeader";
import VisitorTwoSection from "./components/VisitorTwoSection";
import VisitorThirdSection from "./components/VisitorThirdSection";
import VisitorFourSection from "./components/VisitorFourSection";
import VisitorFiveSection from "./components/VisitorFiveSection";
import VisitorSixSection from "./components/VisitorSixSection";

//utils
import useWindowSizeUtils from "@/utils/windowSize";

const VisitorOne = () => {
  const { width } = useWindowSizeUtils();

  return (
    <div style={{ paddingTop: "60px" }}>
      <VisitorOneHeader />
      {width > 1024 && <VisitorTwoSection />}
      <VisitorThirdSection />
      <VisitorFourSection />
      <VisitorFiveSection />
      {width > 1024 && <VisitorSixSection />}
    </div>
  );
};

export default VisitorOne;
