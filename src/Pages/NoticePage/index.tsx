import { useCallback, useEffect, useState } from "react";
import * as S from "./style";
import * as I from "../../Assets/svg/index";
import { Filter } from "../../components";
import NoticeItem from "../../components/NoticeItem";
import axiosInstance from "../../libs/api/axiosInstance";

interface FilterObject {
  [key: string]: string;
}

const filterType: FilterObject = {
  전체: "all",
  유형: "type",
  전공: "major",
};

interface INoticeData {
  responseId: number;
  title: string;
  content: string;
  requestType: "STUDY" | "TYPE";
  requestOnly: boolean;
  authorName: string;
  image: string;
}

export default function NoticePage() {
  const [range, setRange] = useState<string>("전체");
  const [kind, setKind] = useState<string>("전체");
  const [datas, setDatas] = useState<INoticeData[]>([]);
  const [isFilterClick, setIsFilterClick] = useState<boolean>(false);

  const getNoticeData = async () => {
    try {
      const response = await axiosInstance.get("/response", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        withCredentials: true,
      });
      setDatas(response.data);
    } catch (error) {
      //
    }
  };

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [range, kind]);

  useEffect(() => {
    dataFilter();
    getNoticeData();
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
        {datas.map((notice) => {
          console.log(notice);
          return (
            <S.ListItem key={notice.responseId}>
              <NoticeItem
                id={notice.responseId}
                requestType={notice.requestType}
                requestOnly={true}
                title={notice.title}
                content={notice.content}
                authorName={notice.authorName}
                image={notice.image}
              />
            </S.ListItem>
          );
        })}
      </S.ListContainer>
    </S.Container>
  );
}
