import styled from "styled-components";
import fonts from "styles/fonts";
import { IComment } from "types/type";

export default function Comment({ comment }: { comment: IComment }) {
  const content =
    comment.content.length > 12
      ? `${comment.content.substring(0, 12)}...`
      : comment.content;
  return (
    <Container>
      <div>
        <Profile img={comment.profile} />
      </div>
      <div>
        <div className="comment-nickname">{comment.nickname}</div>
        <div className="comment-content">{content}</div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: 4px;
  padding-bottom: 16px;
  .comment-nickname {
    ${fonts.Body2}
    font-weight: bold;
    padding-bottom: 4px;
  }
  .comment-content {
    ${fonts.Caption}
  }
`;

const Profile = styled.div<{ img: string }>`
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  width: 30px;
  height: 30px;
  border-radius: 15px;
`;
