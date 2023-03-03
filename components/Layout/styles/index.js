import styled from "styled-components";
import {
  background,
  border,
  boxShadow,
  color,
  compose,
  flex,
  flexbox,
  layout,
  position,
  space,
  typography,
} from "styled-system";
import { FlexBox } from "@/styles/globalStyles";
import {
  MEDIA_QUERY_426,
  MEDIA_QUERY_720,
  MEDIA_QUERY_768,
  MEDIA_QUERY_1024,
} from "../../../styles/constants/media";

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

  ${MEDIA_QUERY_720} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Hamburger = styled.div`
  cursor: pointer;

  svg {
    color: #11cfff;
    font-size: 35px;
    height: 100%;
    display: block;
  }

  ${MEDIA_QUERY_720} {
    position: absolute;
    left: 20px;
  }
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
  z-index: -2;
`;

export const OptionContainer = styled(FlexBox)`
  svg {
    margin: 0 5px;
    cursor: pointer;
  }
  align-items: center;
`;

export const Text = styled.div`
  cursor: ${(props) => props.cursor};
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

//NavBar
export const NavBarContatiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  top: 0;
  left: 0;
  background: white;
  width: 300px;
  height: 100vh;
  padding: 0 0 0 20px;
`;

export const RowContatiner = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 5px 0;
  min-width: ${(props) => props.minWidth};
  cursor: ${(props) => props.cursor};
  ${compose(flexbox)}

  .hamburgerIcon {
    color: #11cfff;
    font-size: 35px;
    height: 100%;
    display: block;
    
  }

  .messageIcon,
  .cartIcon {
    color: #11cfff;
  }

  .arrowDownIcon {
    color: #8d8d8d;
    font-size: 18px;
  }

  svg {
    &:hover {
      opacity: 0.8;
    }
  }
`;

export const ColContatiner = styled.div`
  display: flex;
  margin: 5px 0;
  ${compose(flexbox, border, color, layout, space)}
`;

export const AvatarContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Name = styled.div`
  font-size: 18px;
  color: #5d5d5d;
`;

export const LittleText = styled.div`
  display: flex;
  font-size: 14px;
  color: #8d8d8d;
  margin: 2px 0;
  cursor: pointer;
  min-width: ${(props) => props.minWidth};
  ${compose(flexbox, border, color, layout, space)}

  &:hover {
    opacity: 0.8;
  }
`;

export const BigText = styled.div`
  font-size: 18px;
  color: #8d8d8d;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const BeExpertBtn = styled.div`
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  border-radius: 9px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 9px;
  background-color: #0ecfff;
  color: white;

  &:hover {
    opacity: 0.8;
  }

  p {
    margin-right: 5px;
  }
`;

export const RowdivideLine = styled.div`
  width: 90%;
  height: 1px;
  background: #f0f0f0;
  margin: 10px 0 20px 0;
`;

export const NavBarMask = styled.div`
  position: absolute;
  left: 0;
  z-index: -1;
  background: #4d4d4d65;
  width: 100vw;
  height: 100vh;
`;
