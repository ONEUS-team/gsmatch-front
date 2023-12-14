import { ChangeEvent } from "react";
import * as S from "./style";
import SendIcon from "../../Assets/svg/SendIcon";

interface Props {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

const ChattingInput: React.FC<Props> = ({ inputValue, setInputValue }) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value);

  const handleSendClick = () => {
    // 요청 보내기
  };

  return (
    <S.ChattingInput>
      <S.InputContainer>
        <S.Input value={inputValue} onChange={handleInputChange} />
        <S.SendButton onClick={handleSendClick}>
          <SendIcon />
        </S.SendButton>
      </S.InputContainer>
    </S.ChattingInput>
  );
};

export default ChattingInput;
