import { CampCard } from "components/index";
import styled from "styled-components";
import fonts from "styles/fonts";
import { maxWidth } from "styles/mixin";
import { ICamp } from "types/type";

interface IProps {
  title: string;
  camps: ICamp[];
  isHeadField?: boolean;
}

export const CampSection = ({ title, camps, isHeadField = false }: IProps) => {
  return (
    <Container>
      <div className="section-title">{title}</div>
      <div className="flex">
        {camps.map((camp, index) => (
          <CampCard key={index} camp={camp} isHeadField={isHeadField} />
        ))}
      </div>
    </Container>
  );
};

const Container = styled.section`
  ${maxWidth}
  padding: 16px 16px 48px;
  .section-title {
    ${fonts.H2};
    padding-bottom: 8px;
  }
  .flex {
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }
`;
