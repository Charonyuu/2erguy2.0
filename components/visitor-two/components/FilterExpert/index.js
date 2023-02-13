import React from "react";
import { useState } from "react";

//plugin
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { zhTW } from "date-fns/locale";

import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

// style
import { FlexBox } from "@/styles/globalStyles";
import {
  SectionOneContainer,
  SectionBox,
  TitleBig,
  TitleSmall,
  SectionInputBox,
  SectionInput,
  SectionInputDate,
  SectionSelect,
  TimeRange,
  CheckBoxInput,
  FeatureButton,
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

import changeDateFormatUtils from "@/utils/changeDateFormat";
import useOutsideClickUtils from "@/utils/clickOutside";

export default function FilterExpert() {
  /**
   * data
   */
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startTime, setStartTime] = useState("0");
  const [endTime, setEndTime] = useState("24");
  const [isShowDateRangePicker, setIsShowDateRangePicker] = useState(false); //是否顯示選擇日期套件跳窗
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "dateRangeKey",
    },
  ]); //選擇日期

  /**
   * func
   */
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

  return (
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
                <TimeRange>
                  {startTime}點 - {endTime}點
                </TimeRange>
              </TitleSmall>
              <RangeSlider
                className={'sliderTrack'}
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
            <CheckBoxInput type="checkbox" value="美食景點" />
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
  );
}
