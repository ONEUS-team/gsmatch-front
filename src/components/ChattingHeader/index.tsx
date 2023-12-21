import { useNavigate } from "react-router-dom";
import { GoBackIcon, MoreShowButton } from "../../Assets/svg";
import * as S from "./style";
import { useEffect, useState } from "react";

interface Props {
  roomName: string;
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChattingHeader: React.FC<Props> = ({ roomName, setIsModal }) => {
  const handleMoreShowClick = () => setIsModal(true);
  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 720);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <S.ChattingHeader>
      {isMobile ? (
        <S.IconButton onClick={() => navigate("/chat")}>
          <GoBackIcon />
        </S.IconButton>
      ) : null}
      <S.Title>
        {roomName.length > 40 ? roomName.slice(0, 40) + "..." : roomName}
      </S.Title>
      <S.Button onClick={handleMoreShowClick}>
        <MoreShowButton />
      </S.Button>
    </S.ChattingHeader>
  );
};

export default ChattingHeader;
