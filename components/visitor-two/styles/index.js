import styled from "styled-components";

import {
  background,
  border,
  boxShadow,
  color,
  compose,
  flexbox,
  layout,
  position,
  space,
  typography,
} from "styled-system";

export const SectionContainer = styled.div`
  background: #f6fbfb;
  padding: 20px 100px;
`;

export const SectionOneContainer = styled.div``;

export const TitleBig = styled.div`
  color: #191919;
  font-weight: bold;
`;

export const TitleSmall = styled.div`
  font-size: 14px;
  color: #7e7e7e;
  margin: 10px 0 5px 0;
`;

export const SectionBox = styled.div`
  width: 48%;
  ${compose(layout)}
`;

export const SectionInputBox = styled.div`
  ${compose(layout)}
`;

export const SectionInput = styled.input`
  height: 35px;
  width: 100%;
  padding: 0 10px;
  border: 1px solid #707070;
  border-radius: 8px;
`;

export const SectionSelect = styled.select`
  height: 35px;
  width: 100%;
  padding: 0 10px;
  border: 1px solid #707070;
  border-radius: 8px;
`;

export const TimeRange = styled.span`
  color: #191919;
  margin: 0 0 0 10px;
`;

export const FeatureButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;

  svg:nth-child(2) {
    display: none;
  }

  &:hover svg:nth-child(1) {
    display: none;
  }

  &:hover svg:nth-child(2) {
    display: block;
  }
`;

export const CheckBoxInput = styled.input`
  display: none;
`;

export const SubmitButton = styled.button`
  font-weight: 400;
  color: #ffffff;
  background: #f27575;
  border: none;
  border-radius: 10px;
  padding: 10px 25px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const SectionContainerDivider = styled.div`
  height: 0;
  padding: 0px 100px;
  border: 1px solid #707070;
  margin: 70px 0 20px 0;
`;

export const SectionTwoContainer = styled.div`
  background: #f6fbfb;
  padding: 20px 0;
  align-items: flex-start;
`;

export const PhotoBox = styled.div`
  height: 140px;
  width: 140px;
  border-radius: 50%;
  overflow: hidden;
`;

export const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const AuthenticateImg = styled.div`
  position: absolute;
  top: 0;
  right: 10px;
  background: #5bd0fa;
  color: #ffffff;
  padding: 5px 10px;
  border-radius: 50%;
`;

export const ButtonMore = styled.button`
  width: 100%;
  background: #f4a933;
  color: #ffffff;
  padding: 3px 0px;
  border-radius: 15px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const ServiceIcon = styled.img`
  margin-right: 10px;
`;

export const AlbunmBox = styled.div`
  width: 130px !important;
  height: auto !important;
`;

export const Albunm = styled.img`
  width: 100%;
  height: auto;
`;
