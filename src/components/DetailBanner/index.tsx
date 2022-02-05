import styled, { css } from "styled-components";
import { maxWidth } from "styles/mixin";
import BannerCard from "./BannerCard";
import ApplyDeadline from "./ApplyDeadline";
export default function DetailBanner() {
  return (
    <Container>
      <BannerCard />
      <ApplyDeadline />
    </Container>
  );
}

const Container = styled.div`
  ${maxWidth}

  position: relative;
  background-size: cover;
  background-position: center;
  height: 280px;

  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
