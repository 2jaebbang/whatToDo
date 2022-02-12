import { useContext } from "react";
import CampStore from "stores/CampStore";
import styled, { css } from "styled-components";
import fonts from "styles/fonts";
import DetailSection from "./DetailSection";

export default function DetailDescription() {
  const campStore = useContext(CampStore);
  return (
    <Container images={campStore.targetCamp!.images}>
      <DetailSection>
        <div className="main-description-image" />
        <div className="sub-description">
          <p>트레이닝이 끝난 당신은 이렇게 됩니다.</p>
          <div className="sub-description-result-image" />

          <p>
            주니어 개발자에게
            <br />꼭 필요한 내용만 담았습니다.
          </p>
          <div className="sub-description-capture-image"></div>
        </div>
      </DetailSection>
    </Container>
  );
}

const Container = styled.div<{ images: string[] }>`
  background-color: white;

  .main-description-image {
    width: 100%;
    height: 1300px;
    margin: 20px 0px 60px 0px;
    background-size: cover;
    background-position: center;

    ${(props) =>
      css`
        background-image: url(${props.images[0]});
      `}
  }

  .sub-description {
    ${fonts.H1};

    p {
      padding-top: 120px;
      padding-bottom: 20px;
    }
    .sub-description-result-image {
      width: 100%;
      height: 350px;
      background-size: cover;
      background-position: center;
      ${(props) =>
        css`
          background-image: url(${props.images[1]});
        `}
    }
    .sub-description-capture-image {
      width: 100%;
      height: 1200px;
      background-size: cover;
      background-position: center;
      ${(props) =>
        css`
          background-image: url(${props.images[2]});
        `}
    }
  }
`;
