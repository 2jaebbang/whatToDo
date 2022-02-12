import styled from "styled-components";
import fonts from "styles/fonts";
import colors from "styles/colors";

export default function ApplyDeadline() {
  return (
    <Container>
      <span className="time-deadline">0일 8시간 55분</span>
      <span>후 클래스가 마감돼요.</span>
    </Container>
  );
}

const Container = styled.div`
  border-radius: 5px;
  background-color: ${colors.gray6};
  width: 33%;
  margin: 20px 0px 10px 0px;
  padding: 5px 0px 5px 0px;
  ${fonts.Caption}

  .time-deadline {
    color: red;
    font-weight: bold;
    padding-right: 3px;
  }

  .banner-title {
    ${fonts.Caption}
  }

  display: flex;
  justify-content: center;
  align-items: center;
  .banner-content {
    display: flex;
    justify-content: space-between;
  }
`;
