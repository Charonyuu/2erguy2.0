import { FlexBox } from "@/styles/globalStyles";
import {
  Overlay,
  VideoContainer,
  SectionTwoText,
  SectionTwoButton,
} from "../../styles";

const VisitorTwoSection = () => {
  return (
    <FlexBox
      width="100%"
      height="500px"
      padding="100px"
      alignItems="center"
      justifyContent="center"
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
            時間共享是一個讓在地達人跟遊客 在現在快節奏的社會達到互利的一種方式
          </SectionTwoText>
          <SectionTwoButton>時間共享</SectionTwoButton>
        </FlexBox>
      </VideoContainer>
    </FlexBox>
  );
};

export default VisitorTwoSection