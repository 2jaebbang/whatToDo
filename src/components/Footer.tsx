import styled, { css } from "styled-components";
import { maxWidth } from "styles/mixin";
import LogoPrimary from "resources/images/logo-primary.png";
import snsIcon from "resources/images/snsIcon.png";
import colors from "styles/colors";
import fonts from "styles/fonts";
const Footer = () => {
  return (
    <Container>
      <div className="main">
        <ContainerLogo>
          <img className="logo" src={LogoPrimary}></img>
        </ContainerLogo>
        <ContainerInfo>
          <div style={{ paddingBottom: "20px" }}>
            대표: 내이름. 서울특별시 중구 한강대로 416, 서울스퀘어 15층 101호
          </div>
          <div> Copyright by (주)왓투두.</div>
          <div> All right reserved. 이용약관 개인정보처리방침</div>
        </ContainerInfo>

        <ContainerSNS>
          <img className="sns" src={snsIcon}></img>
          <img className="sns" src={snsIcon}></img>
          <img className="sns" src={snsIcon}></img>
        </ContainerSNS>
      </div>
    </Container>
  );
};

const Container = styled.footer`
  background-color: ${colors.gray5};
  //z-index: 100;
  .main {
    ${maxWidth}
    display: flex;
    padding: 20px;
    gap: 20px;
  }
  .logo {
    width: 65px;
    height: 17px;
  }
  .sns {
    width: 28px;
    height: 28px;
  }
`;

const ContainerLogo = styled.div`
  flex: 1;
`;

const ContainerInfo = styled.div`
  flex: 4;
  ${fonts.Caption};
`;

const ContainerSNS = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5px;
`;

export default Footer;
