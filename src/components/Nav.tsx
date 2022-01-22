import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CONTENTS_MAX_WIDTH } from "styles/constants";
import { headline2CSS } from "styles/css";
import userIcon from "resources/images/userIcon.png";
export default function Nav() {
  return (
    <div style={{ background: "#6499ff" }}>
      <Container style={{}}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Title>WhatToDo</Title>
        </Link>
        <Link to="/">
          <UserIcon src={userIcon} />
        </Link>
      </Container>
    </div>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: ${CONTENTS_MAX_WIDTH};
  height: 64px;
  background: #6499ff;
`;

const Title = styled(headline2CSS)`
  color: white;
  font-family: Roboto Slab;
  font-style: normal;
  line-height: 32px;
  letter-spacing: -0.07em;
`;

const UserIcon = styled.img`
  color: white;
`;
