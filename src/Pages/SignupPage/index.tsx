import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import GeneralInfo from "./GeneralInfo";
import MajorInfo from "./MajorInfo";

const SignupPage = () => {
  const [signupName, setSignupName] = useState<string>("");
  const [signupEmail, setSignupEmail] = useState<string>("");
  const [signupPassword, setSignupPassword] = useState<string>("");
  const [signupCheckPassword, setSignupCheckPassword] = useState<string>("");
  const [signupGrade, setSignupGrade] = useState<string | null>(null);
  const [signupGender, setSignupGender] = useState<string | null>(null);
  const [signupMajor, setSignupMajor] = useState<string | null>(null);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <GeneralInfo
            signupName={signupName}
            signupEmail={signupEmail}
            signupPassword={signupPassword}
            signupCheckPassword={signupCheckPassword}
            setSignupName={setSignupName}
            setSignupEmail={setSignupEmail}
            setSignupPassword={setSignupPassword}
            setSignupCheckPassword={setSignupCheckPassword}
          />
        }
      />
      <Route
        path="/next"
        element={
          <MajorInfo
            signupName={signupName}
            signupEmail={signupEmail}
            signupPassword={signupPassword}
            signupCheckPassword={signupCheckPassword}
            signupGrade={signupGrade}
            signupGender={signupGender}
            signupMajor={signupMajor}
            setSignupGrade={setSignupGrade}
            setSignupGender={setSignupGender}
            setSignupMajor={setSignupMajor}
          />
        }
      />
    </Routes>
  );
};

export default SignupPage;
