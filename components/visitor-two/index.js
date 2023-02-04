import React from "react";
import {
  Container,
  Search,
  SearchRow,
  SearchCol,
  TitleBig,
  TitleLittle,
  TimeRange,
  SearchInput,
  SearchInputBig,
  SearchInputMiddle,
  SearchInputSmall,
  ExpertInformation,
} from "./styles";

export default function VisitorTwo() {
  return (
    <Container>
      <Search>
        <SearchRow>
          <SearchCol>
            <TitleBig>你想去哪？</TitleBig>
            <TitleLittle>城市</TitleLittle>
            <SearchInputBig></SearchInputBig>
          </SearchCol>
        </SearchRow>
        <SearchRow>
          <SearchCol>
            <TitleBig>日期與時間</TitleBig>
            <SearchRow inputMargin>
              <SearchCol style={{ width: "78%" }}>
                <TitleLittle>日期</TitleLittle>
                <SearchInputBig></SearchInputBig>
              </SearchCol>
              <SearchCol style={{ width: "20%" }}>
                <TitleLittle>人數</TitleLittle>
                <SearchInputBig></SearchInputBig>
              </SearchCol>
            </SearchRow>
            <SearchRow inputMargin>
              <SearchCol widthFull>
                <TitleLittle>
                  時間
                  <TimeRange>8點&nbsp;-&nbsp;17點</TimeRange>
                </TitleLittle>
                <SearchInputBig></SearchInputBig>
              </SearchCol>
            </SearchRow>
          </SearchCol>
          <SearchCol>
            <TitleBig>在地達人類型</TitleBig>
            <SearchRow inputMargin>
              <SearchCol>
                <TitleLittle>性別</TitleLittle>
                <SearchInputMiddle></SearchInputMiddle>
              </SearchCol>
              <SearchCol>
                <TitleLittle>年齡</TitleLittle>
                <SearchInputMiddle></SearchInputMiddle>
              </SearchCol>
              <SearchCol>
                <TitleLittle>語言</TitleLittle>
                <SearchInputMiddle></SearchInputMiddle>
              </SearchCol>
            </SearchRow>
            <SearchRow inputMarginZero>
              <SearchCol>
                <TitleLittle>價格</TitleLittle>
                <SearchInputMiddle></SearchInputMiddle>
              </SearchCol>
              <SearchCol>
                <TitleLittle>瀏覽數</TitleLittle>
                <SearchInputMiddle></SearchInputMiddle>
              </SearchCol>
              <SearchCol>
                <TitleLittle>評價</TitleLittle>
                <SearchInputBig></SearchInputBig>
              </SearchCol>
            </SearchRow>
          </SearchCol>
        </SearchRow>
      </Search>
    </Container>
  );
}
