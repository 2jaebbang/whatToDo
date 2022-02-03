import { CommunityCard } from "components/index";
import styled from "styled-components";
import fonts from "styles/fonts";
import { maxWidth } from "styles/mixin";
import { ICommunity } from "types/type";

interface IProps {
  title: string;
  communities: ICommunity[];
  isTopView?: boolean;
}

export default function CommunitySection({
  title,
  communities,
  isTopView = false,
}: IProps) {
  return (
    <Container>
      <div className="section-title">{title}</div>
      <div className="cards">
        {communities.map((community, index) => (
          <CommunityCard
            key={index}
            community={community}
            isTopView={isTopView}
          />
        ))}
      </div>
    </Container>
  );
}

const Container = styled.section`
  ${maxWidth}
  padding: 0px 24px 48px;

  .section-title {
    ${fonts.H2};
    padding-bottom: 8px;
  }
  .cards {
    display: flex;
    gap: 20px;
    a {
      flex: 1;
    }
  }
`;
