import React from "react";
import * as S from "./style";
import * as I from "../../Assets/svg/index";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const params = window.location.pathname;

  console.log(params);

  const handleLogoClick = () => navigate("/profile");

  const handleNoticeIconClick = () => navigate("/notice");

  const handleChatIconClick = () => navigate("/chat");

  return (
    <S.header>
      <S.Inner>
        <S.LogoBox onClick={handleLogoClick}>
          <I.HeaderLogo />
        </S.LogoBox>
        <S.RightBox>
          <S.IconBox onClick={handleNoticeIconClick}>
            <I.NoticeIcon />
          </S.IconBox>
          <S.IconBox onClick={handleChatIconClick}>
            <I.ChatIcon />
          </S.IconBox>
        </S.RightBox>
      </S.Inner>
    </S.header>
  );
};

export default Header;
