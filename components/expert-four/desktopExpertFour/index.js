import React, { useRef, useState } from "react";
import { FlexBox, StyledText } from "@/styles/globalStyles";
import styled from "styled-components";
import DownArrowIcon from "public/icons/grayfillDownArrow.svg";
import UploadIcon from "public/icons/uploadIcon.svg";
import Locker from "public/icons/locker.svg";
import LightIcon from "public/icons/lightIcon.svg";
import ShieldIcon from "public/icons/shield.svg";
import ClockIcon from "public/icons/ExpertIcon/clock.svg";
import MapIcon from "public/icons/ExpertIcon/map.svg";
import EditIcon from "public/icons/ExpertIcon/edit.svg";
import ArrowIcon from "public/icons/ExpertIcon/arrow.svg";
import CreditCardIcon from "public/icons/ExpertIcon/creditCard.svg";

const grayBorder = "1px solid #B5B5B6";
const grayTextColor = "#A39FA0";
const blueBorder = "1px solid #A7E0F9";
const blueTextColor = "#0095C1";

export default function DesktopExpertFour() {
  return (
    <FlexBox justifyContent="center" color={grayTextColor}>
      <FlexBox flexDirection="column" p="60px 20px 20px" width="80%">
        <Nav/>
        <FlexBox justifyContent="flex-end" height="30px" alignItems="center">
          <StyledText fontSize="14px" mr="5px">
            自動儲存
          </StyledText>
          <CheckBoxWrapper>
            <CheckBox id="checkbox" type="checkbox" />
            <CheckBoxLabel htmlFor="checkbox" />
          </CheckBoxWrapper>
        </FlexBox>
        <AccountContainer />
        <ProfileContainer />
        <PrivacyContainer />
        <PasswordContainer />
        <IdentityContainer />
        <FlexBox justifyContent="center">
          <FlexBox
            bg="#00BDEC"
            p="4px 15px"
            color="#fff"
            borderRadius="10px"
            fontSize="20px"
            mr="20px"
          >
            上一頁
          </FlexBox>
          <FlexBox
            bg="#00BDEC"
            p="4px 15px"
            color="#fff"
            borderRadius="10px"
            fontSize="20px"
            ml="20px"
          >
            下一頁
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
}
//nav
const Nav = () => {
  return (
    <FlexBox
      justifyContent="space-around"
      m="20px 0"
      p="0 50px"
      alignItems="center"
    >
      <FlexBox alignItems="center" style={{cursor:'pointer'}}>
        <ClockIcon />
        <StyledText ml="10px">時間分享</StyledText>
      </FlexBox>
      <ArrowIcon />
      <FlexBox alignItems="center" style={{cursor:'pointer'}}>
        <MapIcon />
        <StyledText ml="10px">編輯服務</StyledText>
      </FlexBox>
      <ArrowIcon />
      <FlexBox alignItems="center" style={{cursor:'pointer'}}>
        <EditIcon />
        <StyledText ml="10px" color="#0096C8">
          個人檔案
        </StyledText>
      </FlexBox>
      <ArrowIcon />
      <FlexBox alignItems="center" style={{cursor:'pointer'}}>
        <CreditCardIcon />
        <StyledText ml="10px">收款資訊</StyledText>
      </FlexBox>
    </FlexBox>
  );
};

// 基本資料
const AccountContainer = () => {
  const InputRef = useRef(null);
  const [isToggle, setIsToggle] = useState(true);
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
      <ToggleMenu toggle={isToggle}>
        <FlexBox width="100%" justifyContent="space-between">
          <FlexBox
            border={grayBorder}
            height="240px"
            width="30%"
            borderRadius="10px"
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
            fontSize="14px"
            onClick={() => InputRef.current.click()}
            style={{ cursor: "pointer" }}
          >
            <UploadIcon />
            <StyledText mt="5px">上傳個人照片</StyledText>
            <input type="file" ref={InputRef} hidden />
          </FlexBox>
          <FlexBox flexDirection="column" width="60%">
            <FlexBox alignItems="center" mb="10px">
              <StyledText mr="20px" width="60px">
                帳號
                <RedDot />
              </StyledText>
              <Input width={"100%"} />
            </FlexBox>
            <FlexBox alignItems="center" mb="10px">
              <StyledText mr="20px" width="60px">
                姓氏
                <RedDot />
              </StyledText>
              <Input width={"100%"} />
            </FlexBox>
            <FlexBox alignItems="center" mb="10px">
              <StyledText mr="20px" width="60px">
                名字
                <RedDot />
              </StyledText>
              <Input width={"100%"} />
            </FlexBox>
            <FlexBox alignItems="center" mb="10px">
              <StyledText mr="20px" width="60px">
                生日
                <RedDot />
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
        <FlexBox alignItems="center" mt="20px" width="100%" justifyContent="">
          <StyledText mr="20px" width="100px">
            關鍵字設定
          </StyledText>
          <Input width={"100%"} />
        </FlexBox>
      </ToggleMenu>

      <FlexBox
        borderTop={blueBorder}
        width="100%"
        justifyContent="center"
        alignItems="center"
        p="5px 0"
        onClick={() => setIsToggle(!isToggle)}
      >
        <DownArrowIcon
          style={{
            transform: isToggle && "rotate(180deg)",
            cursor: "pointer",
          }}
        />
      </FlexBox>
    </FlexBox>
  );
};
// 個人簡介
const ProfileContainer = () => {
  const [isToggle, setIsToggle] = useState(true);
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
      <ToggleMenu justifyContent="space-between" toggle={isToggle}>
        <FlexBox flexDirection="column" width="100%">
          <FlexBox alignItems="center" mb="10px">
            <StyledText mr="20px" width="120px">
              關於我
            </StyledText>
            <Input width={"100%"} placeholder="用一句話形容自己吧!" />
          </FlexBox>
          <FlexBox mb="10px" ml="120px" alignItems="center">
            <LightIcon />
            <StyledText ml="5px">此欄位文字將會放在個人照片內</StyledText>
          </FlexBox>
          <FlexBox alignItems="flex-start" mb="10px">
            <StyledText mr="20px" width="120px" mt="5px">
              自我介紹
            </StyledText>
            <TextArea width={"100%"} />
          </FlexBox>
          <FlexBox alignItems="flex-start" mb="10px">
            <StyledText mr="20px" width="120px" mt="5px">
              主頁照片
            </StyledText>
            <Box width="100%" height="150px">
              <UploadIcon />
            </Box>
          </FlexBox>
          <FlexBox alignItems="flex-start" mb="10px">
            <StyledText mr="20px" width="120px" mt="5px">
              生活照
            </StyledText>
            <FlexBox width="100%">
              <Box width="100px" height="100px">
                <UploadIcon />
              </Box>
            </FlexBox>
          </FlexBox>
          <FlexBox alignItems="flex-start" mb="10px">
            <StyledText mr="20px" width="120px" mt="5px">
              簡介影片
            </StyledText>
            <FlexBox width="100%">
              <Box width="50%" height="100px">
                <UploadIcon />
              </Box>
            </FlexBox>
          </FlexBox>
        </FlexBox>
      </ToggleMenu>

      <FlexBox
        borderTop={blueBorder}
        width="100%"
        justifyContent="center"
        alignItems="center"
        p="5px 0"
        onClick={() => setIsToggle(!isToggle)}
      >
        <DownArrowIcon
          style={{
            transform: isToggle && "rotate(180deg)",
            cursor: "pointer",
          }}
        />
      </FlexBox>
    </FlexBox>
  );
};
// 隱私
const PrivacyContainer = () => {
  const [isToggle, setIsToggle] = useState(true);
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

      <ToggleMenu width="100%" alignItems="center" toggle={isToggle}>
        <FlexBox
          alignItems="center"
          justifyContent="flex-end"
          width="100%"
          mb="5px"
        >
          <LightIcon />
          <StyledText ml="5px" color="#CCCCCC">
            此欄位為保密資訊
          </StyledText>
        </FlexBox>
        <FlexBox alignItems="center" mb="10px" width="100%">
          <Locker />
          <StyledText mr="20px" width="200px" ml="5px">
            手機號碼
            <RedDot />
          </StyledText>
          <Input width={"100%"} />
        </FlexBox>
        <FlexBox alignItems="center" mb="10px" width="100%">
          <Locker />
          <StyledText mr="20px" width="200px" ml="5px">
            緊急連絡人電話
            <RedDot />
          </StyledText>
          <Input width={"100%"} />
        </FlexBox>
        <FlexBox alignItems="center" mb="10px" width="100%">
          <Locker />
          <StyledText mr="20px" width="200px" ml="5px">
            緊急連絡人地址
            <RedDot />
          </StyledText>
          <Input width={"100%"} />
        </FlexBox>
      </ToggleMenu>
      <FlexBox
        borderTop={blueBorder}
        width="100%"
        justifyContent="center"
        alignItems="center"
        p="5px 0"
        onClick={() => setIsToggle(!isToggle)}
      >
        <DownArrowIcon
          style={{
            transform: isToggle && "rotate(180deg)",
            cursor: "pointer",
          }}
        />
      </FlexBox>
    </FlexBox>
  );
};
// 密碼
const PasswordContainer = () => {
  const [isToggle, setIsToggle] = useState(true);
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
      <ToggleMenu width="100%" alignItems="center" toggle={isToggle}>
        <FlexBox
          alignItems="center"
          justifyContent="flex-end"
          width="100%"
          mb="5px"
        >
          <LightIcon />
          <StyledText ml="5px" color="#CCCCCC">
            此欄位為保密資訊
          </StyledText>
        </FlexBox>
        <FlexBox alignItems="center" mb="10px" width="100%">
          <StyledText mr="20px" width="215px" ml="5px">
            請輸入新密碼
          </StyledText>
          <Input width={"100%"} />
        </FlexBox>
        <FlexBox alignItems="center" mb="10px" width="100%">
          <StyledText mr="20px" width="215px" ml="5px">
            再次輸入新密碼
          </StyledText>
          <Input width={"100%"} />
        </FlexBox>
        <FlexBox width="100%" justifyContent="flex-end">
          <FlexBox
            bg="#00BDEC"
            p="2px 10px"
            color="#fff"
            borderRadius="20px"
            style={{ cursor: "pointer" }}
          >
            儲存
          </FlexBox>
        </FlexBox>
      </ToggleMenu>
      <FlexBox
        borderTop={blueBorder}
        width="100%"
        justifyContent="center"
        alignItems="center"
        p="5px 0"
        onClick={() => setIsToggle(!isToggle)}
      >
        <DownArrowIcon
          style={{
            transform: isToggle && "rotate(180deg)",
            cursor: "pointer",
          }}
        />
      </FlexBox>
    </FlexBox>
  );
};
// 身份驗證
const IdentityContainer = () => {
  const [isToggle, setIsToggle] = useState(true);
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
        身份驗證
      </FlexBox>

      <ToggleMenu width="100%" alignItems="center" toggle={isToggle}>
        <FlexBox
          alignItems="center"
          justifyContent="flex-end"
          width="100%"
          mb="5px"
        >
          <LightIcon />
          <StyledText ml="5px" color="#CCCCCC">
            此欄位為保密資訊
          </StyledText>
        </FlexBox>
        <FlexBox alignItems="center" mb="10px" width="100%">
          <Locker />
          <StyledText mr="20px" width="215px" ml="5px">
            身份證字號 / 護照號碼
          </StyledText>
          <Input width={"100%"} />
        </FlexBox>
        <FlexBox alignItems="flex-start" mb="10px" width="100%">
          <FlexBox flexDirection="column" width="240px" mr="20px">
            <FlexBox alignItems="center">
              <Locker />
              <StyledText ml="5px" mt="5px">
                認證資料上傳
              </StyledText>
            </FlexBox>
            <FlexBox
              color="#00BFEC"
              fontSize="12px"
              ml="20px"
              alignItems="center"
              mt="5px"
            >
              <ShieldIcon />
              <StyledText>上傳後可獲得盾牌認證</StyledText>
            </FlexBox>
          </FlexBox>
          <FlexBox width="100%" justifyContent="space-between">
            <Box width="48%" height="150px" flexDirection="column">
              <UploadIcon />
              <StyledText>證件正面</StyledText>
              <StyledText>(護照僅需上傳資料頁面)</StyledText>
            </Box>
            <Box width="48%" height="150px" flexDirection="column">
              <UploadIcon />
              <StyledText>證件反面</StyledText>
            </Box>
          </FlexBox>
        </FlexBox>
      </ToggleMenu>
      <FlexBox
        borderTop={blueBorder}
        width="100%"
        justifyContent="center"
        alignItems="center"
        p="5px 0"
        onClick={() => setIsToggle(!isToggle)}
      >
        <DownArrowIcon
          style={{
            transform: isToggle && "rotate(180deg)",
            cursor: "pointer",
          }}
        />
      </FlexBox>
    </FlexBox>
  );
};

const RedDot = () => {
  return <span style={{ color: "red" }}>*</span>;
};

const ToggleMenu = styled(FlexBox)`
  height: ${(props) => (props.toggle ? "0px" : "fit-content")};
  opacity: ${(props) => (props.toggle ? 0 : 1)};

  padding: ${(props) => (props.toggle ? 0 : "20px 5%")};

  flex-direction: column;
`;

const Input = styled.input`
  border: 1px solid #b5b5b6;
  border-radius: 10px;
  padding-left: 10px;
  width: ${(props) => props.width};
  height: 30px;
`;

const Box = styled(FlexBox)`
  border: 1px solid #b5b5b6;
  border-radius: 10px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  & svg {
    transform: scale(0.5);
  }
`;

const TextArea = styled.textarea`
  border: 1px solid #b5b5b6;
  border-radius: 10px;
  padding-left: 10px;
  padding-top: 10px;
  width: ${(props) => props.width};
  height: 200px;
  resize: none;
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
