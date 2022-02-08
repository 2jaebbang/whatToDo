import styled, { css } from "styled-components";
import { maxWidth, maxWidthDetail } from "styles/mixin";
import colors from "styles/colors";
import fonts from "styles/fonts";
import DetailSection from "./DetailSection";
import toggleUp from "resources/images/faq-toggle-up.png";
import toggleDown from "resources/images/faq-toggle-down.png";
import { useState } from "react";

export default function FAQ() {
  const [toggleFAQ, setToggleFAQ] = useState<boolean>(false);
  const onToggleFAQ = () => {
    setToggleFAQ((prev) => !prev);
  };

  return (
    <Container>
      <DetailSection>
        <div className="faq-title">FAQ</div>
        <ul className="faq-list">
          <Question isToggle={toggleFAQ} onClick={onToggleFAQ}>
            <div className="faq-question">
              <div>
                <p>
                  Q.<span>React 경험이 없는데 참여할 수 있나요?</span>
                </p>
              </div>
              <div className="toggle-faq">
                <img src={toggleFAQ ? toggleUp : toggleDown} />
              </div>
            </div>
            <div className="faq-answer">
              <p>
                A.
                <span>
                  React 경험이 있는 분들이 협업 관점에서 업그레이드 할 수 있게
                  도와드리는데 목적이 있는 클래스입니다. React 기초 강의는
                  제공하지 않기 때문에 따로 React 공부 하실 수 있는 분들께
                  추천드립니다.
                </span>
              </p>
            </div>
          </Question>
          <Question isToggle={toggleFAQ} onClick={onToggleFAQ}>
            <div className="faq-question">
              <div>
                <p>
                  Q.<span>React 경험이 없는데 참여할 수 있나요?</span>
                </p>
              </div>
              <div className="toggle-faq">
                <img src={toggleFAQ ? toggleUp : toggleDown} />
              </div>
            </div>
            <div className="faq-answer">
              <p>
                A.
                <span>
                  React 경험이 있는 분들이 협업 관점에서 업그레이드 할 수 있게
                  도와드리는데 목적이 있는 클래스입니다. React 기초 강의는
                  제공하지 않기 때문에 따로 React 공부 하실 수 있는 분들께
                  추천드립니다.
                </span>
              </p>
            </div>
          </Question>
        </ul>
      </DetailSection>
    </Container>
  );
}

const Container = styled.div`
  background-color: #fafbfc;
  .faqSection {
    ${maxWidth}
    padding: 50px 0px 50px 0px;

    .faq-max-width {
      ${maxWidthDetail}
    }
  }

  .faq-title {
    ${fonts.H1};
    padding-bottom: 18px;
  }

  .faq-list {
    display: flex;
    flex-direction: column;
    align-self: center;
    gap: 10px;
  }
`;

const Question = styled.li<{ isToggle: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 0px 20px 0px;
  border-bottom: 1px solid ${colors.gray4};
  cursor: pointer;

  .faq-question {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    ${fonts.H4}
  }
  .faq-answer {
    flex-direction: row;
    ${fonts.Body2}
    padding: 10px 0px 10px 0px;
    display: ${(props) => (props.isToggle ? "flex" : "none")};
  }
  p {
    padding-right: 5px;
  }
  .toggle-faq {
    width: 18px;
    img {
      transform: ${(props) => (props.isToggle ? "rotate(180deg)" : "")};
      transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    }
  }
`;
