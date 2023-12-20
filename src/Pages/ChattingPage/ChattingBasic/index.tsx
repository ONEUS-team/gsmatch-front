import { useEffect, useState } from "react";
import { ChattingCardList } from "../../../components";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { refresh } from "../../../components/api/refresh";
import axiosInstance from "../../../libs/api/axiosInstance";

import Message from "../../../Assets/png/NotSelectMessage.png";

const ChattingBasic = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const getRoomList = async () => {
    try {
      const response = await axiosInstance.get("/room", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        withCredentials: true,
      });

      setData(response.data);
    } catch (error) {
      refresh(navigate, null);
    }
  };

  const checkFixList = () => {
    if (localStorage.getItem("fixList") === null) {
      localStorage.setItem("fixList", JSON.stringify([]));
    }
  };

  useEffect(() => {
    getRoomList();
    checkFixList();
  }, []);

  return (
    <S.Container>
      <ChattingCardList cardList={data} />
      <S.NotSelectMessageContainer>
        <S.TextBox>
          <img src={Message} alt="" />
          <S.KeyWord>채팅</S.KeyWord>
          <S.Text>다양한 질문과 이야기를 나눠보세요</S.Text>
        </S.TextBox>
      </S.NotSelectMessageContainer>
    </S.Container>
  );
};

export default ChattingBasic;
