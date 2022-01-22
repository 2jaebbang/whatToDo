import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CONTENTS_MAX_WIDTH } from "styles/constants";
import { captionCSS, headline3CSS } from "styles/css";
import snsIcon from "resources/images/snsIcon.svg";
export default function Footer() {
  return (
    <Container>
      <Container2>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Title>WhatToDo</Title>
        </Link>
        <div style={{}}>
          <InfoText style={{ paddingBottom: "20px" }}>
            대표: 내이름. 서울특별시 중구 한강대로 416, 서울스퀘어 15층 101호
          </InfoText>
          <InfoText> Copyright by (주)왓투두.</InfoText>
          <InfoText> All right reserved. 이용약관 개인정보처리방침</InfoText>
        </div>
        <div style={{}}>
          <SNSIcon src={snsIcon} />
          <SNSIcon src={snsIcon} />
          <SNSIcon src={snsIcon} />
        </div>
      </Container2>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 160px;
  background-color: ${({ theme }) => theme.colors.gray5};
`;

const Container2 = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: ${CONTENTS_MAX_WIDTH};
  padding: 32px 0px 0px 0px;
`;

const Title = styled(headline3CSS)`
  flex: 2;
  color: ${({ theme }) => theme.colors.primary1};
  font-family: Roboto Slab;
  font-style: normal;
  letter-spacing: -0.07em;
`;

const SNSIcon = styled.img`
  margin: "20px";
`;

const InfoContainer = styled.div``;

const InfoText = styled(captionCSS)`
  color: #484848;
`;
