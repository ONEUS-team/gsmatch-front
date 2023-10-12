import { Route, Routes } from "react-router-dom";
import RequestSelect from "./RequestSelect/index";
import DetailSelect from "./DetailSelect";
import RequestWrite from "./RequestWrite";
import RequestCheck from "./RequestCheck";
import RequestResult from "./RequestResult";

const RequestPage = () => (
  <Routes>
    <Route path="/" element={<RequestSelect />} />
    <Route path="/:request" element={<DetailSelect />} />
    <Route path="/write" element={<RequestWrite />} />
    <Route path="/check" element={<RequestCheck />} />
    <Route path="/finish/:result" element={<RequestResult />} />
  </Routes>
);

export default RequestPage;
