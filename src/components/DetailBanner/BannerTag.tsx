import styled from "styled-components";

import fonts from "styles/fonts";
import colors from "styles/colors";

export default function BannerTags({ tags }: { tags: string[] }) {
  return (
    <Container>
      {tags.map((tag, index) => (
        <div key={index}>{tag}</div>
      ))}
    </Container>
  );
}

const Container = styled.div`
  ${fonts.Caption};
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding-bottom: 20px;
  div {
    border-radius: 4px;
    padding: 4px 6px;
    background-color: ${colors.gray5};
  }
`;
