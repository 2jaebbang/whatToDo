import styled, { css } from "styled-components";
import homeHeaderImage from "resources/images/homeHeaderImage.png";
import { maxWidth } from "styles/mixin";

export const Header = () => {
  return (
    <Container bgImg={require("resources/images/homeHeaderBackground.jpg")}>
      <div className="header-content">
        <div className="header-text">{`오늘 \n뭐 배우지`}</div>
        <div
          className="header-img"
          style={{
            backgroundImage: `url(${homeHeaderImage})`,
          }}
        />
      </div>
    </Container>
  );
};

const Container = styled.header<{ bgImg: string }>`
  background-image: url(${(props) => props.bgImg});
  padding: 104px 16px 56px;
  box-sizing: border-box;
  margin-bottom: 56px;
  .header-content {
    ${maxWidth}
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  .header-text {
    flex: 1;
    white-space: pre-line;
    color: #ffffff;
    font-weight: bold;
    font-size: 48px;
    line-height: 56px;
  }
  .header-img {
    flex: 2;
    border-radius: 10px;
    background-size: cover;
    background-position: center;
    height: 400px;
  }
`;
