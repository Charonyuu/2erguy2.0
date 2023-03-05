import React from "react";
import { useState } from "react";
import {
  NavBarContatiner,
  NavBarMask,
  RowContatiner,
  ColContatiner,
  AvatarContainer,
  Name,
  LittleText,
  BigText,
  BeExpertBtn,
  RowdivideLine,
} from "../styles";

//icons
import CartIcon from "public/icons/cartIcon.svg";
import MessageIcon from "public/icons/messageIcon.svg";
import PersonIcon from "public/icons/personIcon.svg";
import { BsList } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

//utils
import fakeDataUtils from "@/utils/fakeData";
import windowSizeUtils from "@/utils/windowSize";

export default function NavBar({ isShowNavBar, setIsShowNavBar }) {
  /**
   * data
   */
  /* 瀏覽器長寬 */
  const windowSize = windowSizeUtils();
  const userInfo = fakeDataUtils.getOneUserInfo();
  const [isSignIn, setIsSignIn] = useState(false);
  const [isShowLangOptions, setIsShowLangOptions] = useState(false);

  return (
    <NavBarContatiner className={isShowNavBar ? "showNavBar" : ""}>
      {/* 漢堡條 */}
      <RowContatiner cursor="pointer" onClick={() => setIsShowNavBar(false)}>
        <BsList className={"hamburgerIcon"} />
      </RowContatiner>
      {isSignIn && (
        <>
          <RowContatiner flexDirection="column" alignItems="baseline">
            {/* 大頭貼與名字（已登入）*/}
            <ColContatiner alignItems="center">
              <AvatarContainer>
                <img src={userInfo.photo} alt="大頭貼"></img>
              </AvatarContainer>
              <Name>{userInfo.nickName}</Name>
            </ColContatiner>
            {/* 客人清單（客人 點擊頭貼才出現） */}
            <ColContatiner
              flexDirection="column"
              border={"1px solid #DBDBDB"}
              bg="#F9F9F9"
              padding={"10px 0 10px 10px"}
              borderRadius="7px"
              width={"150px"}
            >
              <LittleText>我的帳戶</LittleText>
              <LittleText>我的訂單</LittleText>
              <LittleText>發布評價</LittleText>
              <LittleText>登出</LittleText>
            </ColContatiner>
          </RowContatiner>
          {/* 達人清單（達人） */}
          <RowContatiner
            alignItems="center"
            justifyContent="space-between"
            cursor="pointer"
            minWidth="100px"
          >
            <BigText>編輯服務</BigText>
            <IoIosArrowDown className={"arrowDownIcon"} />
          </RowContatiner>
          {/* 達人清單-下拉式選單 */}
          <RowContatiner alignItems="center" justifyContent="space-between">
            <ColContatiner flexDirection="column">
              <LittleText>時間分享</LittleText>
              <LittleText
                alignItems="center"
                justifyContent="space-between"
                minWidth="85px"
              >
                編輯服務
                <IoIosArrowDown className={"arrowDownIcon"} />
              </LittleText>
              <LittleText
                alignItems="center"
                justifyContent="space-between"
                minWidth="85px"
              >
                個人檔案
                <IoIosArrowDown className={"arrowDownIcon"} />
              </LittleText>
              <LittleText>收款資訊</LittleText>
            </ColContatiner>
          </RowContatiner>
          {/* 分隔線 （達人） */}
          <RowdivideLine></RowdivideLine>
        </>
      )}
      {/* 成為在地達人（訪客或客人) */}
      {(!isSignIn || (isSignIn && userInfo.role !== "達人")) && (
        <RowContatiner>
          <BeExpertBtn>
            <p>成為在地達人</p>
            <PersonIcon />
          </BeExpertBtn>
        </RowContatiner>
      )}
      {/* 登入/註冊（未登入）*/}
      {!isSignIn && (
        <RowContatiner cursor="pointer">
          <BigText>登入/註冊</BigText>
        </RowContatiner>
      )}
      {/* 語言 */}
      <RowContatiner
        alignItems="center"
        justifyContent="space-between"
        cursor="pointer"
        minWidth="60px"
        onClick={() => setIsShowLangOptions(!isShowLangOptions)}
      >
        <BigText>語言</BigText>
        <IoIosArrowDown className={"arrowDownIcon"} />
      </RowContatiner>
      {/* 語言-下拉式選單 */}
      {isShowLangOptions && (
        <RowContatiner alignItems="center" justifyContent="space-between">
          <ColContatiner flexDirection="column" width={"150px"}>
            <LittleText>English</LittleText>
            <LittleText>日本語</LittleText>
            <LittleText>中文（繁體）</LittleText>
            <LittleText>中文（簡體）</LittleText>
            <LittleText>韓文</LittleText>
          </ColContatiner>
        </RowContatiner>
      )}
      {/* 訊息 */}
      <RowContatiner
        alignItems="center"
        justifyContent="space-between"
        cursor="pointer"
        minWidth="60px"
      >
        <MessageIcon className={"messageIcon"} />
        <div style={{ color: "green", fontWeight: 400 }}>0</div>
      </RowContatiner>
      {/* 購物車 */}
      <RowContatiner
        alignItems="center"
        justifyContent="space-between"
        cursor="pointer"
        minWidth="60px"
      >
        <CartIcon className={"cartIcon"} />
        <div style={{ color: "red", fontWeight: 400 }}>0</div>
      </RowContatiner>
      {/* 遮罩 */}
      <NavBarMask
        className={isShowNavBar ? "showNavBarMask" : ""}
        onClick={() => setIsShowNavBar(false)}
      />
    </NavBarContatiner>
  );
}
