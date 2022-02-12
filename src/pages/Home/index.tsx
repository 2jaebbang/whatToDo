import { useState, useEffect, useContext } from "react";
import { ICommunity } from "types/type";
import { Nav, Footer, FooterM, CardSectionSkeleton } from "components/index";
import { Header } from "pages/Home/Header";
import Banner from "pages/Home/Banner";
import styled from "styled-components";
import CampSection from "./CampSection";
import CommunitySection from "./CommunitySection";
import { useMediaQuery } from "react-responsive";
import { getCommunities } from "apis/communityApi";
import CampStore from "stores/CampStore";
import { observer } from "mobx-react-lite";

const Home = () => {
  const [communities, setCommunites] = useState<ICommunity[]>();
  const isMobile = useMediaQuery({ query: "(max-width: 480px)" });
  const campStore = useContext(CampStore);

  useEffect(() => {
    campStore.fetchCampsPopular();
    campStore.fetchCampsSale();
    fetchCommunities();
  }, []);

  const fetchCommunities = async function () {
    const communities = await getCommunities();
    setCommunites(communities);
  };
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
          {communities ? (
            <CommunitySection
              title="커뮤니티"
              communities={communities}
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
