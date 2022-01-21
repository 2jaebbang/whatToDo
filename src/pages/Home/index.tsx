import React from "react";
import { ICamp, ICommunity } from "types/type";
import Nav from "components/Nav";
import CampCard from "components/CampCard";
import CommunityCard from "components/CommunityCard";

const camp: ICamp = {
  id: 0,
  type: "인기",
  status: "모집중",
  category: "IT",
  skill: "SQL",
  title: "개발자 없이 SQL로 데이터 추출하고 대시보드 만들기",
  thumbnail: " ",
  dateStart: "2022-02-13",
};

const community: ICommunity = {
  id: 0,
  category: "취업고민",
  title: "합격 메일 답장 어떻게 할까요?",
  content: "고칠 부분이 있는지 봐주시면 감사하겠습니다!",
  comments: [
    { id: 0, nickName: "멘토1342", profile: "", content: "안녕하세요" },
  ],
};

export default function Home() {
  return (
    <div>
      <Nav />
      <header>header</header>
      <section>
        <div>인기 부트 갬프</div>
        <div style={{ display: "flex", padding: "20px" }}>
          <CampCard camp={camp} />
          <CampCard camp={camp} />
          <CampCard camp={camp} />
          <CampCard camp={camp} />
        </div>
      </section>
      <section>
        <div>특가 할인 캠프</div>
        <div style={{ display: "flex", padding: "20px" }}>
          <CampCard camp={camp} />
          <CampCard camp={camp} />
          <CampCard camp={camp} />
          <CampCard camp={camp} />
        </div>
      </section>
      <div>banner</div>
      <section>
        <div style={{ display: "flex", padding: "20px" }}>
          <CommunityCard community={community} />
          <CommunityCard community={community} />
          <CommunityCard community={community} />
        </div>
      </section>
      <footer>footer</footer>
    </div>
  );
}
