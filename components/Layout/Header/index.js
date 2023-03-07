import React from "react";
import { useState, useEffect } from "react";
import {
  HeaderContainer,
  Hamburger,
  LogoContainer,
  OptionContainer,
  Text,
  BeExpertContainer,
} from "../styles";

//components
import NavBar from "../NavBar/index";

//icons
import CartIcon from "public/icons/cartIcon.svg";
import MessageIcon from "public/icons/messageIcon.svg";
import DownArrowIcon from "public/icons/downArrowIcon.svg";
import PersonIcon from "public/icons/personIcon.svg";
import { BsList } from "react-icons/bs";

//utils
import windowSizeUtils from "@/utils/windowSize";

export default function Header() {
  /**
   * data
   */
  /* 瀏覽器長寬 */
  const windowSize = windowSizeUtils();
  const [isShowNavBar, setIsShowNavBar] = useState(false);

  /**
   * func
   */
  useEffect(() => {
    if (windowSize.width > 720) {
      setIsShowNavBar(false);
    }
  }, [windowSize.width]);

  return (
    <HeaderContainer>
      {windowSize.width <= 720 && (
        <Hamburger onClick={() => setIsShowNavBar(true)}>
          <BsList />
        </Hamburger>
      )}
      {windowSize.width <= 720 && (
        <NavBar isShowNavBar={isShowNavBar} setIsShowNavBar={setIsShowNavBar} />
      )}
      <LogoContainer>
        <img src="icons/logo.png" />
      </LogoContainer>
      {windowSize.width > 720 && (
        <OptionContainer>
          <CartIcon />
          <Text style={{ color: "green" }}>0</Text>
          <MessageIcon />
          <Text style={{ color: "red" }}>0</Text>
          <Text>
            語言
            <DownArrowIcon />
          </Text>
          <Text>登入/註冊</Text>
          <BeExpertContainer>
            成為在地達人
            <PersonIcon />
          </BeExpertContainer>
        </OptionContainer>
      )}
    </HeaderContainer>
  );
}
