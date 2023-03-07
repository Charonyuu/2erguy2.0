import React from "react";
import {
  FooterContainer,
  FooterOptionContainer,
  CopyRightContatiner,
  Text,
  LeftFooterContainer,
  Divider,
  RightFooterContainer,
  FooterLine,
  IconContainer,
  JoinUs,
} from "../styles";

//icon
import FacebookIcon from "public/icons/facebookIcon.svg";
import IgIcon from "public/icons/igIcon.svg";
import YoutubeIcon from "public/icons/youtubeIcon.svg";
import WeiboIcon from "public/icons/weiboIcon.svg";

//utils
import useWindowSizeUtils from "@/utils/windowSize";

export default function Footer() {
  /**
   * data
   */
  /*瀏覽器長寬 */
  const windowSize = useWindowSizeUtils();

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
        <Divider></Divider>
        {windowSize.width > 425 ? (
          <RightFooterContainer>
            <FooterLine>
              <Text white Size="18px">
                公司資訊
              </Text>
              <Text white cursor="pointer">
                關於我們
              </Text>
              <Text white cursor="pointer">
                媒體報導
              </Text>
              <Text white cursor="pointer">
                聯繫方式
              </Text>
            </FooterLine>
            <FooterLine>
              <Text white Size="18px">
                網站條款
              </Text>
              <Text white cursor="pointer">
                操作協助
              </Text>
              <Text white cursor="pointer">
                服務條款
              </Text>
              <Text white cursor="pointer">
                安全條款
              </Text>
              <Text white cursor="pointer">
                隱私說明
              </Text>
              <Text white cursor="pointer">
                賠償保證
              </Text>
              <Text white cursor="pointer">
                付款說明
              </Text>
            </FooterLine>
            <FooterLine>
              <Text white Size="18px">
                時間共享
              </Text>
              <Text white cursor="pointer">
                時間共享
              </Text>
              <Text white cursor="pointer">
                在地達人
              </Text>
              <Text white cursor="pointer">
                旅行交友
              </Text>
            </FooterLine>
          </RightFooterContainer>
        ) : (
          <RightFooterContainer flexDirection="column" height="auto">
            <FooterLine>
              <Text white Size="16px">
                公司資訊
              </Text>
            </FooterLine>
            <FooterLine>
              <Text white Size="16px">
                網站條款
              </Text>
            </FooterLine>
            <FooterLine>
              <Text white Size="16px">
                時間共享
              </Text>
            </FooterLine>
          </RightFooterContainer>
        )}
      </FooterOptionContainer>
      <CopyRightContatiner>
        <Text
          white
          Size={windowSize.width <= 425 ? "15px" : "18px"}
          textAlign="center"
        >
          本平台僅提供媒合功能，各在地達人之資格與服務內容，須符合當地政府規定。
        </Text>
        <Text white margin="30px 0 0 0" textAlign="center">
          © 2020 tour guide All rights reserved.
        </Text>
      </CopyRightContatiner>
    </FooterContainer>
  );
}
