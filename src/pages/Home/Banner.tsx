import styled, { css } from "styled-components";
import { maxWidth } from "styles/mixin";
import colors from "styles/colors";
import fonts from "styles/fonts";
import { useMediaQuery } from "react-responsive";

export default function Banner() {
  const isMobile = useMediaQuery({ query: "(max-width: 480px)" });

  return (
    <Container isMobile={isMobile}>
      <div className="banner-text">{`현직자와 소통하며 배우는 실무 스킬, 퍼스널 트레이닝`}</div>
    </Container>
  );
}

const Container = styled.div<{ isMobile: boolean }>`
  ${maxWidth}
  height: 100px;
  background-color: ${colors.primary1};
  box-sizing: border-box;
  display: flex;
  margin-top: ${(props) => (props.isMobile ? "56px" : "0px")};
  margin-bottom: ${(props) => (props.isMobile ? "0px" : "48px")};
  .banner-text {
    ${fonts.H2};
    color: white;
    align-self: center;
    padding-left: ${(props) => (props.isMobile ? "16px" : "40px")};
  }
`;
