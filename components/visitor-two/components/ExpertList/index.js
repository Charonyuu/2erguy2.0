import React from "react";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// style
import { FlexBox, StyledText, CoverImg } from "@/styles/globalStyles";
import {
  SectionTwoContainer,
  TitleBig,
  PhotoBox,
  Photo,
  AuthenticateImg,
  ButtonMore,
  ServiceIcon,
  ServiceIconBox,
  AlbunmBox,
  Albunm,
  SectionThirdCard,
  SectionThirdContent,
  PageBox,
} from "../../styles";

//icon
import StarIcon from "public/icons/starIcon.svg";
import EyeIcon from "public/icons/eyeIcon.svg";
import BlueRightArrow from "public/icons/blueRightArrow.svg";

//utils
import fakeDataUtils from "@/utils/fakeData";
import windowSizeUtils from "@/utils/windowSize";

export default function ExpertList() {
  /**
   * data
   */
  /* 取得所有的達人 */
  const allExpert = fakeDataUtils.getAllExpert();
  const allExpertRwd = fakeDataUtils.getAllExpertRwd();
  /* 瀏覽器寬度 */
  const windowSize = windowSizeUtils();
  /* 頁數 */
  const [pageCounts, setPageCounts] = useState([]);
  const [activePageIndex, setActivePageIndex] = useState(0);

  useEffect(() => {
    const pageCounts = [];
    const pageCountsLength =
      allExpert.length % 10 === 0
        ? allExpert.length / 10
        : Math.trunc(allExpert.length / 10) + 1;
    for (let i = 0; i < pageCountsLength; i++) {
      pageCounts.push(i + 1);
    }
    setPageCounts(pageCounts);
  }, []);

  /**
   * func
   */
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

  /* 取得達人有哪些服務 */
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
      {allExpert.length && windowSize.width > 1024 ? (
        allExpert.map((item, index) => (
          <FlexBox
            key={index}
            justifyContent="space-between"
            borderBottom={allExpert.length - 1 > index && "1px solid #707070"}
            p="40px 0"
          >
            <FlexBox>
              {/* 大頭照 */}
              <FlexBox>
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
                m="0 0 0 35px"
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
            </FlexBox>
            {/* 相簿 & 服務 */}
            <FlexBox
              flexDirection="column"
              alignItems="flex-start"
              width={"70%"}
            >
              <FlexBox width={"100%"}>
                <Slider
                  className={item.albunm.length < 3 && "expert-album"}
                  {...sliderSettings}
                >
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
                <ServiceIconBox></ServiceIconBox>
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
        ))
      ) : (
        <FlexBox justifyContent="space-between" p="40px 0" flexWrap="wrap">
          {allExpertRwd.map((item, index) => (
            <SectionThirdCard
              key={index}
              width={windowSize.width <= 520 ? "100%" : "45%"}
              minWidth={windowSize.width <= 520 ? "100%" : "45%"}
              maxWidth={windowSize.width <= 520 ? "100%" : "45%"}
            >
              <FlexBox width="100%" height="90px" mb="30px">
                <CoverImg src={item.bg} />
                <FlexBox
                  position="absolute"
                  bottom="0"
                  width={60}
                  height={60}
                  borderRadius="50%"
                  left="20px"
                  overflow="hidden"
                  style={{ transform: "translateY(50%)" }}
                >
                  <CoverImg src={item.img} />
                </FlexBox>
              </FlexBox>
              <FlexBox padding="5px 15px" flexDirection="column">
                <FlexBox
                  justifyContent="space-between"
                  width="100%"
                  alignItems="center"
                >
                  <StyledText fontSize="24px">{item.name}</StyledText>
                  <FlexBox alignItems="center">
                    <EyeIcon />
                    <StyledText ml="5px" color="#5F5F5F">
                      {item.look}
                    </StyledText>
                  </FlexBox>
                </FlexBox>
                <FlexBox
                  justifyContent="space-between"
                  width="100%"
                  alignItems="center"
                >
                  <FlexBox alignItems="center">
                    <StarIcon />
                    <StyledText ml="5px" color="#5F5F5F" fontSize="10px">
                      {item.star}
                    </StyledText>
                  </FlexBox>
                  <StyledText color="#5F5F5F" fontSize="8px">
                    {item.info}
                  </StyledText>
                </FlexBox>
                <SectionThirdContent>{item.content}</SectionThirdContent>
                <FlexBox>
                  {item.hashtags.length > 0 &&
                    item.hashtags.map((hashtag, index) => (
                      <StyledText
                        color="#0680AC"
                        mr="5px"
                        fontSize="10px"
                        key={index}
                      >
                        {"#" + hashtag}
                      </StyledText>
                    ))}
                </FlexBox>
              </FlexBox>
            </SectionThirdCard>
          ))}
        </FlexBox>
      )}
      {!allExpert.length && (
        <FlexBox
          justifyContent="center"
          alignItems="center"
          fontSize="14px"
          height="100px"
          color="rgb(117, 117, 117)"
        >
          無符合你需求的在地達人
        </FlexBox>
      )}
      <FlexBox justifyContent="center">
        {pageCounts.length &&
          pageCounts.map((item, index) => (
            <PageBox
              background={activePageIndex === index ? "#5bd0fa" : "transparent"}
              color={activePageIndex === index ? "#ffffff" : "#060606"}
              onClick={() => setActivePageIndex(index)}
            >
              {item}
            </PageBox>
          ))}
      </FlexBox>
    </SectionTwoContainer>
  );
}
