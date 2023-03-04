import React from "react";
import { FlexBox, StyledText } from "@/styles/globalStyles";
import styled from "styled-components";
import DownArrowIcon from "public/icons/grayfillDownArrow.svg";
import UploadIcon from "public/icons/uploadIcon.svg";
import Locker from "public/icons/locker.svg";


const grayBorder = "1px solid #B5B5B6";
const grayTextColor = "#A39FA0";
const blueBorder = "1px solid #A7E0F9";
const blueTextColor = "#0095C1";

export default function DesktopExpertFour() {
  return (
    <FlexBox justifyContent="center" color={grayTextColor}>
      <FlexBox flexDirection="column" p="60px 20px 20px" width="80%">
        <FlexBox justifyContent="flex-end" height="30px" alignItems="center">
          <StyledText fontSize="14px" mr="5px">自動儲存</StyledText>
          <CheckBoxWrapper >
            <CheckBox id="checkbox" type="checkbox"/>
            <CheckBoxLabel htmlFor="checkbox" />
          </CheckBoxWrapper>
        </FlexBox>
        <AccountContainer />
        <ProfileContainer />
        <PrivacyContainer />
        <PasswordContainer />
      </FlexBox>
    </FlexBox>
  );
}

// 基本資料
const AccountContainer = () => {
  return (
    <FlexBox
      height="fit-content"
      border="1px solid #A7E0F9"
      flexDirection="column"
      borderRadius="10px"
      m="10px 0 20px"
    >
      <FlexBox
        height="40px"
        bg="#A7E0F9"
        color="#0095C1"
        fontSize="24px"
        borderRadius="10px 10px 0 0"
        justifyContent="center"
        alignItems="center"
      >
        基本資料
      </FlexBox>
      <FlexBox p="5%" justifyContent="space-between">
        <FlexBox
          border={grayBorder}
          height="240px"
          width="30%"
          borderRadius="10px"
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
          fontSize="14px"
        >
          <UploadIcon />
          <StyledText mt="5px">上傳個人照片</StyledText>
        </FlexBox>
        <FlexBox flexDirection="column" width="60%">
          <FlexBox alignItems="center" mb="10px">
            <StyledText mr="20px" width="60px">
              帳號
            </StyledText>
            <Input width={"100%"} />
          </FlexBox>
          <FlexBox alignItems="center" mb="10px">
            <StyledText mr="20px" width="60px">
              姓氏
            </StyledText>
            <Input width={"100%"} />
          </FlexBox>
          <FlexBox alignItems="center" mb="10px">
            <StyledText mr="20px" width="60px">
              名字
            </StyledText>
            <Input width={"100%"} />
          </FlexBox>
          <FlexBox alignItems="center" mb="10px">
            <StyledText mr="20px" width="60px">
              生日
            </StyledText>
            <Input width={"100%"} />
          </FlexBox>
          <FlexBox alignItems="center" mb="10px">
            <StyledText mr="20px" width="60px">
              居住地
            </StyledText>
            <FlexBox justifyContent="space-between" width="100%">
              <Input width={"48%"} />
              <Input width={"48%"} />
            </FlexBox>
          </FlexBox>
          <FlexBox alignItems="center" mb="10px">
            <StyledText mr="20px" width="60px">
              語言
            </StyledText>
            <FlexBox justifyContent="space-between" width="100%">
              <LanguageBox>中文</LanguageBox>
              <LanguageBox>英文</LanguageBox>
              <LanguageBox>韓文</LanguageBox>
              <LanguageBox>日文</LanguageBox>
            </FlexBox>
          </FlexBox>
        </FlexBox>
      </FlexBox>
      <FlexBox alignItems="center" mb="10px" p="0 5%">
        <StyledText mr="20px" width="100px">
          關鍵字設定
        </StyledText>
        <Input width={"100%"} />
      </FlexBox>
      <FlexBox
        borderTop={blueBorder}
        width="100%"
        justifyContent="center"
        alignItems="center"
        p="5px 0"
      >
        <DownArrowIcon
          style={{ transform: "rotate(180deg)", cursor: "pointer" }}
        />
      </FlexBox>
    </FlexBox>
  );
};
// 個人簡介
const ProfileContainer = () => {
  return (
    <FlexBox
      height="fit-content"
      border="1px solid #A7E0F9"
      flexDirection="column"
      borderRadius="10px"
      mb="20px"
    >
      <FlexBox
        height="40px"
        bg="#A7E0F9"
        color="#0095C1"
        fontSize="24px"
        borderRadius="10px 10px 0 0"
        justifyContent="center"
        alignItems="center"
      >
        個人簡介
      </FlexBox>
      <FlexBox p="5%" justifyContent="space-between">
        <FlexBox
          border={grayBorder}
          height="240px"
          width="30%"
          borderRadius="10px"
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
          fontSize="14px"
        >
          <UploadIcon />
          <StyledText mt="5px">上傳個人照片</StyledText>
        </FlexBox>
        <FlexBox flexDirection="column" width="60%">
          <FlexBox alignItems="center" mb="10px">
            <StyledText mr="20px" width="60px">
              帳號
            </StyledText>
            <Input width={"100%"} />
          </FlexBox>
          <FlexBox alignItems="center" mb="10px">
            <StyledText mr="20px" width="60px">
              姓氏
            </StyledText>
            <Input width={"100%"} />
          </FlexBox>
          <FlexBox alignItems="center" mb="10px">
            <StyledText mr="20px" width="60px">
              名字
            </StyledText>
            <Input width={"100%"} />
          </FlexBox>
          <FlexBox alignItems="center" mb="10px">
            <StyledText mr="20px" width="60px">
              生日
            </StyledText>
            <Input width={"100%"} />
          </FlexBox>
          <FlexBox alignItems="center" mb="10px">
            <StyledText mr="20px" width="60px">
              居住地
            </StyledText>
            <FlexBox justifyContent="space-between" width="100%">
              <Input width={"48%"} />
              <Input width={"48%"} />
            </FlexBox>
          </FlexBox>
          <FlexBox alignItems="center" mb="10px">
            <StyledText mr="20px" width="60px">
              語言
            </StyledText>
            <FlexBox justifyContent="space-between" width="100%">
              <LanguageBox>中文</LanguageBox>
              <LanguageBox>英文</LanguageBox>
              <LanguageBox>韓文</LanguageBox>
              <LanguageBox>日文</LanguageBox>
            </FlexBox>
          </FlexBox>
        </FlexBox>
      </FlexBox>
      <FlexBox alignItems="center" mb="10px" p="0 5%">
        <StyledText mr="20px" width="100px">
          關鍵字設定
        </StyledText>
        <Input width={"100%"} />
      </FlexBox>
      <FlexBox
        borderTop={blueBorder}
        width="100%"
        justifyContent="center"
        alignItems="center"
        p="5px 0"
      >
        <DownArrowIcon
          style={{ transform: "rotate(180deg)", cursor: "pointer" }}
        />
      </FlexBox>
    </FlexBox>
  );
};
// 隱私
const PrivacyContainer = () => {
  return (
    <FlexBox
      height="fit-content"
      border="1px solid #A7E0F9"
      flexDirection="column"
      borderRadius="10px"
      mb="20px"
    >
      <FlexBox
        height="40px"
        bg="#A7E0F9"
        color="#0095C1"
        fontSize="24px"
        borderRadius="10px 10px 0 0"
        justifyContent="center"
        alignItems="center"
      >
        隱私設定
      </FlexBox>

      <FlexBox flexDirection="column" width="100%" p="20px" alignItems="center">
        <FlexBox alignItems="center" mb="10px" width="100%">
          <Locker />
          <StyledText mr="20px" width="150px" ml="5px">
            手機號碼
          </StyledText>
          <Input width={"100%"} />
        </FlexBox>
        <FlexBox alignItems="center" mb="10px" width="100%">
          <Locker />
          <StyledText mr="20px" width="150px" ml="5px">
            緊急連絡人電話
          </StyledText>
          <Input width={"100%"} />
        </FlexBox>
        <FlexBox alignItems="center" mb="10px" width="100%">
          <Locker />
          <StyledText mr="20px" width="150px" ml="5px">
            緊急連絡人地址
          </StyledText>
          <Input width={"100%"} />
        </FlexBox>
      </FlexBox>
      <FlexBox
        borderTop={blueBorder}
        width="100%"
        justifyContent="center"
        alignItems="center"
        p="5px 0"
      >
        <DownArrowIcon
          style={{ transform: "rotate(180deg)", cursor: "pointer" }}
        />
      </FlexBox>
    </FlexBox>
  );
};

