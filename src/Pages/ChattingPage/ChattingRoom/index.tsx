import { FormEvent, useEffect, useRef, useState } from "react";
import {
  ChattingCardList,
  ChattingInput,
  ChattingModal,
} from "../../../components";
import ChattingHeader from "../../../components/ChattingHeader";
import * as S from "./style";
import MessageCard from "../../../components/MessageCard";
import axiosInstance from "../../../libs/api/axiosInstance";
import { refresh } from "../../../components/api/refresh";
import { useNavigate, useParams } from "react-router-dom";
import { ChattingCard } from "../../../types/chattingCard";
import * as Stomp from "@stomp/stompjs";
import SockJS from "sockjs-client";

import PORORO from "../../../Assets/png/pororo.png";
import POBI from "../../../Assets/png/pobi.png";
import LUPI from "../../../Assets/png/LUPI.png";
import EDI from "../../../Assets/png/edi.png";

export interface IChatData {
  id: number;
  message: string;
  sendDate: string;
  sender: {
    senderId: number;
    senderName: string;
  };
}

interface IRoomData {
  id: number;
  roomName: string;
  partner: {
    id: number;
    name: string;
    major: string;
    type: string;
  };
}

export interface IMyData {
  id: number;
  username: string;
  grade: "ONE" | "TWO" | "THREE";
  level: number;
  gender: string;
  type: string;
  point: number;
  major: string;
  requestList: [
    {
      requestId: number;
      title: string;
      content: string;
      requestType: string;
      authorName: string;
    }
  ];
}

const ChattingRoom = () => {
  const [isModal, setIsModal] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [data, setData] = useState<ChattingCard[]>([]);
  const [roomData, setRoomData] = useState<IRoomData>();
  const [chatData, setChatData] = useState<IChatData[]>([]);
  const [myData, setMyData] = useState<IMyData>();

  const MessageBoxRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  const [fristScroll, setFirstScroll] = useState(true);

  const { roomId } = useParams();
  const client = useRef<Stomp.Client | any>();

  const profileSrc =
    roomData?.partner?.type == "PORORO"
      ? PORORO
      : roomData?.partner?.type == "POBI"
      ? POBI
      : roomData?.partner?.type == "LUPI"
      ? LUPI
      : roomData?.partner?.type == "EDI"
      ? EDI
      : "";

  const scrollInit = () => {
    if (!MessageBoxRef.current) return;

    MessageBoxRef.current.scrollTop = MessageBoxRef.current.scrollHeight;
  };

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

  const getRoomInfo = async () => {
    try {
      const response = await axiosInstance.get("/room/" + roomId, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        withCredentials: true,
      });

      setRoomData(response.data);
    } catch (error) {
      refresh(navigate, null);
    }
  };

  const getChatList = async () => {
    try {
      const response = await axiosInstance.get("/chat/" + roomId, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        withCredentials: true,
      });

      setChatData(response.data);
    } catch (error) {
      refresh(navigate, null);
    }
  };

  const getMyData = async () => {
    try {
      const response = await axiosInstance.get("/user", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        withCredentials: true,
      });

      setMyData(response.data);
    } catch (error) {
      refresh(navigate, null);
    }
  };

  function connect() {
    const socket = new SockJS(
      "https://port-0-gsmatch-back-f02w2almh8gdgs.sel5.cloudtype.app/ws-stomp"
    );
    client.current = Stomp.Stomp.over(socket);

    client.current?.connect({}, function (frame: string) {
      console.log("Connected: " + frame);

      client.current?.subscribe("/room/" + roomId, function (chatMessage: any) {
        const message = JSON.parse(chatMessage.body);
        setChatData((prev) => [
          ...prev,
          {
            id: message.chatId,
            message: message.message,
            sendDate: message.sendDate,
            sender: {
              senderId: message.sender.senderId,
              senderName: message.sender.senderName,
            },
          },
        ]);
      });
    });
  }

  const disconnect = () => {
    client.current?.deactivate();
  };

  useEffect(() => {
    scrollInit();
    if (fristScroll) {
      scrollInit();
      setFirstScroll(false);
    } else {
      if (!MessageBoxRef.current) return;

      const isScrolledToBottom =
        MessageBoxRef.current.scrollHeight -
          MessageBoxRef.current.clientHeight <=
        MessageBoxRef.current.scrollTop + 500; // 작은 오차를 허용

      if (!isScrolledToBottom) {
        return;
      }
      scrollInit();
    }
  }, [chatData]);

  useEffect(() => {
    getRoomList();
    getRoomInfo();
    getChatList();
    getMyData();
  }, [roomId]);

  useEffect(() => {
    connect();

    return () => {
      disconnect();
    };
  }, [roomId]);

  function handleSendSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (inputValue.length > 500) return alert("메시지가 너무 길어요!");
    if (inputValue == "" || inputValue == null || /^\s*$/.test(inputValue))
      return alert("메시지를 입력해주세요!");

    client.current?.send(
      "/send/" + roomId,
      {},
      JSON.stringify({
        message: inputValue,
        token: `Bearer ${localStorage.getItem("accessToken")}`,
      })
    );
    setInputValue("");
  }

  return (
    <>
      <S.Container>
        <ChattingCardList cardList={data} />
        <S.ChattingRoom>
          <ChattingHeader
            roomName={roomData != undefined ? roomData.roomName : ""}
            setIsModal={setIsModal}
          />
          <S.MessageDisplayBox ref={MessageBoxRef}>
            <S.PartnerInfo>
              <S.PartnerTypeImg src={profileSrc} />
              <S.PartnerName>{roomData?.partner?.name}</S.PartnerName>
              <S.PartnerType>{roomData?.partner?.type} 유형</S.PartnerType>
            </S.PartnerInfo>
            {chatData.map((chat) => (
              <MessageCard
                chat={chat}
                isMine={Number(chat?.sender?.senderId) === myData?.id}
                partnerType={
                  roomData != undefined ? roomData?.partner?.type : ""
                }
                sendDate={chat?.sendDate}
              />
            ))}
          </S.MessageDisplayBox>
          <ChattingInput
            inputValue={inputValue}
            setInputValue={setInputValue}
            handleSendSubmit={handleSendSubmit}
          />
        </S.ChattingRoom>
      </S.Container>
      {isModal && (
        <ChattingModal
          id={Number(roomId)}
          setIsModal={setIsModal}
          roomName={data[0].roomName}
          roomId={roomId != undefined ? +roomId : 0}
        />
      )}
    </>
  );
};

export default ChattingRoom;
