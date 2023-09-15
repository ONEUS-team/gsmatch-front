import { Route, Routes } from "react-router-dom";
import RequestSelect from "./RequestSelect/index";
import DetailSelect from "./DetailSelect";

const RequestPage = () => (
  <Routes>
    <Route path="/" element={<RequestSelect />} />
    <Route path="/:request" element={<DetailSelect />} />
  </Routes>
);

export default RequestPage;
