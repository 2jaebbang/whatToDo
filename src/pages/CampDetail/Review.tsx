import styled from "styled-components";
import colors from "styles/colors";
import fonts from "styles/fonts";
import DetailSection from "./DetailSection";

export default function Review() {
  return (
    <Container>
      <DetailSection>
        <div className="review-title">
          먼저 트레이닝 받은 분들의
          <br />
          이야기를 들어보세요.
        </div>
        <div className="review-cards">
          <ReviewCard>
            <img src="https://cdn.comento.kr/images/class/pt/detail/icon/seedling.png" />
            <p className="card-content">
              저는 완전히 모르는 상태에서 시작했고 기대도 높지 않았는데,
              <br />
              끝까지 해내고 보니 굉장히 성장한 느낌이에요.
              <br />
              직장 다니면서 뭔가 끝까지 해본 게 처음이라..
            </p>
            <br />
            <p className="card-content">
              '아무것도 모르는 사람도 할 수 있어요'라는 문구가 진짜 거짓이
              아니었네요.
            </p>
            <p className="review-name">- 수료생 김태희님</p>
          </ReviewCard>
          <ReviewCard>
            <p className="card-content">
              라이브니까, 공부하면서 궁금한 걸
              <br />
              바로바로 물어볼 수 있는게 제일 좋았어요!
              <br />
            </p>
            <br />
            <p className="card-content">
              VOD 강의 많이 들어봤지만 VOD는 궁금한 걸
              <br />
              물어볼 수도 없고, 물어볼 수 있다고 해도 답변 받는데 진짜 오래
              걸렸거든요. 소통이 즉각적이라는 게 가장 좋았어요.
            </p>
            <p className="review-name">- 수료생 임미성님</p>
          </ReviewCard>
          <ReviewCard>
            <p className="card-content">
              매주 받는 강의 자료랑 과제 내용이 업무에서 흔하게 일어날 수 있는
              상황 중심이어서,
              <br />
              '우리 회사라면 이런 식으로 해볼 수 있겠다.' 라고 생각하며 수업을
              들었구요.
            </p>
            <br />
            <p className="card-content">
              이론도 실무랑 연계되는 내용으로 알려주셔서 바로 업무에 적용할 수
              있었어요.
            </p>
            <p className="review-name">- 수료생 김태형님</p>
          </ReviewCard>
          <ReviewCard>
            <img src="https://cdn.comento.kr/images/class/pt/detail/icon/thumbs-up.png" />
            <p className="card-content">
              멘토님도 퇴근하고 강의하시느라 힘드실 텐데
              <br />
              라이브 강의 때마다 정말 정성스럽게 과제 리뷰랑 피드백을 너무 잘
              해주셨구요.
            </p>
            <br />
            <p className="card-content">
              꼭 강의 때가 아니더라도어려운 거 있을 때마다 하나하나 같이
              해주시고 질문도 잘 받아주셔서 더 열심히 할 수 있었어요.
            </p>
            <p className="review-name">- 수료생 강지현님</p>
          </ReviewCard>
        </div>
      </DetailSection>
    </Container>
  );
}

const Container = styled.div`
  background-color: #eff8fa;

  .review-title {
    ${fonts.H1};
    padding-top: 80px;
  }

  img {
    width: 32px;
    padding-bottom: 12px;
  }

  .review-cards {
    column-count: 2;
    margin: 20px 0px 20px 0px;
  }
`;

const ReviewCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 340px;
  padding: 15px;
  margin: 0px 0px 16px 0px;
  background-color: white;
  border-radius: 6px;
  .card-content {
    ${fonts.Body1}
  }
  .review-name {
    ${fonts.Body2}
    color: ${colors.gray3};
    padding-top: 20px;
  }
`;
