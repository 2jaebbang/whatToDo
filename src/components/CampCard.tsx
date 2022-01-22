import React from "react";
import { Link } from "react-router-dom";
import { ICamp } from "types/type";
import styled from "styled-components";

export default function CampCard({ camp }: { camp: ICamp }) {
  return (
    <Link to={`/camp/${camp.id}`}>
      <Container style={{ backgroundImage: `url(${camp.thumbnail})` }}>
        <div>{camp.status}</div>
        <div>{camp.title}</div>
        <div>{camp.dateStart}</div>
      </Container>
    </Link>
  );
}

const Container = styled.div`
  background-size: "cover";
  background-position: "center";
  padding: "20px";
`;
