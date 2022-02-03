import styled from "styled-components";

import Skeleton from "components/Skeleton";
import fonts from "styles/fonts";
import { maxWidth } from "styles/mixin";

const CardSectionSkeleton = () => {
  return (
    <Container>
      <div className="section-title">
        <Skeleton
          style={{ width: 200, height: 38, borderRadius: "4px" }}
          animated
        />
      </div>
      <div className="camp-cards">
        <Skeleton
          style={{ width: "100%", height: 280, borderRadius: "10px" }}
          animated
        />
        <Skeleton
          style={{ width: "100%", height: 280, borderRadius: "10px" }}
          animated
        />
        <Skeleton
          style={{ width: "100%", height: 280, borderRadius: "10px" }}
          animated
        />
        <Skeleton
          style={{ width: "100%", height: 280, borderRadius: "10px" }}
          animated
        />
      </div>
    </Container>
  );
};

export default CardSectionSkeleton;

const Container = styled.section`
  ${maxWidth}
  padding: 0px 24px 48px;

  @media (max-width: 480px) {
    padding: 0px 24px 56px;
  }

  .section-title {
    ${fonts.H1};
    padding-bottom: 8px;
    @media (max-width: 480px) {
      padding-bottom: 20px;
    }
  }
  .camp-cards {
    @media (min-width: 480px) {
      display: flex;
      justify-content: space-between;
      gap: 20px;
    }
    @media (max-width: 480px) {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 8px;
    }
  }
`;
