import styled, { css } from "styled-components";
import { maxWidth, maxWidthDetail } from "styles/mixin";
import colors from "styles/colors";
import fonts from "styles/fonts";
import DetailSection from "./DetailSection";
import toggleUp from "resources/images/faq-toggle-up.png";
import toggleDown from "resources/images/faq-toggle-down.png";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CampStore from "stores/CampStore";
import Question from "./Question";

export default function FAQ() {
  const campStore = useContext(CampStore);

  return (
    <Container>
      <DetailSection>
        <div className="faq-title">FAQ</div>
        <ul className="faq-list">
          {campStore.targetCamp!.faqs.map((faq, index) => (
            <Question key={index} question={faq.question} answer={faq.answer} />
          ))}
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
