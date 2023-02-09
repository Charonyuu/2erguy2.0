import styled from "styled-components";
import {
  background,
  border,
  boxShadow,
  color,
  compose,
  flexbox,
  layout,
  position,
  space,
  typography,
} from "styled-system";

export const FlexBox = styled.div`
  display: flex;
  position: relative;
  cursor: ${(props) => (props.pointer ? "pointer" : "unset")};
  ${compose(
    flexbox,
    position,
    space,
    layout,
    color,
    border,
    boxShadow,
    background,
    typography
  )}
`;

export const StyledText = styled.div`
  display: ${(props) => (props.flex ? "flex" : "block")};
  cursor: ${(props) => (props.pointer ? "pointer" : "unset")};
  ${compose(flexbox, space, color, typography, position, layout)}
`;

export const CoverImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
