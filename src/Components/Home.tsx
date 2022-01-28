import React from "react";
import styled from "styled-components";
import TopGames from "./TopGames";

const Home = () => {
  return (
    <Container>
      <TopGames />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 70px);
  &:before {
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    content: "";
    top: -15px;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: url("/images/backbody.jpg");
    z-index: -1;
  }
`;

export default Home;
