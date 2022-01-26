import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <ul>
        <li>Главная</li>
        <li>Карта</li>
        <li>Адрес</li>
        <li>Телефон</li>
      </ul>
      <p>Copyright © 2021 </p>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  position: absolute;
  bottom: 0;
`;
