import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { maxWidth } from "styles/mixin";
import LogoPrimary from "resources/images/logo-primary.png";
import LogoWhite from "resources/images/logo-white.png";
import UserWhite from "resources/images/user-white.png";
import UserPrimary from "resources/images/user-primary.png";

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  return (
    <Container isScrolled={isScrolled}>
      <div className="main">
        <Link to="/" style={{ display: "block", alignSelf: "center" }}>
          <img
            className="logo"
            src={isScrolled ? LogoPrimary : LogoWhite}
          ></img>
        </Link>
        <Link to="/">
          <img
            className="userIcon"
            src={isScrolled ? UserPrimary : UserWhite}
          ></img>
        </Link>
      </div>
    </Container>
  );
}

const Container = styled.nav<{ isScrolled: boolean }>`
  position: fixed;
  width: 100%;
  z-index: 100;

  ${(props) =>
    props.isScrolled &&
    css`
      background-color: white;
      transition: 0.5s;
    `}

  .main {
    ${maxWidth}
    display: flex;
    align-self: center;
    justify-content: space-between;
    padding: 20px;
    gap: 20px;
  }
  .logo {
    width: 100px;
    height: 22px;
  }
  .userIcon {
    width: 24px;
    height: 24px;
  }
`;
