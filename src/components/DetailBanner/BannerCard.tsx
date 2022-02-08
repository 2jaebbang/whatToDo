import styled, { css } from "styled-components";
import { maxWidth } from "styles/mixin";
import fonts from "styles/fonts";
import BannerTags from "./BannerTag";
import ApplyButton from "./ApplyButton";

export default function BannerCard() {
  const dummyTag = ["기초&실전용", "복습용"];

  return (
    <Container>
      <div className="banner-section">
        <div className="banner-title">
          React로 배우는 실무 프로젝트 역량 업그레이드
        </div>
        <BannerTags tags={dummyTag} />
        <div>
          <div className="banner-contents">
            <div className="banner-startDate banner-content">
              <dt>시작일</dt>
              <dd>22.02.20(일) 12:00</dd>
            </div>
            <div className="banner-curriculum banner-content">
              <dt>수업 과정</dt>
              <dd>6주, 온라인 LIVE</dd>
            </div>
            <div className="banner-capacity banner-content">
              <dt>정원</dt>
              <dd>8명 소수정예</dd>
            </div>
          </div>
        </div>
        <ApplyButton />
      </div>
    </Container>
  );
}

const Container = styled.div`
  padding: 24px;
  width: 33%;
  height: 320px;
  border: 1px solid #cccccc;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background-color: white;

  .banner-section {
    display: flex;
    flex-direction: column;
  }

  .banner-title {
    ${fonts.H2}
    padding-bottom: 20px;
  }

  .banner-contents {
    padding-bottom: 20px;
  }

  .banner-content {
    display: flex;
    justify-content: space-between;
    padding-bottom: 5px;

    dt,
    dd {
      ${fonts.Body2}
    }
  }
`;
