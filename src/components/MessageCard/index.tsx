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
}

const MessageCard: React.FC<Props> = ({ chat, isMine, partnerType }) => {
  return isMine ? (
    <MyMessageCard chat={chat} />
  ) : (
    <PartnerMessageCard chat={chat} partnerType={partnerType} />
  );
};

export default MessageCard;
