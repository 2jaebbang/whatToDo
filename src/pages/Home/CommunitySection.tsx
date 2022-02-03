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
      <div className="flex">
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
  padding: 16px 0px 240px;
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
