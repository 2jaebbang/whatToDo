import { useState, useEffect } from "react";
import { ICamp, ICommunity } from "types/type";
import { Nav, Footer, CommunityCard } from "components/index";
import { Header } from "pages/Home/Header";
import Banner from "pages/Home/Banner";
import sqlImage from "resources/images/sqlImage.png";
import snsIcon from "resources/images/snsIcon.png";
import styled from "styled-components";
import CampSection from "./CampSection";
import CommunitySection from "./CommunitySection";

// import Footer from "components/Footer";
const campMock: ICamp = {
  id: 0,
  type: "인기",
  status: "모집중",
  category: "IT",
  skill: "SQL",
  title: "개발자 없이 SQL로 데이터 추출하고 대시보드 만들기",
  thumbnail: sqlImage,
  dateStart: "2022-02-13",
};

const communityMock: ICommunity = {
  id: 0,
  category: "취업고민",
  title: "합격 메일 답장 어떻게 할까요?",
  content: "고칠 부분이 있는지 봐주시면 감사하겠습니다!",
  comments: [
    {
      id: 0,
      nickName: "멘토1342",
      profile: snsIcon,
      content: "안녕하세요 먼저 면접까지 본 사람으로",
    },
    {
      id: 1,
      nickName: "멘토1342",
      profile: snsIcon,
      content: "안녕하세요 먼저 면접까지 본 사람으로",
    },
  ],
};

export default function Home() {
  const [popularCamps, setPopularCamps] = useState<ICamp[]>([]);
  const [saleCamps, setSaleCamps] = useState<ICamp[]>([]);
  const [communities, setCommunites] = useState<ICommunity[]>([]);

  useEffect(() => {
    setPopularCamps([campMock, campMock, campMock, campMock]);
    setSaleCamps([campMock, campMock, campMock, campMock]);
    setCommunites([communityMock, communityMock, communityMock, communityMock]);
  }, []);
  return (
    <Container>
      <Nav />
      <Header />
      <CampSection
        title="인기 부트 캠프"
        camps={popularCamps}
        isHeadField={false}
      />
      <CampSection
        title="특가 할인 캠프"
        camps={saleCamps}
        isHeadField={true}
      />
      <Banner />
      <CommunitySection
        title="커뮤니티"
        communities={communities}
        isTopView={true}
      />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
`;
