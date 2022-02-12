import styled from "styled-components";
import fonts from "styles/fonts";
import colors from "styles/colors";
import { Link } from "react-router-dom";

export default function ApplyButton() {
  return (
    <Link to={``}>
      <Container>더 잘하는 개발자 되기</Container>
    </Link>
  );
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
