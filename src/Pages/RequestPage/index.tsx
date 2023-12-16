import { Route, Routes } from "react-router-dom";
import RequestSelect from "./RequestSelect/index";
import DetailSelect from "./DetailSelect";
import RequestWrite from "./RequestWrite";
import RequestCheck from "./RequestCheck";
import RequestResult from "./RequestResult";
import RequestDetail from "./RequestDetail";
import { useState } from "react";
import { Gender, Grade, Major, RequestType } from "../../types/utilType";

const RequestPage = () => {
  const [requestType, setRequestType] = useState<RequestType | null>(null);
  const [requestGender, setRequestGender] = useState<Gender[]>([
    "MALE",
    "FEMALE",
  ]);
  const [requsetMajor, setRequestMajor] = useState<Major[] | null>(null);
  const [requestGrade, setRequestGrade] = useState<Grade[]>([
    "ONE",
    "TWO",
    "THREE",
  ]);
  const [requestTitle, setRequestTitle] = useState<string>("");
  const [requestContent, setRequestContent] = useState<string>("");
  const [requestImg, setRequestImg] = useState<string[]>([]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <RequestSelect
            requestType={requestType}
            setRequestType={setRequestType}
          />
        }
      />
      <Route
        path="/:requestType"
        element={
          <DetailSelect
            requestGender={requestGender}
            requsetMajor={requsetMajor}
            requestGrade={requestGrade}
            setRequestGender={setRequestGender}
            setRequestMajor={setRequestMajor}
            setRequestGrade={setRequestGrade}
          />
        }
      />
      <Route
        path="/write"
        element={
          <RequestWrite
            requestTitle={requestTitle}
            requestContent={requestContent}
            requestImg={requestImg}
            setRequestTitle={setRequestTitle}
            setRequestContent={setRequestContent}
            setRequestImg={setRequestImg}
          />
        }
      />
      <Route
        path="/check"
        element={
          <RequestCheck
            requestType={requestType}
            requestGender={requestGender}
            requsetMajor={requsetMajor}
            requestGrade={requestGrade}
            requestTitle={requestTitle}
            requestContent={requestContent}
            requestImg={requestImg}
          />
        }
      />
      <Route path="/finish/:result" element={<RequestResult />} />
      <Route path="/detail/:requestId" element={<RequestDetail />} />
    </Routes>
  );
};

export default RequestPage;
