import styled, { css } from "styled-components";
import { maxWidth } from "styles/mixin";
import { useMediaQuery } from "react-responsive";
import LogoPrimary from "resources/images/logo-primary.png";
import snsIcon from "resources/images/snsIcon.png";
import colors from "styles/colors";
import fonts from "styles/fonts";

export default function FooterM() {
  const isMobile = useMediaQuery({ query: "(max-width: 480px)" });

  return (
    <Container>
      <div className="icon">
        <img className="logo" src={LogoPrimary}></img>
        <ContainerSNS>
          <img className="sns" src={snsIcon}></img>
          <img className="sns" src={snsIcon}></img>
          <img className="sns" src={snsIcon}></img>
        </ContainerSNS>
      </div>
      <ContainerInfo>
        <div style={{ paddingBottom: "20px" }}>
          대표: 내이름. 서울특별시 중구 한강대로 416, 서울스퀘어 15층 101호
        </div>
        <div> Copyright by (주)왓투두.</div>
        <div> All right reserved. 이용약관 개인정보처리방침</div>
      </ContainerInfo>
    </Container>
  );
}

const Container = styled.footer`
  background-color: ${colors.gray5};
  padding: 0px 18px 0px 18px;
  //z-index: 100;
  .icon {
    ${maxWidth}
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 20px 0px 24px 0px;
    gap: 20px;
  }
  .logo {
    width: 72px;
    height: 18px;
  }
  .sns {
    width: 28px;
    height: 28px;
  }
`;

const ContainerInfo = styled.div`
  ${fonts.Caption};
  color: #484848;
  padding-bottom: 28px;
`;

const ContainerSNS = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5px;
`;
