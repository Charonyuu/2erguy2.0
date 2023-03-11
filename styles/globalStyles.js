import styled from "styled-components";
import {
  MEDIA_QUERY_320,
  MEDIA_QUERY_375,
  MEDIA_QUERY_425,
  MEDIA_QUERY_426,
  MEDIA_QUERY_720,
  MEDIA_QUERY_768,
  MEDIA_QUERY_1024,
  MEDIA_QUERY_1440,
} from "@/styles/constants/media";
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
  aspect-ratio: ${(props) => (props.aspectAatio ? props.aspectAatio : "inherit")};
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
  text-align: ${(props) => (props.textAlign ? props.textAlign : "")};
  ${compose(flexbox, space, color, typography, position, layout)}
`;

export const CoverImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
