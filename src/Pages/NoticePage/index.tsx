import { useCallback, useEffect, useState } from "react";
import * as S from "./style";
import * as I from "../../Assets/svg/index";
import { Filter } from "../../components";
import NoticeItem from "../../components/NoticeItem";
import axiosInstance from "../../libs/api/axiosInstance";
import { useNavigate } from "react-router-dom";
import { refresh } from "../../components/api/refresh";

interface NoticeData {
  responseId: number;
  title: string;
  content: string;
  requestType: "STUDY" | "TYPE";
  requestOnly: boolean;
  authorName: string;
  image: string;
  likes: boolean;
}

export default function NoticePage() {
  const [range, setRange] = useState<"전체" | "관심 목록">("전체");
  const [kind, setKind] = useState<"전체" | "유형" | "전공">("전체");
  const [datas, setDatas] = useState<NoticeData[]>([]);
  const [isFilterClick, setIsFilterClick] = useState<boolean>(false);

  const naviagte = useNavigate();

  const getNoticeData = async () => {
    try {
      const response = await axiosInstance.get("/response", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        withCredentials: true,
      });
      setDatas(response.data);
    } catch (error: any) {
      if (error.response.status == 403) {
        refresh(naviagte, getNoticeData);
      }
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const dataFilter = useCallback(() => {
    const newData = datas.filter((item) => {
      if (range === "전체") {
        if (kind === "전체") {
          return true;
        } else if (kind === "유형" && item.requestType === "STUDY") {
          return true;
        } else if (kind === "전공" && item.requestType === "TYPE") {
          return true;
        }
      } else if (range === "관심 목록" && item.likes) {
        if (kind === "전체") {
          return true;
        } else if (kind === "유형" && item.requestType === "STUDY") {
          return true;
        } else if (kind === "전공" && item.requestType === "TYPE") {
          return true;
        }
      }
      return false;
    });

    setDatas(newData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [kind, range]);

  useEffect(() => {
    async () => {
      await getNoticeData();
      dataFilter();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataFilter]);

  useEffect(() => {
    getNoticeData();
  }, []);

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
        {datas.reverse().map((notice) => {
          return (
            <NoticeItem
              key={notice.responseId}
              id={notice.responseId}
              requestType={notice.requestType}
              requestOnly={notice.requestOnly}
              title={notice.title}
              content={notice.content}
              authorName={notice.authorName}
              image={notice.image}
            />
          );
        })}
      </S.ListContainer>
    </S.Container>
  );
}
