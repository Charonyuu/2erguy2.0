import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// style
import { FlexBox } from "@/styles/globalStyles";
import {
  SectionTwoContainer,
  TitleBig,
  PhotoBox,
  Photo,
  AuthenticateImg,
  ButtonMore,
  ServiceIcon,
  AlbunmBox,
  Albunm,
} from "../../styles";

//icon
import StarIcon from "public/icons/starIcon.svg";
import EyeIcon from "public/icons/eyeIcon.svg";
import BlueRightArrow from "public/icons/blueRightArrow.svg";

//utils
import fakeDataUtils from "@/utils/fakeData";

export default function ExpertList() {
  /** 取得所有的達人 */
  const allExpert = fakeDataUtils.getAllExpert();

  /** 輪播 */
  /* 輪播-上一個箭頭 */
  const PrevArrow = ({ onClick }) => {
    return (
      <FlexBox
        position="absolute"
        left="0px"
        top="50%"
        zIndex="2"
        pointer
        style={{ transform: "rotate(180deg) translateY(50%)" }}
      >
        <BlueRightArrow onClick={onClick} />
      </FlexBox>
    );
  };
  /* 輪播-下一個箭頭 */
  const NextArrow = ({ onClick }) => {
    return (
      <FlexBox
        position="absolute"
        right="0px"
        top="50%"
        zIndex="2"
        pointer
        style={{ transform: "translateY(-50%)" }}
      >
        <BlueRightArrow onClick={onClick} />
      </FlexBox>
    );
  };
  /* 輪播-設定 */
  const sliderSettings = {
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    autoplay: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  /** 取得達人有哪些服務 */
  const _getServiceIcon = (EService, services) => {
    let isIncludesService = services.includes(EService);
    /* 檔名 */
    return `icons/feature${EService + 1}_notext_${
      isIncludesService ? "blue_" : ""
    }icon.svg`;
  };

  return (
    <SectionTwoContainer>
      <FlexBox justifyContent="center">
        <TitleBig>符合你需求的在地達人</TitleBig>
      </FlexBox>
      {allExpert.length &&
        allExpert.map((item, index) => (
          <FlexBox
            key={index}
            justifyContent="space-between"
            borderBottom={"1px solid #707070"}
            p="40px 0"
          >
            {/* 大頭照 */}
            <FlexBox position="relative">
              <PhotoBox>
                <Photo src={item.photo} alt="達人照片" />
              </PhotoBox>
              <AuthenticateImg>v</AuthenticateImg>
            </FlexBox>
            {/* 個人資訊 */}
            <FlexBox
              flexDirection="column"
              justifyContent="space-between"
              alignItems="start"
            >
              <FlexBox fontWeight="bold">{item.nickName}</FlexBox>
              <FlexBox alignItems="center" fontSize={14}>
                <StarIcon style={{ marginRight: "10px" }} />
                {item.evaluate}
              </FlexBox>
              <FlexBox alignItems="center" fontSize={14}>
                <EyeIcon style={{ marginRight: "10px" }} />
                {item.viewCount}
              </FlexBox>
              <FlexBox alignItems="center" fontSize={12} color="#5bd0fa">
                TWD
                <span
                  style={{
                    fontSize: "14px",
                    margin: "0 5px",
                    fontWeight: "bold",
                  }}
                >
                  {item.price}
                </span>
                起
              </FlexBox>
              <ButtonMore>了解更多</ButtonMore>
            </FlexBox>
            {/* 相簿 & 服務 */}
            <FlexBox
              flexDirection="column"
              alignItems="flex-start"
              width={"70%"}
            >
              <FlexBox width={"100%"}>
                <Slider {...sliderSettings}>
                  {item.albunm.map((item, index) => (
                    <AlbunmBox key={index}>
                      <Albunm src={item} alt="達人相簿" />
                    </AlbunmBox>
                  ))}
                </Slider>
              </FlexBox>
              <FlexBox
                width={"100%"}
                justifyContent="flex-start"
                m={"10px 0 0 0"}
              >
                {/* 卡位 */}
                <div style={{ width: "10%" }}></div>
                <FlexBox width={"100%"}>
                  {/* 0: 私房地圖 */}
                  <ServiceIcon src={_getServiceIcon(0, item.services)} />
                  {/* 1: 美食景點 */}
                  <ServiceIcon src={_getServiceIcon(1, item.services)} />
                  {/* 2: 在地體驗 */}
                  <ServiceIcon src={_getServiceIcon(2, item.services)} />
                  {/* 3: 代購服務 */}
                  <ServiceIcon src={_getServiceIcon(3, item.services)} />
                  {/* 4: 咖啡交友 */}
                  <ServiceIcon src={_getServiceIcon(4, item.services)} />
                  {/* 5: 接機代駕 */}
                  <ServiceIcon src={_getServiceIcon(5, item.services)} />
                </FlexBox>
              </FlexBox>
            </FlexBox>
          </FlexBox>
        ))}
    </SectionTwoContainer>
  );
}
