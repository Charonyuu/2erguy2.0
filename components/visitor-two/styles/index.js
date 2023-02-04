import styled from "styled-components";

export const Container = styled.div`
  background: #f6fbfb;
  padding: 20px 100px;
`;

export const Search = styled.div``;

export const SearchRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: ${(props) => (props.inputMarginZero ? "0" : "0 0 20px 0")};
`;

export const SearchCol = styled.div`
  width: ${(props) => (props.widthFull ? "100%" : "48%")};
`;

export const TitleBig = styled.div`
  color: #191919;
`;

export const TitleLittle = styled.div`
  font-size: 14px;
  color: #7e7e7e;
  margin: 10px 0 5px 0;
`;

export const TimeRange = styled.span`
  color: #191919;
  margin: 0 0 0 10px;
`;

export const SearchInput = styled.input`
  height: 35px;
  padding: 15px;
  border: 1px solid #707070;
  border-radius: 8px;
`;

export const SearchInputBig = styled(SearchInput)`
  width: 100%;
`;

export const SearchInputMiddle = styled(SearchInput)`
  width: 95%;
`;

export const SearchInputSmall = styled(SearchInput)`
  width: 50%;
`;

export const ExpertInformation = styled.div``;
