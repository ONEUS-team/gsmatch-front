import { useState } from "react";
import * as S from "./style";
import axiosInstance from "../../libs/api/axiosInstance";
import { refresh } from "../api/refresh";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface Props {
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
  id: number;
  roomName: string;
  roomId: number;
}

const ChattingModal: React.FC<Props> = ({
  setIsModal,
  id,
  roomName,
  roomId,
}) => {
  const [state, setState] = useState<"first" | "second">("first");
  const navigate = useNavigate();

  const deleteRoom = async () => {
    if (roomId == null) return;

    try {
      await axiosInstance.delete("/room/" + roomId, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        withCredentials: true,
      });

      toast.warning("채팅방이 삭제되었습니다.", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      navigate("/chat");
      setIsModal(false);
    } catch (error) {
      refresh(navigate, null);
    }
  };

  const handleBackgroundClick = () => setIsModal(false);

  const handleCancelClick = () => setIsModal(false);

  const handleExitClick = () => {
    setState("second");
  };
  const handleFinalClick = () => {
    deleteRoom();
  };

  const handleFixClick = () => {
    const newFixList = JSON.stringify([
      ...(JSON.parse(localStorage.getItem("fixList")!) as number[]),
      id,
    ]);
    localStorage.setItem("fixList", newFixList);
    setIsModal(false);
  };

  return (
    <S.Background onClick={handleBackgroundClick}>
      {state === "first" ? (
        <S.Modal
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <S.RoomName>{roomName}</S.RoomName>
          <S.FixButton onClick={handleFixClick}>채팅방 상단 고정</S.FixButton>
          <S.ExitButton onClick={handleExitClick}>나가기</S.ExitButton>
        </S.Modal>
      ) : (
        <S.SecondModal
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <S.FinalMessageBox>
            <S.FinalTitle>요청 채팅방 나가기</S.FinalTitle>
            <S.FinalMessage>
              채팅 목록 및 대화내용이 삭제되고 복구
              <br />할 수 없습니다. 나가시겠습니까?
            </S.FinalMessage>
          </S.FinalMessageBox>
          <S.ButtonBox>
            <S.CancelButton onClick={handleCancelClick}>취소</S.CancelButton>
            <S.FinalExitButton onClick={handleFinalClick}>
              나가기
            </S.FinalExitButton>
          </S.ButtonBox>
        </S.SecondModal>
      )}
    </S.Background>
  );
};

export default ChattingModal;
