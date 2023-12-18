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
import { Stomp } from "@stomp/stompjs";
import SockJS from "sockjs-client";

const ChattingRoom = () => {
  const [isModal, setIsModal] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [data, setData] = useState<ChattingCard[]>([]);
  const [roomData, setRoomData] = useState();
  const [chatData, setChatData] = useState([]);
  const [myData, setMyData] = useState();

  const MessageBoxRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  const [fristScroll, setFirstScroll] = useState(true);

  const { roomId } = useParams();
  const client = useRef({});

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
    client.current = Stomp.over(socket);

    client.current.connect({}, function (frame) {
      console.log("Connected: " + frame);

      client.current.subscribe("/room/" + roomId, function (chatMessage) {
        const message = JSON.parse(chatMessage.body);
        console.log(message);
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
    client.current.deactivate();
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
    client.current.send(
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
            roomName={roomData?.roomName}
            setIsModal={setIsModal}
          />
          <S.MessageDisplayBox ref={MessageBoxRef}>
            <S.PartnerInfo>
              <S.PartnerTypeImg
                src={`../../src/Assets/png/${roomData?.partner.type}.png`}
              />
              <S.PartnerName>{roomData?.partner.name}</S.PartnerName>
              <S.PartnerType>{roomData?.partner.type} 유형</S.PartnerType>
            </S.PartnerInfo>
            {chatData.map((chat) => (
              <MessageCard
                chat={chat}
                isMine={Number(chat?.sender.senderId) === myData.id}
                partnerType={roomData?.partner.type}
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
        />
      )}
    </>
  );
};

export default ChattingRoom;
