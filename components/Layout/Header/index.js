import React from "react";
import {
  HeaderContainer,
  LogoContainer,
  OptionContainer,
  Text,
  BeExpertContainer
} from "../styles";

//icons
import CartIcon from "public/icons/cartIcon.svg";
import MessageIcon from "public/icons/messageIcon.svg";
import DownArrowIcon from "public/icons/downArrowIcon.svg";
import PersonIcon from "public/icons/personIcon.svg"

export default function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <img src="icons/logo.png" />
      </LogoContainer>
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
    </HeaderContainer>
  );
}
