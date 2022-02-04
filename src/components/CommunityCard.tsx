import React from "react";
import { ICommunity } from "types/type";
import styled from "styled-components";
import colors from "styles/colors";
import fonts from "styles/fonts";
import Comment from "./Comment";
import { Link } from "react-router-dom";
interface IProps {
  community: ICommunity;
  isTopView: boolean;
}

export default function CommunityCard({ community, isTopView }: IProps) {
  return (
    <Link to={`/community/${community.id}`}>
      <Container>
        <div className="community-tag-container">
          {isTopView ? (
            <CommunityTag bgColor={colors.primary1} style={{ color: "white" }}>
              {community.tags[0]}
            </CommunityTag>
          ) : (
            <></>
          )}
          <CommunityTag bgColor={colors.gray5}>
            {community.tags[1]}
          </CommunityTag>
        </div>

        <div className="community-title">{community.title}</div>
        <CotentCommentContainer>
          <div className="community-content">{community.content}</div>
          <CommentSection>
            {community.comments.map((comment, index) => (
              <Comment key={index} comment={comment} />
            ))}
          </CommentSection>
        </CotentCommentContainer>
        <div className="more-comments">+더보기</div>
      </Container>
    </Link>
  );
}

const Container = styled.div`
  padding: "10px";
  height: 320px;

  border: 1px solid #cccccc;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  .community-tag-container {
    display: flex;
    justify-content: flex-start;
    gap: 10px;
    padding: 10px;
  }
  .community-tag-topView {
    color: white;
  }
  .community-tag-category {
    background-color: ${colors.gray5};
    ${fonts.Caption}
    font-weight: bold;
  }
  .community-title {
    ${fonts.Body1}
    font-weight: bold;
    padding: 4px 10px;
  }
  .community-content {
    ${fonts.Body2}
    padding: 4px 10px 0px;
  }
  .more-comments {
    text-align: center;
    padding: 0px 0px 16px 0px;
    color: ${colors.secondary1};
    ${fonts.Caption}
  }
`;

const CommunityTag = styled.div<{ bgColor: string }>`
  background-color: ${(props) => props.bgColor};
  padding: 3px;
  ${fonts.Caption}
  font-weight: bold;
  border-radius: 4px;
`;

const CotentCommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 220px;
`;

const CommentSection = styled.div`
  padding: 4px 10px;
`;
