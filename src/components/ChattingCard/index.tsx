import { useEffect, useState } from "react";
import * as S from "./style";
import { FixIcon } from "../../Assets/svg";
import { useNavigate } from "react-router-dom";
import { ChattingCard } from "../../types/chattingCard";
import { GradeConvert, TypeConvert } from "../../types/convert";

import PORORO from "../../Assets/png/pororo.png";
import POBI from "../../Assets/png/pobi.png";
import LUPI from "../../Assets/png/LUPI.png";
import EDI from "../../Assets/png/edi.png";

const gradeConvert: GradeConvert = {
  ONE: "1",
  TWO: "2",
  THREE: "3",
};

const typeConvert: TypeConvert = {
  PORORO: "뽀로로",
  LUPI: "루피",
  POBI: "포비",
  EDI: "에디",
};

interface Props {
  card: ChattingCard;
}

const ChattingCard: React.FC<Props> = ({ card }) => {
  const navigate = useNavigate();
  const [isFixed, setIsFixed] = useState(false);
  const { partner } = card;
  const name = partner.name;
  const grade = gradeConvert[partner.grade as keyof GradeConvert];
  const type = typeConvert[partner.type as keyof TypeConvert];

  const profileSrc =
    partner.type == "PORORO"
      ? PORORO
      : partner.type == "POBI"
      ? POBI
      : partner.type == "LUPI"
      ? LUPI
      : partner.type == "EDI"
      ? EDI
      : "";

  const handleCardClick = () => navigate(`/chat/${card.id}`);

  const handleFixIconClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const newFixList = JSON.stringify(
      JSON.parse(localStorage.getItem("fixList")!).filter(
        (fixId: number) => fixId !== card.id
      )
    );
    localStorage.setItem("fixList", newFixList);
    location.reload();
  };

  useEffect(() => {
    if (localStorage.getItem("fixList")) {
      const fixList = JSON.parse(localStorage.getItem("fixList")!);
      if (fixList!.includes(card.id)) {
        setIsFixed(true);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.Card onClick={handleCardClick}>
      <S.InnerCard>
        <S.PartnerImg
          src={profileSrc !== "" ? profileSrc : ""}
          alt="프로필 이미지"
        />
        <S.ChatInfoBox>
          <S.TopBox>
            <S.RoomName>{card.roomName}</S.RoomName>
            {isFixed && (
              <S.FixBox onClick={handleFixIconClick}>
                <FixIcon />
              </S.FixBox>
            )}
          </S.TopBox>
          <S.PartnerInfo>
            {grade}학년 {type} 유형 {name}
          </S.PartnerInfo>
        </S.ChatInfoBox>
      </S.InnerCard>
    </S.Card>
  );
};

export default ChattingCard;
