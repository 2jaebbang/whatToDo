import { useState, useEffect } from "react";
import { CampType, ICamp, ICommunity } from "types/type";
import { Nav, Footer, FooterM, CardSectionSkeleton } from "components/index";
import { Header } from "pages/Home/Header";
import Banner from "pages/Home/Banner";
import sqlImage from "resources/images/sqlImage.png";
import snsIcon from "resources/images/snsIcon.png";
import styled from "styled-components";
import CampSection from "./CampSection";
import CommunitySection from "./CommunitySection";
import { useMediaQuery } from "react-responsive";
import { getCampByType } from "apis/campApi";
import { getCommunities } from "apis/communityApi";

export default function Home() {
  const [popularCamps, setPopularCamps] = useState<ICamp[]>();
  const [saleCamps, setSaleCamps] = useState<ICamp[]>();
  const [communities, setCommunites] = useState<ICommunity[]>();
  const isMobile = useMediaQuery({ query: "(max-width: 480px)" });
  useEffect(() => {
    fetchCamps("popular");
    fetchCamps("sale");
    fetchCommunities();
  }, []);

  const fetchCamps = async (type: CampType) => {
    const camps = await getCampByType(type);
    type === "popular" ? setPopularCamps(camps) : setSaleCamps(camps);
  };
  const fetchCommunities = async function () {
    const communities = await getCommunities();
    setCommunites(communities);
  };
  return (
    <Container>
      <Nav />
      <Header />
      {popularCamps ? (
        <CampSection
          title="인기 부트 캠프"
          camps={popularCamps}
          isHeadField={false}
        />
      ) : (
        <CardSectionSkeleton />
      )}
      {saleCamps ? (
        <CampSection
          title="특가 할인 캠프"
          camps={saleCamps}
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
}

const Container = styled.div`
  margin: 0 auto;
`;
