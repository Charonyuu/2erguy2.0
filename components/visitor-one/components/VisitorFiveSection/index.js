import { useState } from "react";
import { FlexBox, StyledText, CoverImg } from "@/styles/globalStyles";
import { BottomButton, SectionFiveCard } from "../../styles";
import Slider from "react-slick";

//icon
import BlueRightArrow from "public/icons/blueRightArrow.svg";

//utils
import windowSizeUtils from "@/utils/windowSize";

const VisitorFiveSection = () => {
  /**
   * data
   */
  const { width } = windowSizeUtils();
  const [expertName, setExpertName] = useState(fakeJson[0].name);

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
        right={width > 1440 ? "10px" : "-20px"}
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
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    dots: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 425,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  /**
   * func
   */
  //依瀏覽器寬度取得content的長度
  const _getContentLength = (content) => {
    if (width > 768) content = content.substring(0, 150) + "...";

    if (width <= 768) content = content.substring(0, 50) + "...";

    return content;
  };

  //切換slider
  const _changeSlider = (index) => {
    const expertName = fakeJson[index].name;
    setExpertName(expertName);
  };

  return (
    <FlexBox bg="#F6FBFB" flexDirection="column" alignItems="center" p="20px 0">
      <StyledText fontSize="24px" color="#3E3E3E">
        遊客評價
      </StyledText>
      <StyledText color="#848484">讓你知道其他遊客的想法</StyledText>
      <FlexBox width="100%" m="40px 0" p={width > 425 ? "0 50px" : "0 15px"}>
        <Slider
          className="evaluate-list"
          {...settings}
          afterChange={_changeSlider}
        >
          {fakeJson.map((item, index) => (
            <SectionFiveCard key={index}>
              <FlexBox
                width={width > 768 ? "45%" : "85%"}
                height={width > 768 ? "300px" : "200px"}
                aspectAatio="2/1"
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.160784) 3px 4px 3px",
                }}
              >
                <CoverImg src={item.img} />
              </FlexBox>
              <FlexBox
                flexDirection="column"
                width={width > 768 ? "50%" : "85%"}
                ml="20px"
                mt={width <= 768 && "15px"}
              >
                <StyledText mb="20px">{item.name}:</StyledText>
                <StyledText
                  flex
                  flexDirection="column"
                  alignItems="flex-end"
                  textAlign="justify"
                >
                  <p>{_getContentLength(item.content)}</p>
                  {width > 768 && (
                    <BottomButton m="10px 0">
                      <StyledText color="#848484" fontSize="12px">
                        預約{item.name}
                      </StyledText>
                    </BottomButton>
                  )}
                </StyledText>
              </FlexBox>
            </SectionFiveCard>
          ))}
        </Slider>
      </FlexBox>
      {width <= 768 && (
        <BottomButton>
          <StyledText color="#848484" fontSize="12px">
            預約{expertName}
          </StyledText>
        </BottomButton>
      )}
    </FlexBox>
  );
};

export default VisitorFiveSection;

const fakeJson = [
  {
    name: "Ironhan",
    img: "https://img95.699pic.com/photo/50141/4294.jpg_wh300.jpg",
    content:
      "「Angie是個很棒的邦友，不僅隨和，懂的東西也很多，更棒的是，能夠讓我們放鬆做自己，一起開心地遊玩，就算時間超過了，還是很親切的跑完行程，有機會的話下一次旅行還要再找Angie。其實我原本蠻排斥出國有導遊或跟團，害怕跟不熟的陌生人一起遊玩，或者有壓迫感，深怕出國玩還不能好好放鬆做自己，但Angie完全讓我放鬆了，人超好又隨和，好喜歡這種沒有壓力的介紹跟推薦，忍不住都馬上開始規劃下一次旅行了！！ＰＳ事後偷偷跟老公說Angie真的好美噢～不只一位朋友說導遊也太正了吧！！根本內外兼具！」",
  },
  {
    name: "May",
    img: "https://img95.699pic.com/photo/50141/4294.jpg_wh300.jpg",
    content:
      "「Angie是個很棒的邦友，不僅隨和，懂的東西也很多，更棒的是，能夠讓我們放鬆做自己，一起開心地遊玩，就算時間超過了，還是很親切的跑完行程，有機會的話下一次旅行還要再找Angie。其實我原本蠻排斥出國有導遊或跟團，害怕跟不熟的陌生人一起遊玩，或者有壓迫感，深怕出國玩還不能好好放鬆做自己，但Angie完全讓我放鬆了，人超好又隨和，好喜歡這種沒有壓力的介紹跟推薦，忍不住都馬上開始規劃下一次旅行了！！ＰＳ事後偷偷跟老公說Angie真的好美噢～不只一位朋友說導遊也太正了吧！！根本內外兼具！」",
  },
  {
    name: "Ironhan",
    img: "https://img95.699pic.com/photo/50141/4294.jpg_wh300.jpg",
    content:
      "「Angie是個很棒的邦友，不僅隨和，懂的東西也很多，更棒的是，能夠讓我們放鬆做自己，一起開心地遊玩，就算時間超過了，還是很親切的跑完行程，有機會的話下一次旅行還要再找Angie。其實我原本蠻排斥出國有導遊或跟團，害怕跟不熟的陌生人一起遊玩，或者有壓迫感，深怕出國玩還不能好好放鬆做自己，但Angie完全讓我放鬆了，人超好又隨和，好喜歡這種沒有壓力的介紹跟推薦，忍不住都馬上開始規劃下一次旅行了！！ＰＳ事後偷偷跟老公說Angie真的好美噢～不只一位朋友說導遊也太正了吧！！根本內外兼具！」",
  },
  {
    name: "Ironhan",
    img: "https://img95.699pic.com/photo/50141/4294.jpg_wh300.jpg",
    content:
      "「Angie是個很棒的邦友，不僅隨和，懂的東西也很多，更棒的是，能夠讓我們放鬆做自己，一起開心地遊玩，就算時間超過了，還是很親切的跑完行程，有機會的話下一次旅行還要再找Angie。其實我原本蠻排斥出國有導遊或跟團，害怕跟不熟的陌生人一起遊玩，或者有壓迫感，深怕出國玩還不能好好放鬆做自己，但Angie完全讓我放鬆了，人超好又隨和，好喜歡這種沒有壓力的介紹跟推薦，忍不住都馬上開始規劃下一次旅行了！！ＰＳ事後偷偷跟老公說Angie真的好美噢～不只一位朋友說導遊也太正了吧！！根本內外兼具！」",
  },
  {
    name: "Ironhan",
    img: "https://img95.699pic.com/photo/50141/4294.jpg_wh300.jpg",
    content:
      "「Angie是個很棒的邦友，不僅隨和，懂的東西也很多，更棒的是，能夠讓我們放鬆做自己，一起開心地遊玩，就算時間超過了，還是很親切的跑完行程，有機會的話下一次旅行還要再找Angie。其實我原本蠻排斥出國有導遊或跟團，害怕跟不熟的陌生人一起遊玩，或者有壓迫感，深怕出國玩還不能好好放鬆做自己，但Angie完全讓我放鬆了，人超好又隨和，好喜歡這種沒有壓力的介紹跟推薦，忍不住都馬上開始規劃下一次旅行了！！ＰＳ事後偷偷跟老公說Angie真的好美噢～不只一位朋友說導遊也太正了吧！！根本內外兼具！」",
  },
];
