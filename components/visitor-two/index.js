import React from "react";

// style
import { FlexBox } from "@/styles/globalStyles";
import {
  SectionContainer,
  SectionOneContainer,
  SectionTwoContainer,
  SectionContainerDivider,
  SectionBox,
  TitleBig,
  TitleSmall,
  SectionInputBox,
  SectionInput,
  SectionSelect,
  TimeRange,
  CheckBoxInput,
  FeatureButton,
  SubmitButton,
} from "./styles";

//icon
import FeatureOneButton from "public/icons/feature1_black_icon.svg";
import FeatureTwoButton from "public/icons/feature2_black_icon.svg";
import FeatureThreeButton from "public/icons/feature3_black_icon.svg";
import FeatureFourButton from "public/icons/feature4_black_icon.svg";
import FeatureFiveButton from "public/icons/feature5_black_icon.svg";
import FeatureSixButton from "public/icons/feature6_black_icon.svg";
import FeatureOneButtonHover from "public/icons/feature1_blue_icon.svg";
import FeatureTwoButtonHover from "public/icons/feature2_blue_icon.svg";
import FeatureThreeButtonHover from "public/icons/feature3_blue_icon.svg";
import FeatureFourButtonHover from "public/icons/feature4_blue_icon.svg";
import FeatureFiveButtonHover from "public/icons/feature5_blue_icon.svg";
import FeatureSixButtonHover from "public/icons/feature6_blue_icon.svg";

//utils
import fakeDataUtils from "@/utils/fakeData";

export default function VisitorTwo() {
  return (
    <SectionContainer>
      {/* 搜尋區 */}
      <SectionOneContainer>
        {/* 城市 */}
        <FlexBox justifyContent="space-between" mb="20px">
          <SectionBox>
            <TitleBig>你想去哪？</TitleBig>
            <FlexBox>
              <SectionInputBox width="100%">
                <TitleSmall>城市</TitleSmall>
                <SectionInput placeholder="輸入您想去的城市"></SectionInput>
              </SectionInputBox>
            </FlexBox>
          </SectionBox>
        </FlexBox>
        {/* 日期與時間 & 在地達人類型*/}
        <FlexBox justifyContent="space-between" mb="20px">
          {/* 日期與時間 */}
          <SectionBox>
            <TitleBig>日期與時間</TitleBig>
            <FlexBox justifyContent="space-between">
              <SectionInputBox width="78%">
                <TitleSmall>日期</TitleSmall>
                <SectionInput></SectionInput>
              </SectionInputBox>
              <SectionInputBox width="20%">
                <TitleSmall>人數</TitleSmall>
                <SectionSelect name="人數">
                  <option value="">待確認</option>
                </SectionSelect>
              </SectionInputBox>
            </FlexBox>
            <FlexBox justifyContent="space-between">
              <SectionInputBox width="100%">
                <TitleSmall>
                  時間
                  <TimeRange>8點 - 17點</TimeRange>
                </TitleSmall>
                <SectionInput></SectionInput>
              </SectionInputBox>
            </FlexBox>
          </SectionBox>
          {/* 在地達人類型 */}
          <SectionBox>
            <TitleBig>在地達人類型</TitleBig>
            <FlexBox justifyContent="space-between">
              <SectionInputBox width="32%">
                <TitleSmall>性別</TitleSmall>
                <SectionSelect name="性別">
                  <option value="">待確認</option>
                </SectionSelect>
              </SectionInputBox>
              <SectionInputBox width="32%">
                <TitleSmall>年齡</TitleSmall>
                <SectionSelect name="年齡">
                  <option value="">待確認</option>
                </SectionSelect>
              </SectionInputBox>
              <SectionInputBox width="32%">
                <TitleSmall>語言</TitleSmall>
                <SectionSelect name="語言">
                  <option value="">待確認</option>
                </SectionSelect>
              </SectionInputBox>
            </FlexBox>
            <FlexBox justifyContent="space-between">
              <SectionInputBox width="32%">
                <TitleSmall>價格</TitleSmall>
                <SectionSelect name="價格">
                  <option value="">待確認</option>
                </SectionSelect>
              </SectionInputBox>
              <SectionInputBox width="32%">
                <TitleSmall>瀏覽數</TitleSmall>
                <SectionSelect name="瀏覽數">
                  <option value="">待確認</option>
                </SectionSelect>
              </SectionInputBox>
              <SectionInputBox width="32%">
                <TitleSmall>評價</TitleSmall>
                <SectionSelect name="評價">
                  <option value="">待確認</option>
                </SectionSelect>
              </SectionInputBox>
            </FlexBox>
          </SectionBox>
        </FlexBox>
        {/*  點選您需要的服務 */}
        <FlexBox flexDirection="column" alignItems="center" mb="20px">
          <TitleBig>點選您需要的服務</TitleBig>
          <FlexBox width="70%" justifyContent="space-between" m="20px 0">
            <label>
              <CheckBoxInput type="checkbox" value="私房地圖" />
              <FeatureButton>
                <FeatureOneButton />
                <FeatureOneButtonHover />
              </FeatureButton>
            </label>
            <label>
              <CheckBoxInput type="checkbox" value="美食夜市" />
              <FeatureButton>
                <FeatureTwoButton />
                <FeatureTwoButtonHover />
              </FeatureButton>
            </label>
            <label>
              <CheckBoxInput type="checkbox" value="在地體驗" />
              <FeatureButton>
                <FeatureThreeButton />
                <FeatureThreeButtonHover />
              </FeatureButton>
            </label>
            <label>
              <CheckBoxInput type="checkbox" value="代購服務" />
              <FeatureButton>
                <FeatureFourButton />
                <FeatureFourButtonHover />
              </FeatureButton>
            </label>
            <label>
              <CheckBoxInput type="checkbox" value="咖啡交友" />
              <FeatureButton>
                <FeatureFiveButton />
                <FeatureFiveButtonHover />
              </FeatureButton>
            </label>
            <label>
              <CheckBoxInput type="checkbox" value="接機代駕" />
              <FeatureButton>
                <FeatureSixButton />
                <FeatureSixButtonHover />
              </FeatureButton>
            </label>
          </FlexBox>
        </FlexBox>
        {/*  送出按鈕 */}
        <FlexBox justifyContent="center" mb="20px">
          <SubmitButton>送出</SubmitButton>
        </FlexBox>
      </SectionOneContainer>
      {/* 分隔線 */}
      <SectionContainerDivider></SectionContainerDivider>
      {/* 在地達人清單 */}
      <SectionTwoContainer></SectionTwoContainer>
    </SectionContainer>
  );
}
