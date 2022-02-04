import React from "react";
import { Nav, Footer } from "components/index";
import styled from "styled-components";
import FAQ from "./FAQ";

export default function CampDetail() {
  return (
    <Container>
      <Nav />
      <Header bgImg={require("resources/images/homeHeaderBackground.jpg")} />

      <FAQ />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
`;

const Header = styled.header<{ bgImg: string }>`
  height: 250px;
  background-color: #0084ad;
  padding: 104px 16px 56px;
  box-sizing: border-box;
  margin-bottom: 56px;
`;
