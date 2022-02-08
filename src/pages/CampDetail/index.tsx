import React from "react";
import { Nav, Footer } from "components/index";
import styled from "styled-components";
import FAQ from "./FAQ";
import CurriculumPoint from "./CurriculumPoint";
import TitleImage from "./TitleImage";
import LiveDetail from "./LiveDetail";
import DetailDescription from "./DetailDescription";
import Review from "./Review";
import DetailBanner from "components/DetailBanner";

export default function CampDetail() {
  return (
    <Container>
      <Nav />
      <DetailBanner />
      <div className="headerContainer">
        <Header bgImg={require("resources/images/homeHeaderBackground.jpg")}>
          <TitleImage />
        </Header>
      </div>
      <LiveDetail />
      <DetailDescription />
      <Review />
      <CurriculumPoint />
      <FAQ />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
  position: relative;
  .headerContainer {
    height: 600px;
  }
`;

const Header = styled.header<{ bgImg: string }>`
  height: 320px;
  background-color: #0084ad;
  padding: 104px 16px 56px;
  box-sizing: border-box;
  margin-bottom: 56px;
`;
