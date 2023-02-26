import styled from "styled-components";
import {
  MEDIA_QUERY_426,
  MEDIA_QUERY_768,
  MEDIA_QUERY_1024,
} from "../../../styles/constants/media";

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

//filterExpert

export const SectionContainer = styled.div`
  background: #f6fbfb;
  padding: 80px 100px 20px 100px;

  ${MEDIA_QUERY_768} {
    padding-left: 60px;
    padding-right: 60px;
  }

  ${MEDIA_QUERY_426} {
    padding-left: 30px;
    padding-right: 30px;
  }
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

  ${MEDIA_QUERY_1024} {
    width: 100%;
  }
`;

export const SectionInputBox = styled.div`
  ${compose(layout)}
`;

export const SectionInput = styled.div`
  height: 35px;
  width: 100%;
  padding: 0 10px;
  border: 1px solid #707070;
  border-radius: 8px;
  font-size: 13px;
  background: #ffffff;
  cursor: pointer;
  position: relative;
  ${compose(layout, border)}
`;

export const InputSelectedBox = styled.div`
  background: #f5f5f5;
  opacity: 0.9;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.160784);
  width: 50px;
  height: 25px;
  font-size: 13px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin-top: 5px;
  margin-right: 7.5px;
`;

export const SectionInputDate = styled.div`
  display: flex;
  align-items: center;
  height: 35px;
  width: 100%;
  padding: 0 10px;
  border: 1px solid #707070;
  font-size: 13px;
  background: #ffffff;
  cursor: pointer;
  ${compose(border)}
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
  margin: 0 9px;

  svg:nth-child(2) {
    display: none;
  }

  &:hover svg:nth-child(1) {
    display: none;
  }

  &:hover svg:nth-child(2) {
    display: block;
  }

  ${MEDIA_QUERY_1024} {
    scale: 0.9;
  }

  ${MEDIA_QUERY_768} {
    scale: 0.8;
  }
`;

export const ServiceIconButton = styled.label`
  ${MEDIA_QUERY_768} {
    /* 一排三個 */
    flex: 1;
    width: 33.3%;
    min-width: 33.3%;
    max-width: 33.3%;
    display: flex;
    justify-content: center;
  }
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

//分隔線

export const SectionContainerDivider = styled.div`
  height: 0;
  padding: 0px 100px;
  border: 1px solid #707070;
  margin: 70px 0 20px 0;
`;

//expertList

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

//佔位
export const ServiceIconBox = styled.div`
  width: 13%;
`;

export const AlbunmBox = styled.div`
  width: 130px !important;
  height: auto !important;
`;

export const Albunm = styled.img`
  width: 100%;
  height: auto;
`;

export const SectionThirdCard = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 300px;
  margin: 10px 0;
  box-shadow: 0px 1px 4px rgb(0 0 0 / 10%);
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  ${compose(layout)}
`;

export const SectionThirdContent = styled.p`
  color: #404040;
  margin: 10px 0;
  font-size: 14px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: auto;
  height: 80px;
`;

export const PageBox = styled.div`
  border: 1px solid #5bd0fa;
  color: #060606;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  ${compose(background, color)}

  &:hover {
    background: #5bd0fa;
    color: #ffffff;
  }
`;
