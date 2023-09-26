import { useState } from "react";
import * as S from "./style";
import * as T from "../../types/filter";
import { FilterIcon } from "../../Assets/svg";

interface Props {
  setRange: React.Dispatch<React.SetStateAction<string>>;
  setKind: React.Dispatch<React.SetStateAction<string>>;
}

const Filter: React.FC<Props> = ({ setRange, setKind }) => {
  const [ranges, setRanges] = useState([
    { range: "전체", isSelect: true },
    { range: "관심 목록", isSelect: false },
  ]);
  const [kinds, setKinds] = useState([
    { kind: "전체", isSelect: true },
    { kind: "유형", isSelect: false },
    { kind: "전공", isSelect: false },
  ]);

  const handleRangeClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const ID: T.Range = e.currentTarget.id as unknown as T.Range;
    setRange(ID);
    const newRanges = ranges.map((r) =>
      r.range === ID ? { ...r, isSelect: true } : { ...r, isSelect: false }
    );
    setRanges(newRanges);
  };
  const handleKindClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const ID: T.Kind = e.currentTarget.id as unknown as T.Kind;
    setKind(ID);
    const newKinds = kinds.map((k) =>
      k.kind === ID ? { ...k, isSelect: true } : { ...k, isSelect: false }
    );
    setKinds(newKinds);
  };

  return (
    <S.Container>
      <S.TextBox>
        <FilterIcon />
        필터
      </S.TextBox>
      <S.SelectContainer>
        범위
        <S.SelectBox>
          {ranges.map((r) => (
            <S.SelectBTN
              id={r.range}
              isSelect={r.isSelect}
              onClick={handleRangeClick}
            >
              {r.range}
            </S.SelectBTN>
          ))}
        </S.SelectBox>
      </S.SelectContainer>
      <S.SelectContainer>
        종류
        <S.SelectBox>
          {kinds.map((k) => (
            <S.SelectBTN
              id={k.kind}
              isSelect={k.isSelect}
              onClick={handleKindClick}
            >
              {k.kind}
            </S.SelectBTN>
          ))}
        </S.SelectBox>
      </S.SelectContainer>
    </S.Container>
  );
};

export default Filter;
