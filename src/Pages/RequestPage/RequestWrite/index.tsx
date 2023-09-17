import * as S from "./style";
import * as I from "../../../Assets/svg/index";
import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";

const RequestWrite = () => {
  const [images, setImages] = useState<string[]>([]);
  const [titleText, setTitleText] = useState("");
  const [mainText, setMainText] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if ((images as string[]).length <= 10) {
      const fileReader = new FileReader();

      fileReader.readAsDataURL(e.target.files![0]);

      fileReader.onload = (e: ProgressEvent<FileReader>) => {
        const src = e.target!.result as string;
        if (images.includes(src)) {
          console.log("이미 추가한 사진 입니다");
        } else {
          const newImages = [src].concat(images);
          setImages(newImages);
        }
      };
    } else {
      alert("10개가 최대 입니다");
    }
  };

  const handleDeleteBtnClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const deleteID = e.currentTarget.parentElement!.id;
    const newImages = images.filter((image) => {
      return image !== deleteID;
    });
    setImages(newImages);
  };

  const handelTextChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const ID = e.target.id;

    switch (ID) {
      case "titleText":
        setTitleText(e.target.value);
        break;
      case "mainText":
        setMainText(e.target.value);
        break;
    }
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
            <S.TextItem>{images.length}</S.TextItem>
            /10
          </S.AddImageTextContainer>
        </S.AddImageButton>
        {images.map((image) => {
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
        value={titleText}
        onChange={handelTextChange}
        id="titleText"
      />
      <S.MainTextInput
        placeholder="내용을 적어주세요."
        value={mainText}
        onChange={handelTextChange}
        id="mainText"
      />
      <Link to="/request/check">
        <S.Button>
          요청 쓰기
          <I.ArrowButtonIcon />
        </S.Button>
      </Link>
    </S.Container>
  );
};

export default RequestWrite;
