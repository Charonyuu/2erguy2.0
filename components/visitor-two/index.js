import React from "react";
import FilterExpert from "./components/FilterExpert/index";
import ExpertList from "./components/ExpertList/index";
import { SectionContainer, SectionContainerDivider } from "./styles";

export default function VisitorTwo() {
  return (
    <SectionContainer>
      {/* 搜尋區 */}
      <FilterExpert />
      {/* 分隔線 */}
      <SectionContainerDivider />
      {/* 在地達人清單 */}
      <ExpertList />
    </SectionContainer>
  );
}
