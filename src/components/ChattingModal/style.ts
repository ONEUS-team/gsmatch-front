import styled from "styled-components";

export const Background = styled.div`
  background-color: rgba(18, 18, 18, 0.4);
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  position: absolute;
  left: 0;
  top: 0;
`;

export const Modal = styled.div`
  display: flex;
  padding: 2rem;
  border-radius: 1.875rem;
  background: #292424;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  z-index: 11;
`;

export const RoomName = styled.div`
  color: #fff;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: 170%;
  width: 15rem;
  border-bottom: 1px solid #121212;
  display: flex;
  justify-content: center;
  padding-bottom: 0.5rem;
`;

export const FixButton = styled.button`
  border: none;
  padding: 0;
  text-align: center;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: 170%;
  color: #fff;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
`;

export const ExitButton = styled.button`
  border: none;
  padding: 0;
  text-align: center;
  color: #ec5353;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: 170%;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
`;

export const SecondModal = styled(Modal)`
  row-gap: 0.88rem;
`;

export const FinalMessageBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
`;

export const FinalTitle = styled.h1`
  color: #fff;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
`;

export const FinalMessage = styled.p`
  color: #777;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: 170%;
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  column-gap: 1.25rem;
`;

export const CancelButton = styled.button`
  border: none;
  background-color: rgba(0, 0, 0, 0);
  padding: 0;
  text-align: center;
  color: #777;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: 170%;
  cursor: pointer;
`;

export const FinalExitButton = styled.button`
  border: none;
  background-color: rgba(0, 0, 0, 0);
  padding: 0;
  text-align: center;
  color: #ec5353;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: 170%;
  cursor: pointer;
`;
