import { useEffect, useRef, useState } from "react";
import {
  ChattingCardList,
  ChattingInput,
  ChattingModal,
} from "../../../components";
import ChattingHeader from "../../../components/ChattingHeader";
import * as S from "./style";
import MessageCard from "../../../components/MessageCard";

const data = [
  {
    id: 1,
    roomName: "아니 왜 손흥민...",
    partner: {
      id: 1110,
      name: "황희찬",
      major: "FRONT",
      grade: "ONE",
      type: "PORORO",
    },
  },
  {
    id: 2,
    roomName: "아니 왜 손흥민...",
    partner: {
      id: 1210,
      name: "황희찬",
      major: "FRONT",
      grade: "TWO",
      type: "EDI",
    },
  },
  {
    id: 3,
    roomName: "아니 왜 손흥민123456789",
    partner: {
      id: 1130,
      name: "황희찬",
      major: "FRONT",
      grade: "ONE",
      type: "POBI",
    },
  },
];

const chatData = {
  roomName: "방가온 화이팅",
  chats: [
    {
      sender: {
        id: 1,
        senderId: "1",
        senderName: "방가온",
      },
      message: "ㅎㅇ",
      sendDate: "2023-12-14-20-32",
    },
    {
      sender: {
        id: 2,
        senderId: "2",
        senderName: "신희성",
      },
      message: "안녕",
      sendDate: "2023-12-14-20-33",
    },
    {
      sender: {
        id: 3,
        senderId: "1",
        senderName: "방가온",
      },
      message: "뭐해?",
      sendDate: "2023-12-14-20-34",
    },
    {
      sender: {
        id: 4,
        senderId: "2",
        senderName: "신희성",
      },
      message: "일하고 있어.",
      sendDate: "2023-12-14-20-35",
    },
    {
      sender: {
        id: 5,
        senderId: "1",
        senderName: "방가온",
      },
      message: "또 얘기할게 있어?",
      sendDate: "2023-12-14-20-36",
    },
    {
      sender: {
        id: 6,
        senderId: "2",
        senderName: "신희성",
      },
      message: "네, 어떤 일이야?",
      sendDate: "2023-12-14-20-37",
    },
    {
      sender: {
        id: 7,
        senderId: "1",
        senderName: "방가온",
      },
      message: "오늘 뭐 했어?",
      sendDate: "2023-12-14-20-38",
    },
    {
      sender: {
        id: 8,
        senderId: "2",
        senderName: "신희성",
      },
      message: "영화 봤어.",
      sendDate: "2023-12-14-20-39",
    },
    {
      sender: {
        id: 9,
        senderId: "1",
        senderName: "방가온",
      },
      message: "어땠어?",
      sendDate: "2023-12-14-20-40",
    },
    {
      sender: {
        id: 10,
        senderId: "2",
        senderName: "신희성",
      },
      message: "재밌었어.",
      sendDate: "2023-12-14-20-41",
    },
    {
      sender: {
        id: 3,
        senderId: "1",
        senderName: "방가온",
      },
      message: "뭐해?",
      sendDate: "2023-12-14-20-34",
    },
    {
      sender: {
        id: 4,
        senderId: "2",
        senderName: "신희성",
      },
      message: "일하고 있어.",
      sendDate: "2023-12-14-20-35",
    },
    {
      sender: {
        id: 5,
        senderId: "1",
        senderName: "방가온",
      },
      message: "또 얘기할게 있어?",
      sendDate: "2023-12-14-20-36",
    },
    {
      sender: {
        id: 6,
        senderId: "2",
        senderName: "신희성",
      },
      message: "네, 어떤 일이야?",
      sendDate: "2023-12-14-20-37",
    },
    {
      sender: {
        id: 7,
        senderId: "1",
        senderName: "방가온",
      },
      message: "오늘 뭐 했어?",
      sendDate: "2023-12-14-20-38",
    },
    {
      sender: {
        id: 8,
        senderId: "2",
        senderName: "신희성",
      },
      message: "영화 봤어.",
      sendDate: "2023-12-14-20-39",
    },
    {
      sender: {
        id: 9,
        senderId: "1",
        senderName: "방가온",
      },
      message: "어땠어?",
      sendDate: "2023-12-14-20-40",
    },
    {
      sender: {
        id: 10,
        senderId: "2",
        senderName: "신희성",
      },
      message: "재밌었어.",
      sendDate: "2023-12-14-20-41",
    },
  ],
};

const myData = {
  username: "방가온",
};

const roomData = {
  id: 131,
  roomName: "hihi",
  partner: {
    id: 1110,
    name: "시니성",
    major: "FRONT",
    grade: "ONE",
    type: "PORORO",
  },
};

const ChattingRoom = () => {
  const [isModal, setIsModal] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");

  const MessageBoxRef = useRef<HTMLDivElement>(null);

  const [fristScroll, setFirstScroll] = useState(true);

  const scrollInit = () => {
    if (!MessageBoxRef.current) return;

    MessageBoxRef.current.scrollTop = MessageBoxRef.current.scrollHeight;
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
  }, []);

  return (
    <>
      <S.Container>
        <ChattingCardList cardList={data} />
        <S.ChattingRoom>
          <ChattingHeader
            roomName={roomData.roomName}
            setIsModal={setIsModal}
          />
          <S.MessageDisplayBox ref={MessageBoxRef}>
            <S.PartnerInfo>
              <S.PartnerTypeImg src="" />
              <S.PartnerName>홍길동</S.PartnerName>
              <S.PartnerType>뽀로로 유형</S.PartnerType>
            </S.PartnerInfo>
            {chatData.chats.map((chat) => (
              <MessageCard
                chat={chat}
                isMine={chat.sender.senderName === myData.username}
                partnerType={roomData.partner.type}
              />
            ))}
          </S.MessageDisplayBox>
          <ChattingInput
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
        </S.ChattingRoom>
      </S.Container>
      {isModal && (
        <ChattingModal
          id={3}
          setIsModal={setIsModal}
          roomName={data[0].roomName}
        />
      )}
    </>
  );
};

export default ChattingRoom;
