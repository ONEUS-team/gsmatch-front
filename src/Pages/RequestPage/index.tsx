// import * as I from "../../Assets/svg/index";
import * as S from "./style";

export default function RequestPage() {
  return (
    <S.Container>
      <S.TextItem>어떤 요청을 보낼까요?</S.TextItem>
      <S.SubTextItem>요청은 최대 3개까지 보낼 수 있어요!</S.SubTextItem>
      <S.SelectForm>
        <S.SelectItem>
          <S.Icon src="src\Assets\svg\Heart.png" alt="유형사진" />
          <S.SelectTitle>유형</S.SelectTitle>
          <S.SelectInfo>같은 유형인 사람들에게 요청을 보내요</S.SelectInfo>
        </S.SelectItem>
        <S.SelectItem>
          <S.Icon src="src\Assets\svg\Hat.png" alt="전공사진" />
          <S.SelectTitle>전공</S.SelectTitle>
          <S.SelectInfo>같은 전공인 사람들에게 요청을 보내요</S.SelectInfo>
        </S.SelectItem>
      </S.SelectForm>
    </S.Container>
  );
}
