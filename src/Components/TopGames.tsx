import React from "react";
import styled from "styled-components";

const TopGames = () => {
  return (
    <Container>
      <h4>Recomended for You</h4>
      <Content>
        <Wrap>
          <img src="/images/game-card_diablo3_enUS.jpeg" alt="" />
        </Wrap>
        <Wrap>
          <img src="/images/game-card_diablo4_enUS.jpeg" alt="" />
        </Wrap>
        <Wrap>
          <img src="/images/game-card_hearthstone_enUS.jpeg" alt="" />
        </Wrap>
        <Wrap>
          <img src="/images/game-card_heroes_enUS.jpeg" alt="" />
        </Wrap>
        <Wrap>
          <img src="/images/game-card_overwatch_enUS.jpeg" alt="" />
        </Wrap>
        <Wrap>
          <img src="/images/game-card_starcraft2_enUS.jpeg" alt="" />
        </Wrap>
        <Wrap>
          <img src="/images/game-card_wow_enUS.jpeg" alt="" />
        </Wrap>
        <Wrap>
          <img src="/images/game-card-wc3-en-us.jpeg" alt="" />
        </Wrap>
      </Content>
    </Container>
  );
};

export default TopGames;

const Container = styled.div``;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const Wrap = styled.div`
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 /73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover {
    transform: scale(1.05);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 /72%) 0px 30px 22px -10px;
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