const PasswordContainer = () => {
  return (
    <FlexBox
      height="fit-content"
      border="1px solid #A7E0F9"
      flexDirection="column"
      borderRadius="10px"
      mb="20px"
    >
      <FlexBox
        height="40px"
        bg="#A7E0F9"
        color="#0095C1"
        fontSize="24px"
        borderRadius="10px 10px 0 0"
        justifyContent="center"
        alignItems="center"
      >
        變更密碼
      </FlexBox>

      <FlexBox flexDirection="column" width="100%" p="20px" alignItems="center">
        <FlexBox alignItems="center" mb="10px" width="100%">
          <StyledText mr="20px" width="150px" ml="5px">
            請輸入新密碼
          </StyledText>
          <Input width={"100%"} />
        </FlexBox>
        <FlexBox alignItems="center" mb="10px" width="100%">
          <StyledText mr="20px" width="150px" ml="5px">
            再次輸入新密碼
          </StyledText>
          <Input width={"100%"} />
        </FlexBox>
      </FlexBox>
      <FlexBox
        borderTop={blueBorder}
        width="100%"
        justifyContent="center"
        alignItems="center"
        p="5px 0"
      >
        <DownArrowIcon
          style={{ transform: "rotate(180deg)", cursor: "pointer" }}
        />
      </FlexBox>
    </FlexBox>
  );
};

const Input = styled.input`
  border: 1px solid #b5b5b6;
  border-radius: 10px;
  padding-left: 10px;
  width: ${(props) => props.width};
  height: 30px;
`;

const LanguageBox = styled(FlexBox)`
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  width: 24%;
  height: 30px;
  border: 1px solid #a7e0f9;
  cursor: pointer;
`;


const CheckBoxWrapper = styled.div`
  position: relative;
  height: 20px;
`;
const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 20px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 14px;
    height: 14px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 20px;
  &:checked + ${CheckBoxLabel} {
    background: #0ecfff;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 14px;
      height: 14px;
      margin-left: 24px;
      transition: 0.2s;
    }
  }
`;





