import { useState, useEffect, useContext } from "react";
import { Nav, Footer, FooterM, CardSectionSkeleton } from "components/index";
import { Header } from "pages/Home/Header";
import Banner from "pages/Home/Banner";
import styled from "styled-components";
import CampSection from "./CampSection";
import CommunitySection from "./CommunitySection";
import { useMediaQuery } from "react-responsive";
import CampStore from "stores/CampStore";
import CommunitiesStore from "stores/CommunityStore";
import { observer } from "mobx-react-lite";

const Home = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 480px)" });
  const campStore = useContext(CampStore);
  const communityStore = useContext(CommunitiesStore);

  useEffect(() => {
    campStore.fetchCampsPopular();
    campStore.fetchCampsSale();
    communityStore.fetchCommunities();
  }, []);

  return (
    <Container>
      <Nav />
      <Header />
      {campStore.campPopular ? (
        <CampSection
          title="인기 부트 캠프"
          camps={campStore.campPopular}
          isHeadField={false}
        />
      ) : (
        <CardSectionSkeleton />
      )}
      {campStore.campSales ? (
        <CampSection
          title="특가 할인 캠프"
          camps={campStore.campSales}
          isHeadField={true}
        />
      ) : (
        <CardSectionSkeleton />
      )}
      <Banner />
      {!isMobile ? (
        <>
          {communityStore.communities ? (
            <CommunitySection
              title="커뮤니티"
              communities={communityStore.communities}
              isTopView={true}
            />
          ) : (
            <CardSectionSkeleton />
          )}
          <Footer />
        </>
      ) : (
        <>
          <FooterM />
        </>
      )}
    </Container>
  );
};

export default observer(Home);

const Container = styled.div`
  margin: 0 auto;
`;
