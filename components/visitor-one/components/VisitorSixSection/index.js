import { FlexBox, StyledText, CoverImg } from "@/styles/globalStyles";
import { BottomButton, SectionSixVideoContainer } from "../../styles";


import PlayIcon from "public/icons/playIcon.svg"


const VisitorSixSection = () => {
  
  return (
    <FlexBox flexDirection="column" alignItems="center" p="20px 0">
      <StyledText fontSize="30px" color="#3E3E3E">
        關於我們
      </StyledText>
      <StyledText color="#848484">認識 2erguy</StyledText>
      <SectionSixVideoContainer>
        <video src="fake/fakeVideo.mp4" />
        <FlexBox
          position="absolute"
          left="50%"
          top="50%"
          width="68px"
          height="68px"
          borderRadius="50%"
          bg="rgba(255, 255, 255, 0.3)"
          justifyContent="center"
          alignItems="center"
          style={{transform:'translate(-50%,-50%)'}}
          pl="8px"
          pointer
        >
          <PlayIcon />
        </FlexBox>
      </SectionSixVideoContainer>
      <BottomButton>
        <StyledText color="#848484" fontSize="12px">
          了解2erguy
        </StyledText>
      </BottomButton>
    </FlexBox>
  );
};

export default VisitorSixSection;