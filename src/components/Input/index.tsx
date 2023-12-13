import React from "react";
import * as S from "./style";

interface Props {
  children: string;
  value: string;
  type: string;
  isMatch?: boolean;
  id: string;
  changeFunction: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Props> = ({
  children,
  value,
  type,
  isMatch,
  id,
  changeFunction,
}) => (
  <S.Container>
    <S.InputText isMatch={isMatch}>{children}</S.InputText>
    <S.InputArea onChange={changeFunction} id={id} type={type} value={value} />
  </S.Container>
);

Input.defaultProps = {
  isMatch: true,
  id: "",
};

export default Input;
