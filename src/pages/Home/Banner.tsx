import styled, { css } from "styled-components";
import { maxWidth } from "styles/mixin";
import colors from "styles/colors";
import fonts from "styles/fonts";

export default function Banner() {
  return (
    <Container>
      <div className="banner-text">{`현직자와 소통하며 배우는 실무 스킬, 퍼스널 트레이닝`}</div>
    </Container>
  );
}

const Container = styled.div`
  ${maxWidth}
  height: 100px;
  background-color: ${colors.primary1};
  box-sizing: border-box;
  display: flex;
  margin-bottom: 48px;
  .banner-text {
    ${fonts.H2};
    color: white;
    align-self: center;
    padding-left: 40px;
  }
`;
