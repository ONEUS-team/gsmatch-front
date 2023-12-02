import * as S from "./style";
import * as I from "../../Assets/svg/index";
import { Outlet, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => navigate("/profile");

  const handleNoticeIconClick = () => navigate("/notice");

  const handleChatIconClick = () => navigate("/chat");

  return (
    <>
      <S.header>
        <S.Inner>
          <S.LogoBox onClick={handleLogoClick}>
            <I.HeaderLogo />
          </S.LogoBox>
          <S.RightBox>
            <S.NoticeIconBox onClick={handleNoticeIconClick}>
              <I.NoticeIcon />
            </S.NoticeIconBox>
            <S.ChatIconBox onClick={handleChatIconClick}>
              <I.ChatIcon />
            </S.ChatIconBox>
          </S.RightBox>
        </S.Inner>
      </S.header>
      <Outlet />
    </>
  );
};

export default Header;
