import * as S from "./style";
import * as I from "../../../Assets/svg/index";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface Props {
  requestTitle: string;
  requestContent: string;
  requestImg: { imgFile: File; img: string }[];
  setRequestTitle: React.Dispatch<React.SetStateAction<string>>;
  setRequestContent: React.Dispatch<React.SetStateAction<string>>;
  setRequestImg: React.Dispatch<
    React.SetStateAction<{ imgFile: File; img: string }[]>
  >;
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
      const imgFile = e.target.files![0];
      fileReader.readAsDataURL(imgFile);

      fileReader.onload = (e: ProgressEvent<FileReader>) => {
        const src = e.target!.result as string;
        if (requestImg.flatMap((i) => [i.img]).includes(src)) {
          alert("이미 추가한 사진 입니다");
        } else {
          setRequestImg((prev) => [...prev, { imgFile: imgFile, img: src }]);
        }
      };
    } else {
      alert("3개가 최대 입니다");
    }
  };

  const handleDeleteBtnClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const deleteID = e.currentTarget.parentElement!.id;
    const newImages = requestImg.filter((image) => {
      return image.img !== deleteID;
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
    requestTitle.length !== 0 &&
    requestContent.length !== 0 &&
    requestContent.length <= 200 &&
    requestTitle.length <= 50
      ? navigate("/request/check")
      : toast.error(
          "제목이 내용을 0자 이상 각각 50자, 200자 이하로 작성해주세요",
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          }
        );
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
            <S.AddImageItemContainer key={image.img} id={image.img}>
              <S.AddImageItem src={image.img} />
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
