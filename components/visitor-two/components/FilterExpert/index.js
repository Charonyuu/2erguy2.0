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
  //是否顯示選擇日期套件跳窗
  const [isShowDateRangePicker, setIsShowDateRangePicker] = useState(false);
  //選擇日期
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "dateRangeKey",
    },
  ]);
  //選擇哪些服務
  const [selectedService, setSelectedService] = useState([]);
  //取得國家、區域、城市
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
  //瀏覽器寬度
  const windowSize = windowSizeUtils();

  /**
   * func
   */
  /* 設定城市下拉式選單 */
  const _setCity = (key, value) => {
    if (key === "country" && value !== selectCityInput.country)
      return setSelectCityInput({ country: value, area: "", city: "" });
    if (key === "area" && value !== selectCityInput.area)
      return setSelectCityInput({ ...selectCityInput, [key]: value, city: "" });

    setSelectCityInput({ ...selectCityInput, [key]: value });
  };

  /* 選擇城市欄位要顯示的內容 */
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
    return "選擇您想去的城市";
  };

  useEffect(() => {
    if (isShowCityOption) return;
  }, [isShowCityOption]);

  /* 關閉選擇城市下拉式選單跳窗 */
  const _closeSelectCityDialog = () => {
    setIsShowCityOption(false);
  };
  const selectCityRef = useOutsideClickUtils(_closeSelectCityDialog);

  /* 選擇日期-改變日期範圍 */
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

  /* 選擇日期-點選日期輸入框顯示選擇日期套件跳窗 */
  const _clickDateInput = () => {
    setIsShowDateRangePicker(true);
  };

  /* 點擊任意處關閉選擇日期套件跳窗 */
  function _closeDateRangePicker() {
    setIsShowDateRangePicker(false);
  }
  const dateRangePickerRef = useOutsideClickUtils(_closeDateRangePicker);

  /* 選擇時間 */
  const _changeTimeRange = (timeRange) => {
    console.log(timeRange);
    setStartTime(timeRange[0] / 4);
    setEndTime(timeRange[1] / 4);
  };

  /** 選擇服務 */
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
      {/* 城市 */}
      <FlexBox justifyContent="space-between">
        <SectionBox>
          <TitleBig>你想去哪？</TitleBig>
          <FlexBox>
            <SectionInputBox width="100%">
              <TitleSmall>城市</TitleSmall>
              <FlexBox ref={selectCityRef} margin="10px 0 20px">
                <SectionInput>
                  {/* 選擇城市欄位 */}
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
                  {/* 選擇城市下拉式選單 */}
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
                      {/* 國家 */}
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
                      {/* 區域 */}
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
                      {/* 城市 */}
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
      {/* 日期與時間 & 在地達人類型*/}
      <FlexBox justifyContent="space-between" flexWrap="wrap" mb="20px">
        {/* 日期與時間 */}
        <SectionBox>
          <TitleBig>日期與時間</TitleBig>
          <FlexBox justifyContent="space-between" flexWrap="wrap">
            <SectionInputBox width={windowSize.width <= 768 ? "100%" : "68%"}>
              <TitleSmall>日期</TitleSmall>
              <FlexBox position="relative" ref={dateRangePickerRef}>
                <SectionInputDate
                  placeholder="開始日期"
                  borderRadius={"8px 0px 0px 8px"}
                  onClick={_clickDateInput}
                >
                  {startDate ? (
                    startDate
                  ) : (
                    <p style={{ color: "#757575" }}>開始日期</p>
                  )}
                </SectionInputDate>
                <SectionInputDate
                  placeholder="結束日期"
                  borderLeft="none"
                  borderRadius={"0px 8px 8px 0px"}
                  onClick={_clickDateInput}
                >
                  {endDate ? (
                    endDate
                  ) : (
                    <p style={{ color: "#757575" }}>結束日期</p>
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
            <SectionInputBox width={windowSize.width <= 768 ? "100%" : "30%"}>
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
                <TimeRange>
                  {startTime}點 - {endTime}點
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
        {/* 在地達人類型 */}
        <SectionBox
          style={{
            marginTop: windowSize.width <= 1024 && "30px",
          }}
        >
          <TitleBig>在地達人類型</TitleBig>
          <FlexBox justifyContent="space-between" flexWrap="wrap">
            <SectionInputBox width={windowSize.width <= 768 ? "100%" : "32%"}>
              <TitleSmall>性別</TitleSmall>
              <SectionSelect name="性別">
                <option value="">待確認</option>
              </SectionSelect>
            </SectionInputBox>
            <SectionInputBox width={windowSize.width <= 768 ? "100%" : "32%"}>
              <TitleSmall>年齡</TitleSmall>
              <SectionSelect name="年齡">
                <option value="">待確認</option>
              </SectionSelect>
            </SectionInputBox>
            <SectionInputBox width={windowSize.width <= 768 ? "100%" : "32%"}>
              <TitleSmall>語言</TitleSmall>
              <SectionSelect name="語言">
                <option value="">待確認</option>
              </SectionSelect>
            </SectionInputBox>
          </FlexBox>
          <FlexBox justifyContent="space-between" flexWrap="wrap">
            <SectionInputBox width={windowSize.width <= 768 ? "100%" : "32%"}>
              <TitleSmall>價格</TitleSmall>
              <SectionSelect name="價格">
                <option value="">待確認</option>
              </SectionSelect>
            </SectionInputBox>
            <SectionInputBox width={windowSize.width <= 768 ? "100%" : "32%"}>
              <TitleSmall>瀏覽數</TitleSmall>
              <SectionSelect name="瀏覽數">
                <option value="">待確認</option>
              </SectionSelect>
            </SectionInputBox>
            <SectionInputBox width={windowSize.width <= 768 ? "100%" : "32%"}>
              <TitleSmall>評價</TitleSmall>
              <SectionSelect name="評價">
                <option value="">請選擇</option>
                <option value="">由低到高</option>
                <option value="">由高到低</option>
              </SectionSelect>
            </SectionInputBox>
          </FlexBox>
        </SectionBox>
      </FlexBox>
      {/*  點選您需要的服務 */}
      <FlexBox flexDirection="column" alignItems="center" mb="20px">
        <TitleBig>點選您需要的服務</TitleBig>
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
      {/*  送出按鈕 */}
      <FlexBox justifyContent="center" mb="20px">
        <SubmitButton>送出</SubmitButton>
      </FlexBox>
    </SectionOneContainer>
  );
}
