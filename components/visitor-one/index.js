import React from "react";
import { FlexBox } from "@/styles/globalStyles";
import {
  SectionOneContainer,
  Overlay,
  SectionOneBox,
  SectionOneInput,
  SectionOneButton,
} from "./styles";

const VisitorOne = () => {
  return (
    <div>
      <VisitorOneHeader />
      <p>home</p>
      visitorOne
    </div>
  );
};

//icon
import FeatureOneButton from "public/icons/feature1_icon.svg";
import FeatureTwoButton from "public/icons/feature2_icon.svg";
import FeatureThreeButton from "public/icons/feature3_icon.svg";
import FeatureFourButton from "public/icons/feature4_icon.svg";
import FeatureFiveButton from "public/icons/feature5_icon.svg";
import FeatureSixButton from "public/icons/feature6_icon.svg";

const VisitorOneHeader = () => {
  return (
    <SectionOneContainer>
      <img src="fake/vistorOneHeaderPicture.jpg" />
      <Overlay />
      <SectionOneBox>
        <p>在地達人滿足旅行短時需求</p>
        <FlexBox margin="10px 0 20px">
          <SectionOneInput placeHolder="輸入你想去的城市" />
          <SectionOneButton>搜尋</SectionOneButton>
        </FlexBox>
        <FlexBox width="300px" justifyContent="space-between">
          <FeatureOneButton />
          <FeatureTwoButton />
          <FeatureThreeButton />
          <FeatureFourButton />
          <FeatureFiveButton />
          <FeatureSixButton />
        </FlexBox>
      </SectionOneBox>
    </SectionOneContainer>
  );
};

export default VisitorOne;
