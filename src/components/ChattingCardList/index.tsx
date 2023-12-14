import { useNavigate } from "react-router-dom";
import { GoBackIcon } from "../../Assets/svg";
import * as S from "./style";
import { ChattingCard } from "..";
import { ChattingCard as CardType } from "../../types/chattingCard";

interface Props {
  cardList: CardType[];
}

const ChattingCardList: React.FC<Props> = ({ cardList }) => {
  const navigate = useNavigate();

  const localfFxList = JSON.parse(localStorage.getItem("fixList")!);

  const fixCardList = cardList.filter((card) =>
    localfFxList?.includes(card.id)
  );

  const notFixCardList = cardList.filter(
    (card) => !localfFxList?.includes(card.id)
  );

  const handleIconButtonClick = () => navigate("/");
  return (
    <S.Container>
      <S.AbsoluteBox>
        <S.IconButton onClick={handleIconButtonClick}>
          <GoBackIcon />
        </S.IconButton>
        채팅
      </S.AbsoluteBox>
      {fixCardList.concat(notFixCardList).map((card) => (
        <ChattingCard key={card.id} card={card} />
      ))}
    </S.Container>
  );
};

export default ChattingCardList;
