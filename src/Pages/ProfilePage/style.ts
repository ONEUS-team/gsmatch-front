import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div<{ isScrollable: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #111;
  height: 100vh;
  padding-bottom: ${({ isScrollable }) => isScrollable && "5rem"};
  overflow-y: auto;
`;

export const TypeImgBox = styled.div`
  position: relative;
`;

export const LevelEdge = styled.img`
  position: absolute;
  background-color: rgba(0, 0, 0, 0);
  top: -2.95rem;
  left: -3.12rem;
`;

export const ProfileBox = styled.div`
  margin-top: 8.435rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1.88rem;
`;

export const ProfileImg = styled.img`
  width: 10rem;
  height: 10rem;
  border: none;
  border-radius: 50%;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.75rem;
  align-items: center;
`;

export const TopInfo = styled.p`
  color: #eee;
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
`;

export const BottomInfo = styled.p`
  color: #c0c0c0;
  text-align: center;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;

  display: flex;
  flex-direction: column;
  row-gap: 0.75rem;
`;

export const BannerContainer = styled.div`
  margin-top: 3.19rem;
  display: flex;
  column-gap: 0.75rem;
  width: 50.125rem;
`;

export const BannerItem = styled.div`
  width: 24.6875rem;
  height: 8rem;
  padding-left: 1.25rem;
  display: flex;
  align-items: center;
  column-gap: 1.75rem;
  background-color: #292424;
  border-radius: 1.25rem;
`;

export const BannerImg = styled.img`
  height: 5.75rem;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.38rem;
`;

export const RequestBannerText = styled.p`
  color: #fff;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;

  &::after {
    content: ".";
    color: #f0a0bd;
  }
`;

export const BannerLink = styled(Link)`
  cursor: pointer;
  display: flex;
  column-gap: 0.2rem;
  align-items: center;

  color: #c0c0c0;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;

  svg {
    height: 0.7rem;

    .arrowIcon {
      stroke: #c0c0c0;
    }
  }
`;

export const TypeBannerText = styled(RequestBannerText)`
  &::after {
    content: "?";
    color: #f0a0bd;
  }
`;

export const PointBar = styled.div<{ level: number; point: number }>`
  border-radius: 50px;
  width: 15.0625rem;
  height: 0.5rem;
  background: linear-gradient(
    90deg,
    #f3a4b2 0%,
    #f3a4b2
      ${({ level, point }) =>
        " " +
        (level === 1
          ? (point / 20) * 100 + "%"
          : level === 2
          ? ((point - 20) / 30) * 100 + "%"
          : level === 3
          ? ((point - 50) / 30) * 100 + "%"
          : level === 4
          ? ((point - 80) / 40) * 100 + "%"
          : "100%")},
    #eee
      ${({ level, point }) =>
        " " +
        (level === 1
          ? (point / 20) * 100 + "%"
          : level === 2
          ? ((point - 20) / 30) * 100 + "%"
          : level === 3
          ? ((point - 50) / 30) * 100 + "%"
          : level === 4
          ? ((point - 80) / 40) * 100 + "%"
          : "100%")},
    #eee 100%
  );
`;
