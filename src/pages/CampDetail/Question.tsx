import styled from "styled-components";
import colors from "styles/colors";
import fonts from "styles/fonts";
import toggleUp from "resources/images/faq-toggle-up.png";
import toggleDown from "resources/images/faq-toggle-down.png";
import { useState } from "react";

interface IProps {
  question: string;
  answer: string;
}

export default function Question({ question, answer }: IProps) {
  const [toggleFAQ, setToggleFAQ] = useState<boolean>(false);
  const onToggleFAQ = () => {
    setToggleFAQ(!toggleFAQ);
  };
  return (
    <Container isToggle={toggleFAQ} onClick={onToggleFAQ}>
      <div className="faq-question">
        <div>
          <p>
            Q.<span>{question}</span>
          </p>
        </div>
        <div className="toggle-faq">
          <img src={toggleFAQ ? toggleUp : toggleDown} />
        </div>
      </div>
      <div className="faq-answer">
        <p>
          A.
          <span>{answer}</span>
        </p>
      </div>
    </Container>
  );
}

const Container = styled.li<{ isToggle: boolean }>`
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
      transform: ${(props) => (props.isToggle ? "rotate(360deg)" : "")};
      transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    }
  }
`;
