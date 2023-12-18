import { ChangeEvent, FormEvent } from "react";
import * as S from "./style";
import SendIcon from "../../Assets/svg/SendIcon";

interface Props {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  handleSendSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const ChattingInput: React.FC<Props> = ({
  inputValue,
  setInputValue,
  handleSendSubmit,
}) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value);

  return (
    <S.ChattingInput>
      <S.InputContainer onSubmit={handleSendSubmit}>
        <S.Input value={inputValue} onChange={handleInputChange} />
        <S.SendButton>
          <SendIcon />
        </S.SendButton>
      </S.InputContainer>
    </S.ChattingInput>
  );
};

export default ChattingInput;
