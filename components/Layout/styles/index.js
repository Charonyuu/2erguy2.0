import styled from "styled-components";
import { FlexBox } from "@/styles/globalStyles";


// Header
export const HeaderContainer = styled(FlexBox)`
  justify-content: space-between;
  padding: 0 20px;
  width: 100%;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  background: #ffffff;
`;

export const LogoContainer = styled.div`
  img {
    width: 100px;
    height: 60px;
    object-fit: contain;
    cursor: pointer;
  }
  display: flex;
  align-items: center;
  width: 100px;
  height: auto;
`;

export const OptionContainer = styled(FlexBox)`
  svg {
    margin: 0 5px;
    cursor: pointer;
  }
  align-items: center;
`;

export const Text = styled.div`
  cursor: ${(props) => (props.cursor ? "initial" : "pointer")};
  margin: 0 5px;
  color: ${(props) => (props.white ? "#fff" : "#0ecfff")};
  font-size: ${(props) => (props.Size ? props.Size : "15px")};
  font-weight: 300;
  display: flex;
  align-items: center;
`;

export const BeExpertContainer = styled(FlexBox)`
  cursor: pointer;
  font-size: 15px;
  font-weight: 400;
  border-radius: 9px;
  justify-content: space-between;
  align-items: center;
  padding: 4px 9px;
  background-color: #0ecfff;
  color: white;
  margin-left: 10px;
`;

// Footer

export const FooterContainer = styled(FlexBox)`
  width: 100%;
  height: 400px;
  background-color: #1cafd1;
  justify-content: center;
  flex-direction: column;
`;

export const FooterOptionContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;
export const LeftFooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const JoinUs = styled(Text)`
  letter-spacing: 0.08em;
  font-size: 30px;
  color: white;
`;

export const IconContainer = styled(FlexBox)`
  svg {
    margin: 20px 10px 0;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
  justify-content: space-around;
`;

export const Divider = styled.div`
width: 2px;
  background: #ffffff;
  margin: 0 100px;
`;

export const RightFooterContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  color: white;
  height: 200px;
`;

export const FooterLine = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 26px;
  margin: 0 50px 0 0;
  div:nth-child(1) {
    margin-bottom: 10px;
  }
`;

export const CopyRightContatiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
