import { FlexBox, StyledText, CoverImg } from "@/styles/globalStyles";
import {
  SectionFourCard,
  SectionFourCardText,
  BottomButton,
} from "../../styles";
import Slider from "react-slick";

//icon
import BlueRightArrow from "public/icons/blueRightArrow.svg";

//utils
import windowSizeUtils from "@/utils/windowSize";

const VisitorFourSection = () => {
  /**
   * data
   */
  const { width } = windowSizeUtils();

  const PrevArrow = ({ onClick }) => {
    return (
      <FlexBox
        position="absolute"
        left={width > 1440 ? "10px" : "-20px"}
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
        right={width > 1440 ? "10px" : "-30px"}
        top="50%"
        zIndex="2"
        style={{ transform: "translateY(-50%)" }}
        pointer
      >
        <BlueRightArrow onClick={onClick} />
      </FlexBox>
    );
  };
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
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
        breakpoint: 768,
        settings: {
          slidesToShow: 2.3,
          slidesToScroll: 1,
          centerPadding: "60px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.8,
          slidesToScroll: 1,
          centerPadding: "60px",
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <FlexBox flexDirection="column" alignItems="center" p="20px 0">
      <StyledText fontSize="24px" color="#3E3E3E">
        歡度美好的假期
      </StyledText>
      <StyledText color="#848484">探索獨特的在地行程</StyledText>
      <FlexBox
        width="100%"
        height="300px"
        m="40px 0"
        p={width > 425 ? "0 50px" : "0 15px"}
      >
        <Slider className={"city-list"} {...settings}>
          {fakeJson.map((item, index) => (
            <FlexBox
              width="100%"
              justifyContent="center"
              key={index}
              p="0 15px"
            >
              <SectionFourCard>
                <FlexBox width="100%" height="240px">
                  <CoverImg src={item.img} />
                </FlexBox>
                <SectionFourCardText>{item.name}</SectionFourCardText>
              </SectionFourCard>
            </FlexBox>
          ))}
        </Slider>
      </FlexBox>
      <BottomButton>
        <StyledText color="#848484" fontSize="12px">
          查看所有目的地
        </StyledText>
      </BottomButton>
    </FlexBox>
  );
};

export default VisitorFourSection;

const fakeJson = [
  {
    name: "台北",
    img: "https://imgs.gvm.com.tw/upload/gallery/oimg24/24479_01.jpg",
  },
  {
    name: "台北",
    img: "https://imgs.gvm.com.tw/upload/gallery/oimg24/24479_01.jpg",
  },
  {
    name: "台北",
    img: "https://imgs.gvm.com.tw/upload/gallery/oimg24/24479_01.jpg",
  },
  {
    name: "台北",
    img: "https://imgs.gvm.com.tw/upload/gallery/oimg24/24479_01.jpg",
  },
  {
    name: "台北",
    img: "https://imgs.gvm.com.tw/upload/gallery/oimg24/24479_01.jpg",
  },
];
