import React from "react";
import styled from "styled-components";
import TopGames from "./TopGames";

const Home = () => {
  return (
    <Container>
      <TopGames />
      <AllGamesButton>SHOW ALL GAMES</AllGamesButton>
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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const AllGamesButton = styled.a`
  background-color: #0e443e;
  font-weight: bold;
  padding: 17px 9px;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 20px;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin: 30px 20px;
  max-width: 700px;
  &:hover {
    background: #64d8cb;
  }
`;

export default Home;
