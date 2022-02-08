import styled, { css } from "styled-components";
import { maxWidth } from "styles/mixin";
import BannerCard from "./BannerCard";
import ApplyDeadline from "./ApplyDeadline";
export default function DetailBanner() {
  return (
    <Container>
      <div className="banner-container">
        <BannerCard />
      </div>
      <div className="deadline-container">
        <ApplyDeadline />
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  width: 100%;
  top: 105px;

  .banner-container {
    ${maxWidth}
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
  .deadline-container {
    ${maxWidth}
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
`;
