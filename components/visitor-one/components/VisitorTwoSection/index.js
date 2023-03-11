import { FlexBox } from "@/styles/globalStyles";
import {
  Overlay,
  VideoContainer,
  SectionTwoText,
  SectionTwoButton,
  MountainBg,
  RoleImg,
  TalkSection,
  TalkBox,
  RoleText,
  TalkText,
  TalkBtnSection,
  TalkBtn,
} from "../../styles";

//utils
import useWindowSizeUtils from "@/utils/windowSize";
import fakeDataUtils from "@/utils/fakeData";

const VisitorTwoSection = () => {
  const { width } = useWindowSizeUtils();
  const talkData = fakeDataUtils.getHomeRwdTalk();

  return (
    <>
      {width > 425 ? (
        <FlexBox
          width="85%"
          alignItems="center"
          justifyContent="center"
          m="0 auto"
          mt="50px"
          mb="50px"
        >
          <VideoContainer>
            <video src="fake/fakeVideo.mp4" autoPlay loop muted></video>
            <Overlay />
            <FlexBox
              flexDirection="column"
              alignItems="center"
              position="absolute"
              top="50%"
              left="50%"
              style={{ transform: "translate(-50%,-50%)" }}
            >
              <SectionTwoText>
                時間共享是一個讓在地達人跟遊客
                在現在快節奏的社會達到互利的一種方式
              </SectionTwoText>
              <SectionTwoButton>時間共享</SectionTwoButton>
            </FlexBox>
          </VideoContainer>
        </FlexBox>
      ) : (
        <FlexBox flexDirection="column">
          <MountainBg src="fake/index_sectionTwo_rwd.png" />
          <TalkSection>
            {talkData.map((item, index) => (
              <>
                {item.visitor && (
                  <FlexBox key={index} mb="20px">
                    <RoleImg m="13px 5px 0 0">
                      <img src="fake/index_talk_visitor.png" />
                    </RoleImg>
                    <TalkBox>
                      <RoleText m="0 0 3px 10px">遊客</RoleText>
                      <TalkText bg="white">
                        {item.visitor.split("/n").map((text, index) => (
                          <p key={index}>{text}</p>
                        ))}
                      </TalkText>
                    </TalkBox>
                  </FlexBox>
                )}
                {item.expert && (
                  <FlexBox justifyContent="flex-end" mb="20px">
                    <TalkBox alignItems="flex-end">
                      <RoleText m="0 10px 3px 0">在地達人</RoleText>
                      <TalkText bg="#7BC36B" color="white">
                        {item.expert.split("/n").map((text, index) => (
                          <p key={index}>{text}</p>
                        ))}
                      </TalkText>
                    </TalkBox>
                    <RoleImg m="13px 0 0 5px">
                      <img src="fake/index_talk_expert.png" />
                    </RoleImg>
                  </FlexBox>
                )}
              </>
            ))}
            <TalkBtnSection>
              <p>選一個你想做的行程</p>
              <TalkBtn>我要預約行程</TalkBtn>
              <TalkBtn>成為在地達人</TalkBtn>
            </TalkBtnSection>
          </TalkSection>
        </FlexBox>
      )}
    </>
  );
};

export default VisitorTwoSection;
