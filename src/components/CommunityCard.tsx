import React from "react";
import { Link } from "react-router-dom";
import { ICommunity } from "types/type";
import styled from "styled-components";

export default function CommunityCard({
  community,
}: {
  community: ICommunity;
}) {
  return (
    <Container>
      <div>{community.category}</div>
      <div>{community.title}</div>
      <div>{community.content}</div>

      <CommentContainer>
        {community.comments.map((comment) => {
          <Comment>
            <div>{comment.profile}</div>
            <div>{comment.nickName}</div>
            <div>{comment.content}</div>
          </Comment>;
        })}
      </CommentContainer>
    </Container>
  );
}

const Container = styled.div`
  background-size: "cover";
  background-position: "center";
  padding: "20px";
`;

const CommentContainer = styled.div``;

const Comment = styled.div``;
