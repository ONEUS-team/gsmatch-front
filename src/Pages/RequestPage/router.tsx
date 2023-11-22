import { Route, Routes } from "react-router-dom";
import React from "react";
import * as R from "./index";

const RequestPage = () => (
  <Routes>
    <Route path="/" element={<R.RequestSelect />} />
    <Route path="/detail/:id" element={<R.RequestDetail />} />
    <Route path="/:request" element={<R.DetailSelect />} />
    <Route path="/write" element={<R.RequestWrite />} />
    <Route path="/check" element={<R.RequestCheck />} />
    <Route path="/finish/:result" element={<R.RequestResult />} />
  </Routes>
);

export default RequestPage;
