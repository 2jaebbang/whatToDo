import { Nav, Footer } from "components/index";
import styled from "styled-components";
import FAQ from "./FAQ";
import CurriculumPoint from "./CurriculumPoint";
import TitleImage from "./TitleImage";
import LiveDetail from "./LiveDetail";
import DetailDescription from "./DetailDescription";
import Review from "./Review";
import DetailBanner from "components/DetailBanner";
import { observer } from "mobx-react-lite";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import CampStore from "stores/CampStore";
import Skeleton from "components/Skeleton";

const CampDetail = () => {
  const { campId } = useParams();
  const campStore = useContext(CampStore);
  useEffect(() => {
    campStore.fetchCampById(Number(campId));
  }, []);
  if (campStore.targetCamp) {
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
  } else {
    return (
      <div>
        <Skeleton
          style={{ width: "100%", height: 280, borderRadius: "10px" }}
          animated
        />
      </div>
    );
  }
};

export default observer(CampDetail);

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
