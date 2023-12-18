import React from "react";
import MyMessageCard from "./MyMessageCard";
import PartnerMessageCard from "./PartnerMessageCard";

interface Props {
  chat: {
    sender: {
      id: number;
      senderId: string;
      senderName: string;
    };
    message: string;
    sendDate: string;
  };
  isMine: boolean;
  partnerType: string;
  sendDate: string;
}

const MessageCard: React.FC<Props> = ({
  chat,
  isMine,
  partnerType,
  sendDate,
}) => {
  return isMine ? (
    <MyMessageCard
      chat={chat}
      sendDate={
        sendDate.split("-")[1].toString() +
        "시 " +
        sendDate.split("-")[2].slice(0, 2).toString() +
        "분"
      }
    />
  ) : (
    <PartnerMessageCard
      chat={chat}
      partnerType={partnerType}
      sendDate={
        sendDate.split("-")[1].toString() +
        "시 " +
        sendDate.split("-")[2].slice(0, 2).toString() +
        "분"
      }
    />
  );
};

export default MessageCard;
