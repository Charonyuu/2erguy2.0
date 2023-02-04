import React from "react";
import {
  FooterContainer,
  FooterOptionContainer,
  CopyRightContatiner,
  Text,
  LeftFooterContainer,
  RightFooterContainer,
  FooterLine,
  IconContainer,
  JoinUs,
} from "../styles";

//icon
import FacebookIcon from "public/icons/facebookIcon.svg";
import IgIcon from "public/icons/igIcon.svg";
import YoutubeIcon from "public/icons/youtubeIcon.svg";
import WeiboIcon from "public/icons/weiboIcon.svg"

export default function Footer() {
  return (
    <FooterContainer>
      <FooterOptionContainer>
        <LeftFooterContainer>
          <JoinUs>Join Us On</JoinUs>
          <IconContainer>
            <FacebookIcon />
            <IgIcon />
            <YoutubeIcon />
            <WeiboIcon />
          </IconContainer>
        </LeftFooterContainer>
        <RightFooterContainer>
          <FooterLine>
            <Text white Size="18px">
              公司資訊
            </Text>
            <Text white>關於我們</Text>
            <Text white>媒體報導</Text>
            <Text white>聯繫方式</Text>
          </FooterLine>
          <FooterLine>
            <Text white Size="18px">
              網站條款
            </Text>
            <Text white>操作協助</Text>
            <Text white>服務條款</Text>
            <Text white>安全條款</Text>
            <Text white>隱私說明</Text>
            <Text white>賠償保證</Text>
            <Text white>付款說明</Text>
          </FooterLine>
          <FooterLine>
            <Text white Size="18px">
              時間共享
            </Text>
            <Text white>時間共享</Text>
            <Text white>在地達人</Text>
            <Text white>旅行交友</Text>
          </FooterLine>
        </RightFooterContainer>
      </FooterOptionContainer>
      <CopyRightContatiner>
        <Text white Size="18px">
          本平台僅提供媒合功能，各在地達人之資格與服務內容，須符合當地政府規定。
        </Text>
        <Text white>© 2020 tour guide All rights reserved.</Text>
      </CopyRightContatiner>
    </FooterContainer>
  );
}
