import styled from "styled-components";

export const SectionOneContainer = styled.div`
  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
  position: relative;
  width: 100%;
  height: 400px;
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.35);
`;

export const SectionOneBox = styled.div`
    p{
        color: white;
        font-size: 24px;
    }
  position: absolute;
  left: 200px;
  top: 200px;
`;

export const SectionOneInput = styled.input`
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.4);
  background-color: white;
  width: 300px;
  height: 30px;
  padding: 5px;
  font-size: 14px;
  border-radius: 4px;
  &::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #adadad;
    opacity: 1; /* Firefox */
  }
`;

export const SectionOneButton = styled.div`
  background-color: #ff6f6f;
  color: white;
  margin-left: 10px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: auto;
  padding: 0 10px;
`;
