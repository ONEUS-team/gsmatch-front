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
        sendDate.split("T")[1].slice(0, 5).split(":")[0] +
        "시 " +
        sendDate.split("T")[1].slice(0, 5).split(":")[0] +
        "분"
      }
    />
  ) : (
    <PartnerMessageCard
      chat={chat}
      partnerType={partnerType}
      sendDate={
        sendDate.split("T")[1].slice(0, 5).split(":")[0] +
        "시 " +
        sendDate.split("T")[1].slice(0, 5).split(":")[0] +
        "분"
      }
    />
  );
};

export default MessageCard;
