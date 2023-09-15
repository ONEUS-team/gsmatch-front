import { Route, Routes } from "react-router-dom";
import RequestSelect from "./RequestSelect/index";
import DetailSelect from "./DetailSelect";
import RequestWrite from "./RequestWrite";

const RequestPage = () => (
  <Routes>
    <Route path="/" element={<RequestSelect />} />
    <Route path="/:request" element={<DetailSelect />} />
    <Route path="/write" element={<RequestWrite />} />
  </Routes>
);

export default RequestPage;
