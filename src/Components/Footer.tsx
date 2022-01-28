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
      <GlobalFooter>
        <SubTitle>© 2022 Copyright:Calichgaming.com</SubTitle>
        <Description>
          <h3>Footer Content</h3> Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Iste atque ea quis molestias. Fugiat pariatur maxime
          quis culpa corporis vitae repudiandae aliquam voluptatem veniam, est
          atque cumque eum delectus sint!
        </Description>
      </GlobalFooter>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  min-height: 70px;
  position: relative;
  &:before {
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    content: "";
    top: -550px;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: url("/images/nord.png");
    z-index: -1;
  }
`;

const PromoWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: black;
  justify-content: center;
`;

const GlobalFooter = styled.div`
  text-align: center;
  padding-top: 10px;
`;

const TwitterButton = styled.button`
  margin-right: 16px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 50%;
  border: none;
  background-color: black;
  cursor: pointer;

  img {
    width: 44px;
    height: 44px;
  }
`;

const FacebookButton = styled(TwitterButton)``;

const TwitchButton = styled(TwitterButton)``;

const YouTubeButton = styled(TwitterButton)``;

const InstagramButton = styled(TwitterButton)``;

const VkButton = styled(TwitterButton)``;

const DiscordButton = styled(TwitterButton)``;

const SubTitle = styled.div`
  color: rgba(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`;
const Description = styled.div`
  line-height: 1.4;
  font-size: 15px;
  margin-top: 16px;
  color: rgb(249, 249, 249);
  }
`;
