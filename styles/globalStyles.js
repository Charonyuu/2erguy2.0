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
  cursor: ${props => props.pointer ? "pointer" : "unset"};
  ${compose(
    flexbox,
    position,
    space,
    layout,
    color,
    border,
    boxShadow,
    background
  )}
`;
