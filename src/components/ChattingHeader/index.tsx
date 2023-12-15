import { MoreShowButton } from "../../Assets/svg";
import * as S from "./style";

interface Props {
  roomName: string;
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChattingHeader: React.FC<Props> = ({ roomName, setIsModal }) => {
  const handleMoreShowClick = () => setIsModal(true);

  return (
    <S.ChattingHeader>
      {roomName}
      <S.Button onClick={handleMoreShowClick}>
        <MoreShowButton />
      </S.Button>
    </S.ChattingHeader>
  );
};

export default ChattingHeader;
