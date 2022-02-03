import React from "react";
import { ICommunity } from "types/type";
import styled from "styled-components";
import colors from "styles/colors";
import fonts from "styles/fonts";
import Comment from "./Comment";
interface IProps {
  community: ICommunity;
  isTopView: boolean;
}

export default function CommunityCard({ community, isTopView }: IProps) {
  return (
    <Container>
      <div className="community-tag-container">
        {isTopView ? (
          <CommunityTag bgColor={colors.primary1} style={{ color: "white" }}>
            {community.tags[0]}
          </CommunityTag>
        ) : (
          <></>
        )}

        <CommunityTag bgColor={colors.gray5}>{community.tags[1]}</CommunityTag>
      </div>
      <div className="community-title">{community.title}</div>
      <div className="community-content">{community.content}</div>
      {community.comments.map((comment, index) => (
        <CommentSection key={index}>
          <div>
            <img className="comment-profile" src={comment.profile}></img>
          </div>
          <div className="comment-info">
            <div className="comment-name">{comment.nickname}</div>
            <div className="comment-content">{comment.content}</div>
          </div>
        </CommentSection>
      ))}
      <div className="more-comments">+더보기</div>
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
  background-size: "cover";
  background-position: "center";
  padding: "20px";
  height: 320px;
  border-radius: 10px;
  border-color: ${colors.gray4};
  border-style: solid;
  border-width: 1px;

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
    padding: 4px 10px 58px;
  }
  .more-comments {
    text-align: center;
    padding: 8px 0px 16px 0px;
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

const CommentSection = styled.div`
  padding: 8px 16px;
  display: flex;
  gap: 8px;
  .comment-profile {
    width: 30px;
    height: 30px;
    border-radius: 15px;
  }
  .comment-info {
    width: 140px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .comment-name {
    ${fonts.Body2}
    font-weight: bold;
  }
  .comment-content {
    ${fonts.Caption}
  }
`;
