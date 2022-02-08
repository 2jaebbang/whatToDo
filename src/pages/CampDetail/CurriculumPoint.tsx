import styled from "styled-components";
import colors from "styles/colors";
import fonts from "styles/fonts";
import DetailSection from "./DetailSection";

export default function CurriculumPoint() {
  return (
    <Container>
      <DetailSection>
        <div className="live-title">
          React, 할 수 있게 만드는
          <br />
          3가지 학습 포인트
        </div>
        <div className="point-cards">
          <PointCard>
            <img src="https://cdn.comento.kr/images/class/pt/detail/icon/pt-detail-differentiation-live.svg" />
            <p className="card-title">라이브로 소통하는 수업</p>
            <p className="card-content">
              화면만 보는 VOD와 달라요.
              <br />
              라이브로 배우고, 직접 소통하세요.
            </p>
          </PointCard>
          <PointCard>
            <img src="https://cdn.comento.kr/images/class/pt/detail/icon/pt-detail-differentiation-curriculum.svg" />
            <p className="card-title">실무 베이스 커리큘럼</p>
            <p className="card-content">
              실무 적용까지 생각한 커리큘럼!
              <br />
              이론과 실습을 함께 해결하세요.
            </p>
          </PointCard>
          <PointCard>
            <img src="https://cdn.comento.kr/images/class/pt/detail/icon/pt-detail-differentiation-study.svg" />
            <p className="card-title">몰입을 만드는 수강환경</p>
            <p className="card-content">
              멘토와의 1:1 대화는 물론,
              <br />
              러닝메이트와 함께 스터디하세요.
            </p>
          </PointCard>
        </div>
      </DetailSection>
    </Container>
  );
}

const Container = styled.div`
  background-color: white;

  .live-title {
    ${fonts.H1};
    padding-top: 120px;
  }

  .point-cards {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 20px 0px 20px 0px;
  }
`;

const PointCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: ${colors.gray5};
  border-radius: 6px;
  .card-title {
    ${fonts.H3}
    padding: 20px 0px 10px 0px;
  }
  .card-content {
    ${fonts.Body2}
    text-align: center;
  }
`;
