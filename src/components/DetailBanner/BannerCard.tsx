import styled, { css } from "styled-components";
import { maxWidth } from "styles/mixin";
import fonts from "styles/fonts";
import BannerTags from "./BannerTag";
import ApplyButton from "./ApplyButton";
import { useContext } from "react";
import CampStore from "stores/CampStore";
import colors from "styles/colors";

export default function BannerCard() {
  const campStore = useContext(CampStore);

  return (
    <Container>
      <div className="banner-section">
        <div className="banner-title">{campStore.targetCamp!.name}</div>
        <BannerTags />
        <div>
          <div className="banner-contents">
            <div className="banner-startDate banner-content">
              <dt>시작일</dt>
              <dd>{campStore.targetCamp!.startDate}</dd>
            </div>
            <div className="banner-curriculum banner-content">
              <dt>수업 과정</dt>
              <dd>{campStore.targetCamp!.process}</dd>
            </div>
            <div className="banner-capacity banner-content">
              <dt>정원</dt>
              <dd>{campStore.targetCamp!.seat}</dd>
            </div>
            <div className="banner-provide">
              <dt>제공 자료</dt>
              <dd>
                <ReviewMaterial>
                  {campStore.targetCamp!.reviewMaterial.map(
                    (material, index) => (
                      <div key={index}>{material}</div>
                    )
                  )}
                </ReviewMaterial>
              </dd>
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
  height: 340px;
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

  .banner-provide {
    display: flex;
    justify-content: space-between;

    dt,
    dd {
      ${fonts.Body2}
    }
  }
`;

const ReviewMaterial = styled.div`
  ${fonts.Caption};
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  div {
    border-radius: 4px;
    padding: 4px 6px;
    background-color: ${colors.gray5};
  }
`;
