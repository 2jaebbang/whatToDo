import { useContext } from "react";
import CampStore from "stores/CampStore";
import styled from "styled-components";
import colors from "styles/colors";
import fonts from "styles/fonts";
import DetailSection from "./DetailSection";

export default function Review() {
  const campStore = useContext(CampStore);

  return (
    <Container>
      <DetailSection>
        <div className="review-title">
          먼저 트레이닝 받은 분들의
          <br />
          이야기를 들어보세요.
        </div>
        <div className="review-cards">
          {campStore.targetCamp?.reviews.map((review, index) => (
            <ReviewCard key={index}>
              <img src="https://cdn.comento.kr/images/class/pt/detail/icon/seedling.png" />
              <p
                className="card-content"
                dangerouslySetInnerHTML={{ __html: review.content }}
              ></p>
              <p className="review-name">{review.reviewer}</p>
            </ReviewCard>
          ))}
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
