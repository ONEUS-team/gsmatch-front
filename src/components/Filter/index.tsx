import { useState } from "react";
import * as S from "./style";
import * as T from "../../types/filter";
import { FilterIcon } from "../../Assets/svg";

interface Props {
  setRange: React.Dispatch<React.SetStateAction<"전체" | "관심 목록">>;
  setKind: React.Dispatch<React.SetStateAction<"전체" | "유형" | "전공">>;
}

const Filter: React.FC<Props> = ({ setRange, setKind }) => {
  const [ranges, setRanges] = useState([
    { range: "전체", isSelect: true },
    { range: "관심 목록", isSelect: false },
  ]);
  const [types, setTypes] = useState([
    { type: "전체", isSelect: true },
    { type: "유형", isSelect: false },
    { type: "전공", isSelect: false },
  ]);

  const handleRangeClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const ID: T.Range = e.currentTarget.id as T.Range;
    setRange(ID);
    const newRanges = ranges.map((r) =>
      r.range === ID ? { ...r, isSelect: true } : { ...r, isSelect: false }
    );
    setRanges(newRanges);
  };
  const handleKindClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const ID: T.Type = e.currentTarget.id as unknown as T.Type;
    setKind(ID);
    const newTypes = types.map((k) =>
      k.type === ID ? { ...k, isSelect: true } : { ...k, isSelect: false }
    );
    setTypes(newTypes);
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
              key={r.range}
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
          {types.map((k) => (
            <S.SelectBTN
              key={k.type}
              id={k.type}
              isSelect={k.isSelect}
              onClick={handleKindClick}
            >
              {k.type}
            </S.SelectBTN>
          ))}
        </S.SelectBox>
      </S.SelectContainer>
    </S.Container>
  );
};

export default Filter;
