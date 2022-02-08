import styled from "styled-components";
import { maxWidth, maxWidthDetail } from "styles/mixin";

export default function TitleImage() {
  return (
    <Container>
      <div className="imageSection">
        <div className="image-max-width">
          <Image />
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  .imageSection {
    ${maxWidth}
    .image-max-width {
      ${maxWidthDetail}
    }
  }
`;

const Image = styled.div`
  border-radius: 6px;
  background-image: url(${require("resources/images/react-image.png")});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 450px;
`;
