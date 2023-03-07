import { FlexBox, StyledText, CoverImg } from "@/styles/globalStyles";
import {
  SectionThirdCard,
  SectionThirdContent,
  BottomButton,
} from "../../styles";
import Slider from "react-slick";

//icon
import EyeIcon from "public/icons/eyeIcon.svg";
import StarIcon from "public/icons/starIcon.svg";
import BlueRightArrow from "public/icons/blueRightArrow.svg";

//utils
import windowSizeUtils from "@/utils/windowSize";
import { useEffect, useRef } from "react";

const VisitorThirdSection = () => {
  /**
   * data
   */
  const { width } = windowSizeUtils();
  const sliderRef = useRef(null);

  const PrevArrow = ({ onClick }) => {
    return (
      <FlexBox
        position="absolute"
        left={width > 1440 ? "0px" : "-20px"}
        top="50%"
        zIndex="2"
        pointer
        style={{ transform: "rotate(180deg) translateY(50%)" }}
      >
        <BlueRightArrow onClick={onClick} />
      </FlexBox>
    );
  };
  const NextArrow = ({ onClick }) => {
    return (
      <FlexBox
        position="absolute"
        right={width > 1440 ? "0px" : "-20px"}
        top="50%"
        zIndex="2"
        pointer
        style={{ transform: "translateY(-50%)" }}
      >
        <BlueRightArrow onClick={onClick} />
      </FlexBox>
    );
  };
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    // centerMode: width <= 1024 ? true : false,
    infinite: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows:false
        },
      },
    ],
  };

  return (
    <FlexBox bg="#F6FBFB" flexDirection="column" alignItems="center" p="20px 0">
      <StyledText fontSize="24px" color="#3E3E3E">
        結交在地朋友
      </StyledText>
      <StyledText color="#848484">參與他們在地生活</StyledText>
      <FlexBox width="100%" height="300px" m="40px 0" p="0 50px">
        <Slider ref={sliderRef} className={"expert-list"} {...settings}>
          {fakeJson.map((item, index) => (
            <FlexBox
              width="100%"
              justifyContent="center"
              key={index}
              p="0 15px"
            >
              <SectionThirdCard>
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
            </FlexBox>
          ))}
        </Slider>
      </FlexBox>
      <BottomButton>
        <StyledText color="#848484" fontSize="12px">
          查看所有在地達人
        </StyledText>
      </BottomButton>
    </FlexBox>
  );
};

export default VisitorThirdSection;

const fakeJson = [
  {
    name: "Jessie",
    bg: "https://imgs.gvm.com.tw/upload/gallery/oimg24/24479_01.jpg",
    img: "https://www.youtaotu.com/uploads/allimg/191123/1-1911232219420-L.jpg",
    star: 4.8,
    look: 880,
    info: "台北24歲",
    content: "如果你想認識不⼀一樣的台北，就找我吧",
    hashtags: ["台北", "美食", "逛街"],
  },
  {
    name: "Jessie",
    bg: "https://imgs.gvm.com.tw/upload/gallery/oimg24/24479_01.jpg",
    img: "https://www.youtaotu.com/uploads/allimg/191123/1-1911232219420-L.jpg",
    star: 4.8,
    look: 880,
    info: "台北24歲",
    content: "如果你想認識不⼀一樣的台北，就找我吧",
    hashtags: ["台北", "美食", "逛街"],
  },
  {
    name: "Jessie",
    bg: "https://imgs.gvm.com.tw/upload/gallery/oimg24/24479_01.jpg",
    img: "https://www.youtaotu.com/uploads/allimg/191123/1-1911232219420-L.jpg",
    star: 4.8,
    look: 880,
    info: "台北24歲",
    content: "如果你想認識不⼀一樣的台北，就找我吧",
    hashtags: ["台北", "美食", "逛街"],
  },
  {
    name: "Jessie",
    bg: "https://imgs.gvm.com.tw/upload/gallery/oimg24/24479_01.jpg",
    img: "https://www.youtaotu.com/uploads/allimg/191123/1-1911232219420-L.jpg",
    star: 4.8,
    look: 880,
    info: "台北24歲",
    content:
      "如果你想認識不⼀一樣的台北，就找我吧如果你想認識不⼀一樣的台北，就找我吧如果你想認識不⼀一樣的台北，就找我吧如果你想認識不⼀一樣的台北，就找我吧",
    hashtags: ["台北", "美食", "逛街"],
  },
  {
    name: "Jessie",
    bg: "https://imgs.gvm.com.tw/upload/gallery/oimg24/24479_01.jpg",
    img: "https://www.youtaotu.com/uploads/allimg/191123/1-1911232219420-L.jpg",
    star: 4.8,
    look: 880,
    info: "台北24歲",
    content:
      "如果你想認識不⼀一樣的台北，就找我吧如果你想認識不⼀一樣的台北，就找我吧如果你想認識不⼀一樣的台北，就找我吧如果你想認識不⼀一樣的台北，就找我吧",
    hashtags: ["台北", "美食", "逛街"],
  },
];
