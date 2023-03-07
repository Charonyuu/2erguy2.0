import { FlexBox, StyledText } from "@/styles/globalStyles";
import {
  SectionOneContainer,
  Overlay,
  SectionOneBox,
  SectionOneInput,
  SectionOneButton,
  InputSelectedBox,
  IconHoverContainer,
  HoverInfomation,
} from "../../styles";

//utils
import useOutsideClick from "@/utils/clickOutside";

import DropDownArrowIcon from "public/icons/dropDownArrowIcon.svg";

//icon
import FeatureOneButton from "public/icons/feature1_icon.svg";
import FeatureTwoButton from "public/icons/feature2_icon.svg";
import FeatureThreeButton from "public/icons/feature3_icon.svg";
import FeatureFourButton from "public/icons/feature4_icon.svg";
import FeatureFiveButton from "public/icons/feature5_icon.svg";
import FeatureSixButton from "public/icons/feature6_icon.svg";
import { useEffect, useState } from "react";

import fakeDataUtils from "@/utils/fakeData";

const VisitorOneHeader = () => {
  const [open, setOpen] = useState();
  const [input, setInput] = useState({ country: "", area: "", city: "" });

  const searchFakeData = fakeDataUtils.searchForCity();

  const countryList = searchFakeData.map((x) => {
    return x.country;
  });

  const getCountryDistinct = searchFakeData.filter((x) => {
    return x.country == input.country;
  });

  const areaList =
    input.country &&
    getCountryDistinct[0].distinct.map((x) => {
      return x.area;
    });

  const getDistinctCity =
    input.area &&
    getCountryDistinct[0].distinct.filter((x) => {
      return x.area === input.area;
    });

  const cityList = input.area && getDistinctCity[0].city;

  // 設定下拉式選單目的地
  const _setCity = (key, value) => {
    if (key === "country" && value !== input.country)
      return setInput({ country: value, area: "", city: "" });
    if (key === "area" && value !== input.area)
      return setInput({ ...input, [key]: value, city: "" });

    setInput({ ...input, [key]: value });
  };

  const InputValue = () => {
    if (input.city) return input.country + " " + input.area + " " + input.city;
    if (input.area) return input.country + " " + input.area;
    if (input.country) return input.country;
    return "輸入你想去的城市";
  };

  useEffect(() => {
    if (open) return;
  }, [open]);

  const _handleCloseDropDown = () => {
    setOpen(false);
    setInput({ country: "", area: "", city: "" });
  };
  const ref = useOutsideClick(_handleCloseDropDown);
  return (
    <SectionOneContainer>
      <img src="fake/vistorOneHeaderPicture.jpg" />
      <Overlay />
      <SectionOneBox ref={ref}>
        <p>在地達人滿足旅行短時需求</p>
        <FlexBox justifyContent="space-around" margin="10px 0 20px">
          <SectionOneInput>
            <FlexBox
              alignItems="center"
              onClick={() => {
                open ? _handleCloseDropDown() : setOpen(true);
              }}
            >
              <InputValue />
              <FlexBox
                position="absolute"
                right="10px"
                width="15px"
                height="15px"
              >
                <DropDownArrowIcon />
              </FlexBox>
            </FlexBox>
            {open ? (
              <FlexBox
                bg="rgba(255,255,255,.7)"
                position="absolute"
                bottom="0"
                left="0"
                minHeight="100px"
                width="300px"
                flexDirection="column"
                style={{ transform: "translateY(100%)", zIndex: 2 }}
                p="0 10px 10px"
              >
                <FlexBox>
                  {open &&
                    countryList.map((country, index) => (
                      <InputSelectedBox
                        style={{
                          backgroundColor:
                            input.country === country ? "#0ECFFF" : null,
                        }}
                        onClick={() => _setCity("country", country)}
                      >
                        {country}
                      </InputSelectedBox>
                    ))}
                </FlexBox>
                <FlexBox width="100%" style={{ flexWrap: "wrap" }}>
                  {input.country &&
                    areaList.map((area, index) => (
                      <InputSelectedBox
                        style={{
                          backgroundColor:
                            input.area === area ? "#0ECFFF" : null,
                        }}
                        onClick={() => _setCity("area", area)}
                      >
                        {area}
                      </InputSelectedBox>
                    ))}
                </FlexBox>
                <FlexBox style={{ flexWrap: "wrap" }} width="100%">
                  {input.area &&
                    cityList.map((city, index) => (
                      <InputSelectedBox
                        style={{
                          backgroundColor:
                            input.city === city ? "#0ECFFF" : null,
                        }}
                        onClick={() => _setCity("city", city)}
                      >
                        {city}
                      </InputSelectedBox>
                    ))}
                </FlexBox>
              </FlexBox>
            ) : null}
          </SectionOneInput>
          <SectionOneButton>搜尋</SectionOneButton>
        </FlexBox>
        <FlexBox width="300px" justifyContent="space-between">
          <IconHoverContainer>
            <FeatureOneButton />
            <HoverInfomation></HoverInfomation>
          </IconHoverContainer>
          <IconHoverContainer>
            <FeatureTwoButton />
            <HoverInfomation></HoverInfomation>
          </IconHoverContainer>
          <IconHoverContainer>
            <FeatureThreeButton />
            <HoverInfomation></HoverInfomation>
          </IconHoverContainer>
          <IconHoverContainer>
            <FeatureFourButton />
            <HoverInfomation></HoverInfomation>
          </IconHoverContainer>
          <IconHoverContainer>
            <FeatureFiveButton />
            <HoverInfomation></HoverInfomation>
          </IconHoverContainer>
          <IconHoverContainer>
            <FeatureSixButton />
            <HoverInfomation></HoverInfomation>
          </IconHoverContainer>
        </FlexBox>
      </SectionOneBox>
    </SectionOneContainer>
  );
};

export default VisitorOneHeader;
