import React from "react";
import styled from "styled-components";

const Header: React.FC = () => {
  return (
    <header>
      <div className="container">
        <a href="#0">
          <img className="Logo" src="/images/icon2.svg" alt="" />
        </a>
        <div className="Menu">
          <a href="#1">Каталог</a>
          <a href="#2">Где купить</a>
          <a href="#3">Доставка и оплата</a>
          <a href="#4">Контакты </a>
        </div>
        <div className="RightMenu">
          <a href="#5">Корзина</a>
          <a href="#6">Account</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
