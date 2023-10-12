import { useCallback, useEffect, useState } from "react";
import * as S from "./style";
import * as I from "../../Assets/svg/index";
import { Filter } from "../../components";
import NoticeItem from "../../components/NoticeItem";

interface FilterObject {
  [key: string]: string;
}

const filterType: FilterObject = {
  전체: "all",
  유형: "type",
  전공: "major",
};

interface INoticeData {
  id: number;
  title: string;
  content: string;
  requestType: string;
  isOnlyOne: boolean;
  author: {
    id: number;
    name: string;
    major: string;
    type: string;
    level: number;
    grade: number;
  };
}

export default function NoticePage() {
  const [range, setRange] = useState<string>("전체");
  const [kind, setKind] = useState<string>("전체");
  const [datas, setDatas] = useState<INoticeData[]>([]);
  const [isFilterClick, setIsFilterClick] = useState<boolean>(false);

  const dataFilter = useCallback(() => {
    const newData = datas.filter((d) => {
      if (range === "전체" && kind === "전체") {
        return d;
      } else if (range === "전체" && kind !== "전체") {
        return d.requestType === filterType[kind];
      } else if (range !== "전체" && kind === "전체") {
        return d;
      } else {
        return d.requestType === filterType[kind];
      }
    });
    setDatas(newData);
  }, [range, kind]);

  useEffect(() => {
    dataFilter();
  }, [dataFilter]);

  return (
    <S.Container>
      <S.FilterContainer>
        {isFilterClick ? (
          <S.CloseButton
            onClick={() => {
              setIsFilterClick(false);
            }}
          >
            <I.XIcon />
          </S.CloseButton>
        ) : (
          <S.FilterButton
            onClick={() => {
              setIsFilterClick(true);
            }}
          >
            <I.FilterIcon />
            필터
          </S.FilterButton>
        )}
        {isFilterClick && <Filter setRange={setRange} setKind={setKind} />}
      </S.FilterContainer>
      <S.ListContainer>
        {datas.map((data) => (
          <S.ListItem key={data.id}>
            <NoticeItem
              id={data.id}
              requestType={data.requestType}
              isOnlyOne={data.isOnlyOne}
              title={data.title}
              content={data.content}
              author={data.author}
            />
          </S.ListItem>
        ))}
      </S.ListContainer>
    </S.Container>
  );
}
