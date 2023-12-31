import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding-top: 4.875rem;
  overflow: hidden;

  @media (max-width: 720px) {
    padding-top: 3.875rem;
  }
`;

export const AddImageContainer = styled.div`
  display: flex;
  width: 50rem;
  margin-top: 5rem;
  margin-bottom: 1.31rem;
  column-gap: 0.75rem;
  height: 4.5rem;

  @media (max-width: 720px) {
    margin-top: 1rem;
    width: 21rem;
  }
`;

export const AddImageButton = styled.label`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #575757;
  padding: 0.5rem 1.25rem;
  border: 1px solid #575757;
  border-radius: 0.625rem;
  width: 4.5rem;
  height: 4.5rem;
`;

export const AddImageInput = styled.input`
  display: none;
`;

export const AddImageTextContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
`;

export const AddImageItemContainer = styled.div`
  position: relative;
`;

export const AddImageItem = styled.img`
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 0.63rem;
`;

export const TextItem = styled.p`
  color: #f3a4b2;
`;

export const DeleteButton = styled.div`
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  cursor: pointer;
`;

export const TitleInput = styled.input`
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

  @media (max-width: 720px) {
    width: 21rem;
  }
`;

export const MainTextInput = styled.textarea`
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: 170%;
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0);
  width: 50rem;
  height: 30rem;
  padding-top: 1.2rem;
  border: 0;
  resize: none;

  &:focus {
    outline: none;
  }

  @media (max-width: 720px) {
    width: 21rem;
    height: 15rem;
  }
`;

export const Button = styled.button`
  background-color: #f3a4b2;
  border: none;
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
  margin-top: 5rem;

  @media (max-width: 720px) {
    margin-top: 3rem;
  }
`;
