import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #111;
  height: 100vh;
`;

export const BackContainer = styled.div`
  display: flex;
  column-gap: 10px;
  width: 589px;
  margin: 100px 0 150px 0;

  & > a {
    cursor: pointer;
  }
`;

export const TextContainer = styled.p`
  color: #eeeeee;
  font-weight: 700;
  font-size: 28px;
`;

export const NextButton = styled.button`
  margin-top: 60px;
  background-color: #f3a4b2;
  width: 265px;
  height: 60px;
  border-radius: 30px;
  font-weight: 700;
  font-size: 20px;
  cursor: pointer;
  border: 0;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputContainer = styled.div`
  background-color: #292424;
  width: 590px;
  height: 100px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const InputItem = styled.input`
  background-color: #292424;
  border: 0;
  color: #ffffff;
  height: 34px;
  width: 500px;
  margin: 11px 0 0 18px;
  font-size: 18px;

  &:focus {
    outline: none;
  }
`;

export const InputText = styled.p`
  margin: 17px 0 0 17px;
  font-size: 20px;
  color: #eeeeee;
  font-weight: 700;
`;

export const PasswordContainer = styled.div`
  display: flex;
`;

export const PasswordToggleButton = styled.div`
  margin: 18px;
  cursor: pointer;
`;

export const radioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > div:not(:last-of-type) {
    margin-bottom: 50px;
  }
`;

export const GradeContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const GenderContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const MajorContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 8px;
  width: 500px;
`;

export const SelectText = styled.p`
  font-size: 20px;
  color: #eeeeee;
  font-weight: 700;
  margin-bottom: 15px;
`;

export const SelectButton = styled.div<{ isSelect: boolean }>`
  border: 2px solid ${(props) => (props.isSelect ? "#F0A0BD" : "#777777")};
  color: ${(props) => (props.isSelect ? "#F0A0BD" : "#777777")};
  padding: 7px 13px;
  font-size: 18px;
  font-weight: 700;
  border-radius: 30px;
  cursor: pointer;
`;
