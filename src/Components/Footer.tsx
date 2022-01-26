import { Facebook } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <PromoWrapper>
        <TwitterButton>
          <img src="/images/Ubisoft_global_twitter_logo.png" alt="#11" />
        </TwitterButton>
        <FacebookButton>
          <img src="/images/Ubisoft_global_facebook_logo.png" alt="#12" />
        </FacebookButton>
        <TwitchButton>
          <img src="/images/Ubisoft_global_twitch_logo.webp" alt="#13" />
        </TwitchButton>
        <YouTubeButton>
          <img src="/images/Ubisoft_global_youtube_logo.png" alt="#14" />
        </YouTubeButton>
        <InstagramButton>
          <img src="/images/Ubisoft_global_instagram_logo.png" alt="#15" />
        </InstagramButton>
        <VkButton>
          <img src="/images/Ubisoft_global_vk_logo.png" alt="#16" />
        </VkButton>
        <DiscordButton>
          <img src="/images/discord_social.png" alt="#17" />
        </DiscordButton>
      </PromoWrapper>
      <GlobalFooter />
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0;
  position: relative;
`;

const PromoWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: black;
  justify-content: center;
`;

const GlobalFooter = styled.div``;

const TwitterButton = styled.button`
  margin-right: 16px;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 44px;
  height: 44px;
  display: flex;
  align-itens: center;
  justify-content: center;
  border-radius: 50%;
  border: none;
  background-color: black;
  cursor: pointer;
`;

const FacebookButton = styled(TwitterButton)``;

const TwitchButton = styled(TwitterButton)``;

const YouTubeButton = styled(TwitterButton)``;

const InstagramButton = styled(TwitterButton)``;

const VkButton = styled(TwitterButton)``;

const DiscordButton = styled(TwitterButton)``;
