import styled, { css } from "styled-components";
import { maxWidth, maxWidthDetail } from "styles/mixin";
import colors from "styles/colors";
import fonts from "styles/fonts";

export default function FAQ() {
  return (
    <Container>
      <div className="faqSection">
        <div className="faq-max-width">
          <div className="faq-title">FAQ</div>
          <ul className="faq-list">
            <Question>
              <div className="faq-content">
                <p>Q.</p>
                <p>React 경험이 없는데 참여할 수 있나요?</p>
              </div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 18 18"
                fill="#979CA2"
                xmlns="http://www.w3.org/2000/svg"
                style={{ fill: "rgb(131, 137, 144)" }}
              >
                <path
                  data-v-bd9f2bcc=""
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9 5L15 11.5019L13.9039 12.5L9 7.18582L4.09607 12.5L3 11.5019L9 5Z"
                ></path>
              </svg>
            </Question>
            <Question>
              <div className="faq-content">
                <p>Q.</p>
                <p>React 경험이 없는데 참여할 수 있나요?</p>
              </div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 18 18"
                fill="#979CA2"
                xmlns="http://www.w3.org/2000/svg"
                style={{ fill: "rgb(131, 137, 144)" }}
              >
                <path
                  data-v-bd9f2bcc=""
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9 5L15 11.5019L13.9039 12.5L9 7.18582L4.09607 12.5L3 11.5019L9 5Z"
                ></path>
              </svg>
            </Question>
          </ul>
        </div>
      </div>
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

const Question = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 0px 20px 0px;
  border-bottom: 1px solid ${colors.gray4};

  .faq-content {
    display: flex;
    flex-direction: row;
  }
  p {
    padding-right: 5px;
    ${fonts.H4}
  }
`;
