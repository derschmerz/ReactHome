import React from "react";

const Header: React.FC = () => {
  return (
    <header>
      <div className="container">
        <a href="#0">
          <img className="Logo" src="/images/video-game.png" alt="" />
        </a>
        <div className="Menu">
          <a href="#1">Games</a>
          <a href="#2">Магазин</a>
          <a href="#3">Новости</a>
          <a href="#4">Сообщество </a>
        </div>
        <div className="RightMenu">
          <a href="#5">Поддержка</a>
          <a href="#6">Моя учетная запись</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
