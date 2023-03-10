import React from "react";
import { useState, useEffect } from "react";

//plugin
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { zhTW } from "date-fns/locale";

import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

// style
import { FlexBox, StyledText } from "@/styles/globalStyles";
import {
  SectionOneContainer,
  SectionBox,
  TitleBig,
  TitleSmall,
  SectionInputBox,
  SectionInput,
  InputSelectedBox,
  SectionInputDate,
  SectionSelect,
  TimeRange,
  FeatureButton,
  ServiceIconButton,
  SubmitButton,
} from "../../styles";

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
import changeDateFormatUtils from "@/utils/changeDateFormat";
import useOutsideClickUtils from "@/utils/clickOutside";
import windowSizeUtils from "@/utils/windowSize";

export default function FilterExpert() {
  /**
   * data
   */
  const iconList = [
    { normal: <FeatureOneButton />, hover: <FeatureOneButtonHover /> },
    { normal: <FeatureTwoButton />, hover: <FeatureTwoButtonHover /> },
    { normal: <FeatureThreeButton />, hover: <FeatureThreeButtonHover /> },
    { normal: <FeatureFourButton />, hover: <FeatureFourButtonHover /> },
    { normal: <FeatureFiveButton />, hover: <FeatureFiveButtonHover /> },
    { normal: <FeatureSixButton />, hover: <FeatureSixButtonHover /> },
  ];
  const [isShowCityOption, setIsShowCityOption] = useState();
  const [selectCityInput, setSelectCityInput] = useState({
    country: "",
    area: "",
    city: "",
  });
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startTime, setStartTime] = useState("0");
  const [endTime, setEndTime] = useState("24");
  /* ???????????????????????????????????? */
  const [isShowDateRangePicker, setIsShowDateRangePicker] = useState(false);
  /* ???????????? */
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "dateRangeKey",
    },
  ]);
  /* ?????????????????? */
  const [selectedService, setSelectedService] = useState([]);
  /* ?????????????????????????????? */
  const searchFakeData = fakeDataUtils.searchForCity();
  const countryList = searchFakeData.map((x) => {
    return x.country;
  });
  const getCountryDistinct = searchFakeData.filter((x) => {
    return x.country == selectCityInput.country;
  });
  const areaList =
    selectCityInput.country &&
    getCountryDistinct[0].distinct.map((x) => {
      return x.area;
    });
  const getDistinctCity =
    selectCityInput.area &&
    getCountryDistinct[0].distinct.filter((x) => {
      return x.area === selectCityInput.area;
    });
  const cityList = selectCityInput.area && getDistinctCity[0].city;
  /* ??????????????? */
  const {width} = windowSizeUtils();

  /**
   * func
   */
  /* ??????????????????????????? */
  const _setCity = (key, value) => {
    if (key === "country" && value !== selectCityInput.country)
      return setSelectCityInput({ country: value, area: "", city: "" });
    if (key === "area" && value !== selectCityInput.area)
      return setSelectCityInput({ ...selectCityInput, [key]: value, city: "" });

    setSelectCityInput({ ...selectCityInput, [key]: value });
  };

  /* ???????????????????????????????????? */
  const InputValue = () => {
    if (selectCityInput.city)
      return (
        selectCityInput.country +
        " " +
        selectCityInput.area +
        " " +
        selectCityInput.city
      );
    if (selectCityInput.area)
      return selectCityInput.country + " " + selectCityInput.area;
    if (selectCityInput.country) return selectCityInput.country;
    return "????????????????????????";
  };

  useEffect(() => {
    if (isShowCityOption) return;
  }, [isShowCityOption]);

  /* ??????????????????????????????????????? */
  const _closeSelectCityDialog = () => {
    setIsShowCityOption(false);
  };
  const selectCityRef = useOutsideClickUtils(_closeSelectCityDialog);

  /* ????????????-?????????????????? */
  const _changeDateRange = (dateRangeData) => {
    setDateRange([dateRangeData.dateRangeKey]);

    const startDate = changeDateFormatUtils.getDateByDateTime(
      "yyyy-MM-dd",
      dateRangeData.dateRangeKey.startDate
    );
    const endDate = changeDateFormatUtils.getDateByDateTime(
      "yyyy-MM-dd",
      dateRangeData.dateRangeKey.endDate
    );
    setStartDate(startDate);
    setEndDate(endDate);
  };

  /* ????????????-??????????????????????????????????????????????????? */
  const _clickDateInput = () => {
    setIsShowDateRangePicker(true);
  };

  /* ????????????????????????????????????????????? */
  function _closeDateRangePicker() {
    setIsShowDateRangePicker(false);
  }
  const dateRangePickerRef = useOutsideClickUtils(_closeDateRangePicker);

  /* ???????????? */
  const _changeTimeRange = (timeRange) => {
    console.log(timeRange);
    setStartTime(timeRange[0] / 4);
    setEndTime(timeRange[1] / 4);
  };

  /** ???????????? */
  const _selectService = (EService) => {
    if (selectedService.includes(EService)) {
      let temp = [...selectedService];
      temp = temp.filter((x) => x !== EService);
      setSelectedService(temp);
    } else {
      setSelectedService((preValue) => [...preValue, EService]);
    }
  };

  return (
    <SectionOneContainer>
      {/* ?????? */}
      <FlexBox justifyContent="space-between">
        <SectionBox>
          <TitleBig>???????????????</TitleBig>
          <FlexBox>
            <SectionInputBox width="100%">
              <TitleSmall>??????</TitleSmall>
              <FlexBox ref={selectCityRef} margin="10px 0 20px">
                <SectionInput>
                  {/* ?????????????????? */}
                  <StyledText
                    display={"flex"}
                    alignItems={"center"}
                    width={1}
                    height={"100%"}
                    style={{
                      color: selectCityInput.country
                        ? "black"
                        : "rgb(117, 117, 117)",
                    }}
                    onClick={() => {
                      isShowCityOption
                        ? _closeSelectCityDialog()
                        : setIsShowCityOption(true);
                    }}
                  >
                    <InputValue />
                  </StyledText>
                  {/* ??????????????????????????? */}
                  {isShowCityOption ? (
                    <FlexBox
                      bg="rgba(255,255,255)"
                      position="absolute"
                      bottom="-5px"
                      left="0"
                      minHeight="100px"
                      width={1}
                      flexDirection="column"
                      style={{ transform: "translateY(100%)", zIndex: 2 }}
                      p="0px 15px"
                      boxShadow={"1px 1px 6px #0000002b"}
                      borderRadius={5}
                    >
                      {/* ?????? */}
                      <FlexBox margin="10px 0">
                        {isShowCityOption &&
                          countryList.map((country, index) => (
                            <InputSelectedBox
                              style={{
                                backgroundColor:
                                  selectCityInput.country === country
                                    ? "#0ECFFF"
                                    : null,
                              }}
                              onClick={() => _setCity("country", country)}
                            >
                              {country}
                            </InputSelectedBox>
                          ))}
                      </FlexBox>
                      {/* ?????? */}
                      <FlexBox
                        width="100%"
                        margin="10px 0"
                        style={{ flexWrap: "wrap" }}
                      >
                        {selectCityInput.country &&
                          areaList.map((area, index) => (
                            <InputSelectedBox
                              style={{
                                backgroundColor:
                                  selectCityInput.area === area
                                    ? "#0ECFFF"
                                    : null,
                              }}
                              onClick={() => _setCity("area", area)}
                            >
                              {area}
                            </InputSelectedBox>
                          ))}
                      </FlexBox>
                      {/* ?????? */}
                      <FlexBox
                        width="100%"
                        margin="10px 0"
                        style={{ flexWrap: "wrap" }}
                      >
                        {selectCityInput.area &&
                          cityList.map((city, index) => (
                            <InputSelectedBox
                              style={{
                                backgroundColor:
                                  selectCityInput.city === city
                                    ? "#0ECFFF"
                                    : null,
                              }}
                              onClick={() => _setCity("city", city)}
                            >
                              {city}
                            </InputSelectedBox>
                          ))}
                      </FlexBox>
                    </FlexBox>
                  ) : null}
                </SectionInput>
              </FlexBox>
            </SectionInputBox>
          </FlexBox>
        </SectionBox>
      </FlexBox>
      {/* ??????????????? & ??????????????????*/}
      <FlexBox justifyContent="space-between" flexWrap="wrap" mb="20px">
        {/* ??????????????? */}
        <SectionBox>
          <TitleBig>???????????????</TitleBig>
          <FlexBox justifyContent="space-between" flexWrap="wrap">
            <SectionInputBox width={width <= 768 ? "100%" : "68%"}>
              <TitleSmall>??????</TitleSmall>
              <FlexBox position="relative" ref={dateRangePickerRef}>
                <SectionInputDate
                  placeholder="????????????"
                  borderRadius={"8px 0px 0px 8px"}
                  onClick={_clickDateInput}
                >
                  {startDate ? (
                    startDate
                  ) : (
                    <p style={{ color: "#757575" }}>????????????</p>
                  )}
                </SectionInputDate>
                <SectionInputDate
                  placeholder="????????????"
                  borderLeft="none"
                  borderRadius={"0px 8px 8px 0px"}
                  onClick={_clickDateInput}
                >
                  {endDate ? (
                    endDate
                  ) : (
                    <p style={{ color: "#757575" }}>????????????</p>
                  )}
                </SectionInputDate>
                {isShowDateRangePicker && (
                  <FlexBox
                    position="absolute"
                    zIndex={1}
                    top="40px"
                    boxShadow={"1px 1px 6px #0000002b"}
                    borderRadius={5}
                    overflow="hidden"
                  >
                    <DateRange
                      locale={zhTW}
                      ranges={dateRange}
                      dateDisplayFormat={"yyyy-MM-dd"}
                      showDateDisplay={false}
                      onChange={_changeDateRange}
                    />
                  </FlexBox>
                )}
              </FlexBox>
            </SectionInputBox>
            <SectionInputBox width={width <= 768 ? "100%" : "30%"}>
              <TitleSmall>??????</TitleSmall>
              <SectionSelect name="??????">
                <option value="">?????????</option>
              </SectionSelect>
            </SectionInputBox>
          </FlexBox>
          <FlexBox justifyContent="space-between">
            <SectionInputBox width="100%">
              <TitleSmall>
                ??????
                <TimeRange>
                  {startTime}??? - {endTime}???
                </TimeRange>
              </TitleSmall>
              <RangeSlider
                className={"sliderTrack"}
                defaultValue={[0, 96]}
                min={0}
                max={96}
                step={4}
                onInput={_changeTimeRange}
              />
            </SectionInputBox>
          </FlexBox>
        </SectionBox>
        {/* ?????????????????? */}
        <SectionBox
          style={{
            marginTop: width <= 1024 ? "30px" : "0"
          }}
        >
          <TitleBig>??????????????????</TitleBig>
          <FlexBox justifyContent="space-between" flexWrap="wrap">
            <SectionInputBox width={width <= 768 ? "100%" : "32%"}>
              <TitleSmall>??????</TitleSmall>
              <SectionSelect name="??????">
                <option value="">?????????</option>
              </SectionSelect>
            </SectionInputBox>
            <SectionInputBox width={width <= 768 ? "100%" : "32%"}>
              <TitleSmall>??????</TitleSmall>
              <SectionSelect name="??????">
                <option value="">?????????</option>
              </SectionSelect>
            </SectionInputBox>
            <SectionInputBox width={width <= 768 ? "100%" : "32%"}>
              <TitleSmall>??????</TitleSmall>
              <SectionSelect name="??????">
                <option value="">?????????</option>
              </SectionSelect>
            </SectionInputBox>
          </FlexBox>
          <FlexBox justifyContent="space-between" flexWrap="wrap">
            <SectionInputBox width={width <= 768 ? "100%" : "32%"}>
              <TitleSmall>??????</TitleSmall>
              <SectionSelect name="??????">
                <option value="">?????????</option>
              </SectionSelect>
            </SectionInputBox>
            <SectionInputBox width={width <= 768 ? "100%" : "32%"}>
              <TitleSmall>?????????</TitleSmall>
              <SectionSelect name="?????????">
                <option value="">?????????</option>
              </SectionSelect>
            </SectionInputBox>
            <SectionInputBox width={width <= 768 ? "100%" : "32%"}>
              <TitleSmall>??????</TitleSmall>
              <SectionSelect name="??????">
                <option value="">?????????</option>
                <option value="">????????????</option>
                <option value="">????????????</option>
              </SectionSelect>
            </SectionInputBox>
          </FlexBox>
        </SectionBox>
      </FlexBox>
      {/*  ???????????????????????? */}
      <FlexBox flexDirection="column" alignItems="center" mb="20px">
        <TitleBig>????????????????????????</TitleBig>
        <FlexBox
          width={"100%"}
          justifyContent="center"
          m="20px 0"
          flexWrap="wrap"
        >
          {iconList.map((icon, index) => (
            <ServiceIconButton
              key={index}
              onClick={() => _selectService(index)}
            >
              <FeatureButton>
                {selectedService.includes(index) ? (
                  <>{icon.hover}</>
                ) : (
                  <>{icon.normal}</>
                )}
                <>{icon.hover}</>
              </FeatureButton>
            </ServiceIconButton>
          ))}
        </FlexBox>
      </FlexBox>
      {/*  ???????????? */}
      <FlexBox justifyContent="center" mb="20px">
        <SubmitButton>??????</SubmitButton>
      </FlexBox>
    </SectionOneContainer>
  );
}
