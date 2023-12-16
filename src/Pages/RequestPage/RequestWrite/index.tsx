import * as S from "./style";
import * as I from "../../../Assets/svg/index";
import { useNavigate } from "react-router-dom";

interface Props {
  requestTitle: string;
  requestContent: string;
  requestImg: string[];
  setRequestTitle: React.Dispatch<React.SetStateAction<string>>;
  setRequestContent: React.Dispatch<React.SetStateAction<string>>;
  setRequestImg: React.Dispatch<React.SetStateAction<string[]>>;
}

const RequestWrite: React.FC<Props> = ({
  requestImg,
  requestTitle,
  requestContent,
  setRequestImg,
  setRequestTitle,
  setRequestContent,
}) => {
  const navigate = useNavigate();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (requestImg.length <= 3) {
      const fileReader = new FileReader();

      fileReader.readAsDataURL(e.target.files![0]);

      fileReader.onload = (e: ProgressEvent<FileReader>) => {
        const src = e.target!.result as string;
        if (requestImg.includes(src)) {
          alert("이미 추가한 사진 입니다");
        } else {
          const newImages = [src].concat(requestImg);
          setRequestImg(newImages);
        }
      };
    } else {
      alert("3개가 최대 입니다");
    }
  };

  const handleDeleteBtnClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const deleteID = e.currentTarget.parentElement!.id;
    const newImages = requestImg.filter((image) => {
      return image !== deleteID;
    });
    setRequestImg(newImages);
  };

  const handelTextChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const ID = e.target.id;

    switch (ID) {
      case "titleText":
        setRequestTitle(e.target.value);
        break;
      case "mainText":
        setRequestContent(e.target.value);
        break;
    }
  };

  const nextPage = () => {
    requestTitle.length !== 0 && requestContent.length !== 0
      ? navigate("/request/check")
      : alert("제목이나 내용을 입력해주세요");
  };

  return (
    <S.Container>
      <S.AddImageContainer>
        <S.AddImageButton>
          <S.AddImageInput
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
          <I.CameraIcon />
          <S.AddImageTextContainer>
            <S.TextItem>{requestImg.length}</S.TextItem>
            /3
          </S.AddImageTextContainer>
        </S.AddImageButton>
        {requestImg.map((image) => {
          return (
            <S.AddImageItemContainer key={image} id={image}>
              <S.AddImageItem src={image} />
              <S.DeleteButton onClick={handleDeleteBtnClick}>
                <I.DeleteIcon />
              </S.DeleteButton>
            </S.AddImageItemContainer>
          );
        })}
      </S.AddImageContainer>
      <S.TitleInput
        type="text"
        placeholder="요청 제목"
        value={requestTitle}
        onChange={handelTextChange}
        id="titleText"
      />
      <S.MainTextInput
        placeholder="내용을 적어주세요."
        value={requestContent}
        onChange={handelTextChange}
        id="mainText"
      />
      <S.Button onClick={nextPage}>
        요청 쓰기
        <I.ArrowButtonIcon />
      </S.Button>
    </S.Container>
  );
};

export default RequestWrite;
