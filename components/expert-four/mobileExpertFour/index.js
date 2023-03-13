import React, { useRef, useState } from "react";
import { FlexBox, StyledText } from "@/styles/globalStyles";
import styled from "styled-components";
import UploadIcon from "public/icons/uploadIcon.svg";
import BlueLightIcon from "public/icons/bluelightIcon.svg";
import Locker from "public/icons/locker.svg";
import ShieldIcon from "public/icons/shield.svg";

const grayBorder = "1px solid #B5B5B6";
const grayTextColor = "#A39FA0";
const blueBorder = "1px solid #A7E0F9";
const blueTextColor = "#0095C1";

export default function MobileExpertFour() {
  const [page, setPage] = useState(0);

  return (
    <>
      {page === 0 ? (
        <AccountContainer setPage={setPage} />
      ) : page === 1 ? (
        <ProfileContainer setPage={setPage} />
      ) : page === 2 ? (
        <PrivacyContainer setPage={setPage} />
      ) : page === 3 ? (
        <PasswordContainer setPage={setPage} />
      ) : (
        <IdentityContainer setPage={setPage} />
      )}
    </>
  );
}

const AccountContainer = ({ setPage }) => {
  const InputRef = useRef(null);
  return (
    <FlexBox
      height="fit-content"
      width="100%"
      flexDirection="column"
      borderRadius="10px"
      m="10px 0 20px"
      p="20px"
      pt="60px"
      fontSize="14px"
    >
      <FlexBox
        height="40px"
        bg="#81CDEB"
        color="#0095C1"
        fontSize="24px"
        borderRadius="10px"
        justifyContent="center"
        alignItems="center"
      >
        基本資料
      </FlexBox>
      <FlexBox flexDirection="column" width="100%">
        <FlexBox
          border={grayBorder}
          height="240px"
          borderRadius="10px"
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
          fontSize="14px"
          width="70%"
          onClick={() => InputRef.current.click()}
          style={{ cursor: "pointer" }}
          m="20px 0"
          ml="70px"
        >
          <UploadIcon />
          <StyledText mt="5px" color="#918D8E">
            上傳個人照片
          </StyledText>
          <input type="file" ref={InputRef} hidden />
        </FlexBox>
        <FlexBox flexDirection="column" width="100%">
          <FlexBox alignItems="center" mb="10px">
            <StyledText mr="20px" width="60px" color="#007DB0" fontSize="16px">
              帳號
              <RedDot />
            </StyledText>
            <Input width={"100%"} />
          </FlexBox>
          <FlexBox
            alignItems="center"
            mb="10px"
            color="#007DB0"
            fontSize="16px"
          >
            <StyledText mr="20px" width="60px">
              姓氏
              <RedDot />
            </StyledText>
            <Input width={"100%"} />
          </FlexBox>
          <FlexBox
            alignItems="center"
            mb="10px"
            color="#007DB0"
            fontSize="16px"
          >
            <StyledText mr="20px" width="60px">
              名字
              <RedDot />
            </StyledText>
            <Input width={"100%"} />
          </FlexBox>
          <FlexBox
            alignItems="center"
            mb="10px"
            color="#007DB0"
            fontSize="16px"
          >
            <StyledText mr="20px" width="60px">
              生日
              <RedDot />
            </StyledText>
            <Input width={"100%"} />
          </FlexBox>
          <FlexBox
            alignItems="center"
            mb="10px"
            color="#007DB0"
            fontSize="16px"
          >
            <StyledText mr="20px" width="60px">
              居住地
            </StyledText>
            <FlexBox justifyContent="space-between" width="100%">
              <Input width={"48%"} />
              <Input width={"48%"} />
            </FlexBox>
          </FlexBox>
          <FlexBox
            alignItems="center"
            mb="10px"
            color="#007DB0"
            fontSize="16px"
          >
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
      <FlexBox
        alignItems="center"
        mt="20px"
        width="100%"
        color="#007DB0"
        fontSize="16px"
      >
        <StyledText mr="20px" width="120px" color="#007DB0">
          關鍵字設定
        </StyledText>
        <Input width={"100%"} />
      </FlexBox>
      <FlexBox mt="20px" justifyContent="center">
        <FlexBox
          bg="#00A4D5"
          width="60px"
          height="30px"
          borderRadius="10px"
          justifyContent="center"
          alignItems="center"
          color="white"
          mr="10px"
        >
          儲存
        </FlexBox>
        <FlexBox
          bg="#00A4D5"
          width="60px"
          height="30px"
          borderRadius="10px"
          justifyContent="center"
          alignItems="center"
          color="white"
          ml="10px"
          onClick={() => setPage(1)}
        >
          下一頁
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};
// 個人簡介
const ProfileContainer = ({ setPage }) => {
  return (
    <FlexBox
      height="fit-content"
      width="100%"
      flexDirection="column"
      borderRadius="10px"
      m="10px 0 20px"
      p="20px"
      pt="60px"
      fontSize="14px"
    >
      <FlexBox
        height="40px"
        bg="#81CDEB"
        color="#0095C1"
        fontSize="24px"
        borderRadius="10px"
        justifyContent="center"
        alignItems="center"
      >
        個人簡介
      </FlexBox>
      <FlexBox flexDirection="column" width="100%">
        <FlexBox flexDirection="column" width="100%">
          <StyledText m="5px 0" width="120px" color="#007DB0" fontSize="16px">
            關於我
          </StyledText>
          <Input width={"100%"} placeholder="用一句話形容自己吧!" />
          <FlexBox m="5px 0" alignItems="center">
            <BlueLightIcon />
            <StyledText ml="5px" color="#918D8E">
              此欄位文字將會放在個人照片內
            </StyledText>
          </FlexBox>
          <StyledText m="5px 0" width="120px" color="#007DB0" fontSize="16px">
            自我介紹
          </StyledText>
          <TextArea width={"100%"} />
          <StyledText m="5px 0" width="120px" color="#007DB0" fontSize="16px">
            主頁照片
          </StyledText>
          <Box width="100%" height="150px">
            <UploadIcon />
          </Box>
          <StyledText m="5px 0" width="120px" color="#007DB0" fontSize="16px">
            生活照
          </StyledText>
          <FlexBox width="100%">
            <Box
              width="120px"
              height="120px"
              flexDirection="column"
              color="#918D8E"
              fontSize="12px"
            >
              <UploadIcon />
              <StyledText>選擇單 / 多張照片</StyledText>
            </Box>
          </FlexBox>
          <StyledText m="5px 0" width="120px" color="#007DB0" fontSize="16px">
            簡介影片
          </StyledText>
          <FlexBox width="100%">
            <Box width="70%" height="120px">
              <UploadIcon />
            </Box>
          </FlexBox>
        </FlexBox>
      </FlexBox>
      <FlexBox mt="20px" justifyContent="center">
        <FlexBox
          bg="#00A4D5"
          width="60px"
          height="30px"
          borderRadius="10px"
          justifyContent="center"
          alignItems="center"
          color="white"
          mr="10px"
        >
          儲存
        </FlexBox>
        <FlexBox
          bg="#00A4D5"
          width="60px"
          height="30px"
          borderRadius="10px"
          justifyContent="center"
          alignItems="center"
          color="white"
          ml="10px"
          onClick={() => setPage(2)}
        >
          下一頁
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};
// 隱私
const PrivacyContainer = ({ setPage }) => {
  return (
    <FlexBox
      height="fit-content"
      width="100%"
      flexDirection="column"
      borderRadius="10px"
      m="10px 0 20px"
      p="20px"
      pt="60px"
      fontSize="14px"
    >
      <FlexBox
        height="40px"
        bg="#81CDEB"
        color="#0095C1"
        fontSize="24px"
        borderRadius="10px"
        justifyContent="center"
        alignItems="center"
      >
        隱私設定
      </FlexBox>

      <FlexBox flexDirection="column" width="100%">
        <FlexBox
          alignItems="center"
          justifyContent="flex-end"
          width="100%"
          m="5px 0"
        >
          <BlueLightIcon />
          <StyledText ml="5px" color="#007DB0" fontSize="12px">
            此欄位為保密資訊
          </StyledText>
        </FlexBox>
        <FlexBox alignItems="center" m="10px 0" width="100%">
          <Locker />
          <StyledText color="#007DB0" width="200px" ml="5px">
            手機號碼
            <RedDot />
          </StyledText>
        </FlexBox>
        <Input width={"100%"} />
        <FlexBox alignItems="center" m="10px 0" width="100%">
          <Locker />
          <StyledText color="#007DB0" width="200px" ml="5px">
            緊急連絡人電話
            <RedDot />
          </StyledText>
        </FlexBox>
        <Input width={"100%"} />

        <FlexBox alignItems="center" m="10px 0" width="100%">
          <Locker />
          <StyledText color="#007DB0" width="200px" ml="5px">
            緊急連絡人地址
            <RedDot />
          </StyledText>
        </FlexBox>
        <Input width={"100%"} />
      </FlexBox>
      <FlexBox mt="20px" justifyContent="center">
        <FlexBox
          bg="#00A4D5"
          width="60px"
          height="30px"
          borderRadius="10px"
          justifyContent="center"
          alignItems="center"
          color="white"
          mr="10px"
        >
          儲存
        </FlexBox>
        <FlexBox
          bg="#00A4D5"
          width="60px"
          height="30px"
          borderRadius="10px"
          justifyContent="center"
          alignItems="center"
          color="white"
          ml="10px"
          onClick={() => setPage(3)}
        >
          下一頁
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};
// 密碼
const PasswordContainer = ({ setPage }) => {
  return (
    <FlexBox
      height="fit-content"
      width="100%"
      flexDirection="column"
      borderRadius="10px"
      m="10px 0 20px"
      p="20px"
      pt="60px"
      fontSize="14px"
    >
      <FlexBox
        height="40px"
        bg="#81CDEB"
        color="#0095C1"
        fontSize="24px"
        borderRadius="10px"
        justifyContent="center"
        alignItems="center"
      >
        變更密碼
      </FlexBox>
      <FlexBox flexDirection="column" width="100%">
        <FlexBox
          alignItems="center"
          justifyContent="flex-end"
          width="100%"
          m="5px 0"
        >
          <BlueLightIcon />
          <StyledText ml="5px" color="#007DB0" fontSize="12px">
            此欄位為保密資訊
          </StyledText>
        </FlexBox>
        <StyledText color="#007DB0" width="200px" fontSize="16px">
          變更密碼
        </StyledText>
        <FlexBox alignItems="center" mb="10px" width="100%">
          <StyledText mr="20px" width="215px">
            請輸入新密碼
          </StyledText>
          <Input width={"100%"} />
        </FlexBox>
        <FlexBox alignItems="center" mb="10px" width="100%">
          <StyledText mr="20px" width="215px">
            再次輸入新密碼
          </StyledText>
          <Input width={"100%"} />
        </FlexBox>
      </FlexBox>
      <FlexBox mt="20px" justifyContent="center">
        <FlexBox
          bg="#00A4D5"
          width="60px"
          height="30px"
          borderRadius="10px"
          justifyContent="center"
          alignItems="center"
          color="white"
          mr="10px"
        >
          儲存
        </FlexBox>
        <FlexBox
          bg="#00A4D5"
          width="60px"
          height="30px"
          borderRadius="10px"
          justifyContent="center"
          alignItems="center"
          color="white"
          ml="10px"
          onClick={() => setPage(4)}
        >
          下一頁
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};
// 身份驗證
const IdentityContainer = () => {
  return (
    <FlexBox
      height="fit-content"
      width="100%"
      flexDirection="column"
      borderRadius="10px"
      m="10px 0 20px"
      p="20px"
      pt="60px"
      fontSize="14px"
    >
      <FlexBox
        height="40px"
        bg="#81CDEB"
        color="#0095C1"
        fontSize="24px"
        borderRadius="10px"
        justifyContent="center"
        alignItems="center"
      >
        身份驗證
      </FlexBox>

      <FlexBox flexDirection="column" width="100%">
        <FlexBox
          alignItems="center"
          justifyContent="flex-end"
          width="100%"
          m="5px 0"
        >
          <BlueLightIcon />
          <StyledText ml="5px" color="#007DB0" fontSize="12px">
            此欄位為保密資訊
          </StyledText>
        </FlexBox>
        <FlexBox alignItems="center" mb="10px" width="100%">
          <Locker />
          <StyledText mr="20px" width="215px" ml="5px" color="#007DB0">
            身份證字號 / 護照號碼
          </StyledText>
        </FlexBox>
        <Input width={"100%"} />

        <FlexBox flexDirection="column" width="240px" m="5px 0">
          <FlexBox alignItems="center">
            <Locker />
            <StyledText ml="5px" mt="5px" color="#007DB0">
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
            <StyledText color="#007DB0">上傳後可獲得盾牌認證</StyledText>
          </FlexBox>
        </FlexBox>
        <Box width="60%" height="150px" flexDirection="column">
          <UploadIcon />
          <StyledText>證件正面</StyledText>
          <StyledText>(護照僅需上傳資料頁面)</StyledText>
        </Box>
        <Box width="60%" height="150px" flexDirection="column" m="10px 0">
          <UploadIcon />
          <StyledText>證件反面</StyledText>
        </Box>
      </FlexBox>
      <FlexBox mt="20px" justifyContent="center">
        <FlexBox
          bg="#00A4D5"
          width="60px"
          height="30px"
          borderRadius="10px"
          justifyContent="center"
          alignItems="center"
          color="white"
          mr="10px"
        >
          儲存
        </FlexBox>
        <FlexBox
          bg="#00A4D5"
          width="60px"
          height="30px"
          borderRadius="10px"
          justifyContent="center"
          alignItems="center"
          color="white"
          ml="10px"
          onClick={() => setPage(2)}
        >
          下一頁
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};

const RedDot = () => {
  return <span style={{ color: "red" }}>*</span>;
};


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
  color: #918D8E;
`;

