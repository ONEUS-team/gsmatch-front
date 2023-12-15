import { Route, Routes } from "react-router-dom";
import ChattingBasic from "./ChattingBasic";
import ChattingRoom from "./ChattingRoom";

export default function ChattingPage() {
  return (
    <Routes>
      <Route path="/" element={<ChattingBasic />} />
      <Route path="/:roomId" element={<ChattingRoom />} />
    </Routes>
  );
}
