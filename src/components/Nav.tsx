import React from "react";
import styled from "styled-components";
import { CONTENTS_MAX_WIDTH } from "@styles/constants";
import { headline2CSS } from "@styles/css";
import userIcon from "../resources/images/userIcon.svg";
export default function Nav() {
  return (
    <Container>
      <Title>WhatToDo</Title>
      <UserButton>
        <UserIcon src={userIcon} />
      </UserButton>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: ${CONTENTS_MAX_WIDTH};
  height: 64px;
`;

const Title = styled(headline2CSS)`
  color: ${({ theme }) => theme.colors.primary1};
  font-family: Roboto Slab;
  font-style: normal;
  line-height: 32px;
  letter-spacing: -0.07em;
`;

const UserButton = styled.div`
  color: white;
  cursor: pointer;
`;

const UserIcon = styled.img`
  <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.9949 7.82843C11.7451 7.07828 12.1665 6.06087 12.1665 5C12.1665 3.93913 11.7451 2.92172 10.9949 2.17157C10.2448 1.42143 9.22737 1 8.1665 1C7.10564 1 6.08822 1.42143 5.33808 2.17157C4.58793 2.92172 4.1665 3.93913 4.1665 5C4.1665 6.06087 4.58793 7.07828 5.33808 7.82843C6.08822 8.57857 7.10564 9 8.1665 9C9.22737 9 10.2448 8.57857 10.9949 7.82843Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.21676 14.0503C4.52951 12.7375 6.30999 12 8.1665 12C10.023 12 11.8035 12.7375 13.1163 14.0503C14.429 15.363 15.1665 17.1435 15.1665 19H1.1665C1.1665 17.1435 1.904 15.363 3.21676 14.0503Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
