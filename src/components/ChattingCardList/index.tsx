import { useNavigate } from "react-router-dom";
import { GoBackIcon } from "../../Assets/svg";
import * as S from "./style";
import { ChattingCard } from "..";
import { ChattingCard as CardType } from "../../types/chattingCard";

interface Props {
  cardList: CardType[];
  isChat: boolean;
}

const ChattingCardList: React.FC<Props> = ({ cardList, isChat }) => {
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
    <S.Container isChat={isChat}>
      <S.AbsoluteBox>
        <S.IconButton onClick={handleIconButtonClick}>
          <GoBackIcon />
        </S.IconButton>
        <S.Text>채팅</S.Text>
      </S.AbsoluteBox>
      {fixCardList.concat(notFixCardList).map((card) => (
        <ChattingCard key={card.id} card={card} />
      ))}
    </S.Container>
  );
};

export default ChattingCardList;
