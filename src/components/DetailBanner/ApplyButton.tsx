import styled from "styled-components";
import fonts from "styles/fonts";
import colors from "styles/colors";

export default function ApplyButton() {
  return <Container>더 잘하는 개발자 되기</Container>;
}

const Container = styled.div`
  height: 48px;
  border: 1px solid #cccccc;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  background-color: ${colors.primary1};
  ${fonts.H4}
  color: white;
  .banner-title {
    ${fonts.H2}
  }

  display: flex;
  justify-content: center;
  align-items: center;
  .banner-content {
    display: flex;
    justify-content: space-between;
  }
`;
