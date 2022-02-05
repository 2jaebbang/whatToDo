import DetailBanner from "components/DetailBanner";
import { CommunityCard } from "components/index";
import styled from "styled-components";
import fonts from "styles/fonts";
import { maxWidth } from "styles/mixin";

export default function CommunitySection() {
  return (
    <Container>
      <DetailBanner />
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  max-width: 400px;
  height: 400px;
  margin: 0px auto;
  .section-title {
    ${fonts.H2};
    padding-bottom: 8px;
  }
  .cards {
    display: flex;
    gap: 20px;
    a {
      flex: 1;
    }
  }
`;
