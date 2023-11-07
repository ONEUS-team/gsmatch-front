import React, { useState } from "react";
import * as S from "./style";
import { PasswordBlindIcon, PasswordShowIcon } from "../../Assets/svg/index";

interface Props {
  children: string;
  value: string;
  isMatch?: boolean;
  id: string;
  changeFunction: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const BlindInput: React.FC<Props> = ({
  children,
  value,
  isMatch,
  id,
  changeFunction,
}) => {
  const [isBlind, setIsBlind] = useState(true);

  return (
    <S.Container>
      <S.InputText isMatch={isMatch}>{children}</S.InputText>
      <S.InputArea
        onChange={changeFunction}
        id={id}
        type={isBlind ? "password" : "text"}
        value={value}
      />
      <S.PasswordToggleButton onClick={() => setIsBlind(!isBlind)}>
        {isBlind ? <PasswordBlindIcon /> : <PasswordShowIcon />}
      </S.PasswordToggleButton>
    </S.Container>
  );
};

BlindInput.defaultProps = {
  isMatch: true,
  id: "",
};

export default BlindInput;
