import styled from "styled-components";
import {
  MEDIA_QUERY_320,
  MEDIA_QUERY_375,
  MEDIA_QUERY_425,
  MEDIA_QUERY_426,
  MEDIA_QUERY_720,
  MEDIA_QUERY_768,
  MEDIA_QUERY_1024,
  MEDIA_QUERY_1440
} from "@/styles/constants/media";
//公用
export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.35);
`;

export const BottomButton = styled.div`
  background-color: white;
  border: 1px solid #707070;
  padding: 6px 15px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 150px;
  cursor: pointer;
  margin-bottom: 10px;
`;

//section1

export const SectionOneContainer = styled.div`
  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
  position: relative;
  width: 100%;
  height: 400px;

  ${MEDIA_QUERY_1024} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const SectionOneBox = styled.div`
  p {
    color: white;
    font-size: 24px;

    ${MEDIA_QUERY_425} {
    text-align: center;
  }
  }
  position: absolute;
  left: 200px;
  top: 150px;

  ${MEDIA_QUERY_1024} {
    left: inherit;
    top: inherit;
  }

  ${MEDIA_QUERY_425} {
    scale: 0.9;
  }

  ${MEDIA_QUERY_375} {
    scale: 0.8;
  }

  ${MEDIA_QUERY_320} {
    scale: 0.7;
  }
`;

export const SectionOneInput = styled.div`
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.4);
  background-color: white;
  cursor: pointer;
  color: #adadad;
  width: 300px;
  height: 30px;
  padding: 5px;
  padding-left: 10px;
  font-size: 14px;
  border-radius: 4px 4px 0 0;
  position: relative;

  ${MEDIA_QUERY_425} {
    width: 67%;
  }
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

export const SectionOneButton = styled.div`
  cursor: pointer;
  background-color: #ff6f6f;
  color: white;
  margin-left: 10px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: auto;
  padding: 0 10px;
  white-space: nowrap;

  ${MEDIA_QUERY_425} {
    width: 26%;
  }
`;

//section2
export const VideoContainer = styled.div`
  video {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  width: auto;
  height: 400px;
  position: relative;
`;

export const SectionTwoText = styled.p`
  color: white;
  text-align: center;
`;

export const SectionTwoButton = styled.button`
  background-color: rgba(72, 180, 248, 0.6);
  color: white;
  text-align: center;
  width: 200px;
  height: 50px;
  border-radius: 50px;
  font-size: 18px;
  font-weight: 300;
  margin-top: 20px;
  cursor: pointer;
`;

// section 3

export const SectionThirdCard = styled.div`
  box-shadow: "0px 4px 3.5px rgba(0, 0, 0, 0.8)";
  background-color: white;
  height: 300px;
  width: 250px;
  border-radius: 10px;
  overflow: hidden;

  ${MEDIA_QUERY_1440} {
    width: auto;
  }
`;

export const SectionThirdContent = styled.p`
  color: #404040;
  margin: 10px 0;
  font-size: 14px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
  height: 80px;
`;

//section 4
export const SectionFourCard = styled.div`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 10px;
  overflow: hidden;
  height: 280px;
  width: 200px;
  display: flex !important;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`;

export const SectionFourCardText = styled.div`
  display: flex;
  align-items: center;
  color: #6f6f6f;
  font-weight: 500;
  width: 100%;
  height: 40px;
  padding-left: 20px;
`;

//section 5
export const SectionFiveCard = styled.div`
  width: 100%;
  display: flex !important;
  align-items: center;
`;

//section 6
export const SectionSixVideoContainer = styled.div`
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  margin: 20px 0;
  width: 100%;
  height: 300px;
  position: relative;
`;
