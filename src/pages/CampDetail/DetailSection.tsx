import styled from "styled-components";
import { maxWidth, maxWidthDetail } from "styles/mixin";

export default function DetailSection({ children }: any) {
  return (
    <DetailContainer>
      <div className="detail-max-width">{children}</div>
    </DetailContainer>
  );
}

const DetailContainer = styled.div`
  ${maxWidth}
  padding: 0px 0px 50px 0px;
  .detail-max-width {
    ${maxWidthDetail}
  }
`;
