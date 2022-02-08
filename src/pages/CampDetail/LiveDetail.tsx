import styled from "styled-components";
import colors from "styles/colors";
import fonts from "styles/fonts";
import DetailSection from "./DetailSection";

export default function LiveDetail() {
  return (
    <Container>
      <DetailSection>
        <div className="title-section">
          <div className="live-title">
            대답없는 VOD 강의에 <span style={{ color: "#CC2727" }}>라이브</span>
            로 답하다.
          </div>
          <img
            className="live-button"
            src="https://cdn.comento.kr/images/class/pt/detail/vp-live-button.png"
            alt="pt-detail-live-button"
          />
        </div>
        <div className="live-content">
          React만큼은 실무에 제대로 활용할 수 있도록, <br />
          오프라인 강의와 온라인 VOD의 장점만 모았습니다.
        </div>
        <div className="live-content-cards">
          <LiveCard>
            <p className="card-title">LIVE CLASS</p>
            <p className="card-content">
              혼자하는 VOD가 아닙니다.
              <br />
              라이브로 묻고,
              <br />그 해답을 열어보세요
            </p>
          </LiveCard>
          <LiveCard>
            <p className="card-title">KEEP DOING</p>
            <p className="card-content">
              작심삼일 VOD가 아닙니다.
              <br />
              실시간으로 만나니까,
              <br />
              더이상 미루지 마세요.
            </p>
          </LiveCard>
          <LiveCard>
            <p className="card-title">CAN DO</p>
            <p className="card-content">
              이론만 있는 VOD가 아닙니다.
              <br />
              실무 과제를 해결하며
              <br />
              '할 수 있다'고 말해보세요.
            </p>
          </LiveCard>
        </div>
      </DetailSection>
    </Container>
  );
}

const Container = styled.div`
  background-color: white;

  .title-section {
    display: flex;
    justify-content: space-between;
  }

  .live-button {
    width: 100px;
    height: 40px;
  }

  .live-title {
    ${fonts.H1};
    padding-bottom: 18px;
  }

  .live-content {
    ${fonts.Body2}
  }

  .live-content-cards {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 20px 0px 20px 0px;
  }
`;

const LiveCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: ${colors.gray5};
  border-radius: 6px;
  .card-title {
    ${fonts.H3}
    margin-bottom: 5px;
  }
  .card-content {
    ${fonts.Body2}
    text-align: center;
  }
`;
