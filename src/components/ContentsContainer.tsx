import React from "react";
import styled from "styled-components";

type Props = {
  children?: JSX.Element | JSX.Element[];
};

export const ContentsContainer = ({ children }: Props) => (
  <Container>{children}</Container>
);

const Container = styled.div``;
