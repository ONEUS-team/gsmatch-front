import { useEffect, useState } from "react";
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

const mokdata = [
  {
    id: 1,
    title: "Sample Title 1",
    content: "This is the content of sample post 1.",
    requestType: "type",
    isOnlyOne: false,
    author: {
      id: 101,
      name: "John Doe",
      major: "front-end",
      type: "루피",
      level: 1,
      grade: 3,
    },
  },
  {
    id: 2,
    title: "Sample Title 2",
    content: "This is the content of sample post 2.",
    requestType: "type",
    isOnlyOne: true,
    author: {
      id: 102,
      name: "Jane Smith",
      major: "back-end",
      type: "루피",
      level: 2,
      grade: 2,
    },
  },
  {
    id: 3,
    title: "Sample Title 3",
    content: "This is the content of sample post 3.",
    requestType: "type",
    isOnlyOne: false,
    author: {
      id: 103,
      name: "Alice Johnson",
      major: "dev-ops",
      type: "뽀로로",
      level: 3,
      grade: 1,
    },
  },
  {
    id: 4,
    title: "Sample Title 4",
    content: "This is the content of sample post 4.",
    requestType: "type",
    isOnlyOne: true,
    author: {
      id: 104,
      name: "Bob Wilson",
      major: "front-end",
      type: "루피",
      level: 4,
      grade: 2,
    },
  },
  {
    id: 5,
    title: "Sample Title 5",
    content: "This is the content of sample post 5.",
    requestType: "type",
    isOnlyOne: false,
    author: {
      id: 105,
      name: "Eva Davis",
      major: "back-end",
      type: "뽀로로",
      level: 5,
      grade: 1,
    },
  },
  {
    id: 6,
    title: "Sample Title 6",
    content: "This is the content of sample post 6.",
    requestType: "major",
    isOnlyOne: true,
    author: {
      id: 106,
      name: "Michael Lee",
      major: "dev-ops",
      type: "루피",
      level: 1,
      grade: 3,
    },
  },
];

export default function NoticePage() {
  const [range, setRange] = useState<string>("전체");
  const [kind, setKind] = useState<string>("전체");
  const [datas, setDatas] = useState(mokdata);
  const [isFilterClick, setIsFilterClick] = useState<boolean>(false);

  console.log(range, kind);

  const dataFilter = () => {
    const newData = mokdata.filter((d) => {
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
  };

  useEffect(() => {
    dataFilter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [range, kind]);

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
        {datas.map((data) => {
          return (
            <NoticeItem
              requestType={data.requestType}
              isOnlyOne={data.isOnlyOne}
              title={data.title}
              content={data.content}
              author={data.author}
            />
          );
        })}
      </S.ListContainer>
    </S.Container>
  );
}
