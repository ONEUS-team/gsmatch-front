import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #111;
  height: 100vh;
  position: relative;
  padding-top: 4.875rem;
`;

export const ItemImg = styled.img`
  width: 50rem;
  height: 36.25rem;
  color: white;
`;

export const MiddleBox = styled.div`
  position: relative;
  display: flex;
  width: 50rem;
`;

export const UserBox = styled.div`
  height: 5rem;
  display: flex;
  column-gap: 0.75rem;
  align-items: center;
`;

export const IconBox = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 50%;
  right: -1.75rem;
  transform: translate(-50%, -50%);
`;

export const HeartButton = styled.button`
  background-color: rgba(0, 0, 0, 0);
  border: none;

  svg {
    display: block;
    cursor: pointer;
  }
`;

export const EditButton = styled(HeartButton)``;

export const UserImg = styled.img`
  border: 1px solid #f3a4b2;
  width: 3rem;
  height: 3rem;
  border-radius: 3rem;
`;

export const UserInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.25rem;
`;

export const UserName = styled.p`
  color: #fff;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const UserGradeMajor = styled.p`
  color: #fff;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const RequestBox = styled.div`
  width: 50rem;
`;

export const RequestTitle = styled.h1`
  margin-top: 1.25rem;
  color: #fff;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  text-align: left;
`;

export const RequestContent = styled.p`
  margin-top: 0.75rem;
  color: #fff;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 170%;
  text-align: left;
`;

export const Button = styled.button`
  position: absolute;
  bottom: 5rem;
  background-color: #f3a4b2;
  border: 0;
  padding: 1rem 5.1875rem;
  color: black;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 120%;
  border-radius: 1.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 0.5rem;
  cursor: pointer;
`;

export const EditForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleInput = styled.input`
  margin-top: 1.63rem;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: 170%;
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0);
  width: 50rem;
  height: 4.5rem;
  border-top: 1px solid #575757;
  border-bottom: 1px solid #575757;
  border-left: 0;
  border-right: 0;

  &:focus {
    outline: none;
  }
`;

export const contentInput = styled.textarea`
  font-family: Pretendard;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: 170%;
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0);
  width: 50rem;
  height: 35rem;
  padding-top: 1.2rem;
  border: 0;
  resize: none;

  &:focus {
    outline: none;
  }
`;

export const EditCompleteButton = styled(Button)`
  width: 16.5rem;
`;
