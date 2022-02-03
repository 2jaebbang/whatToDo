import { CampCard } from "components/index";
import styled from "styled-components";
import fonts from "styles/fonts";
import { maxWidth } from "styles/mixin";
import { ICamp } from "types/type";
import { useMediaQuery } from "react-responsive";

interface IProps {
  title: string;
  camps: ICamp[];
  isHeadField?: boolean;
}

export default function CampSection({
  title,
  camps,
  isHeadField = false,
}: IProps) {
  const isMobile = useMediaQuery({
    query: "(max-width: 480px)",
  });
  return (
    <Container isMobile={isMobile}>
      <div className="section-title">{title}</div>
      <div className={isMobile ? "mobile" : "desktop"}>
        {camps.map((camp, index) => (
          <CampCard key={index} camp={camp} isHeadField={isHeadField} />
        ))}
      </div>
    </Container>
  );
}

const Container = styled.section<{ isMobile: boolean }>`
  ${maxWidth}
  padding: ${(props) => (props.isMobile ? "0px 24px 56px" : "0px 24px 48px")};
  .section-title {
    ${fonts.H2};
    padding-bottom: ${(props) => (props.isMobile ? "20px" : "8px")};
  }
  .desktop {
    a {
      flex: 1;
    }
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }
  .mobile {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 8px;
  }
`;
