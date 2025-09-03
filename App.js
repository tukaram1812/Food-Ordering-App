import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";

// Header Component

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&txt_keyword=All"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const resList = 

// Restarant card
const RestaurantCard = (props) => {
  const { resData } = props;

  const {} = resData?.data;//optional chaining

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src="https://b.zmtcdn.com/data/pictures/3/21420233/26578de11516de3ef8385085293e0f1a.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
      />
      <h3>{resData.data.daname}</h3>
      <h4>{resData.data.cuisines}</h4>
      <h4>4.3 Star</h4>
      <h4>38 minutes</h4>
    </div>
  );
};

// not using keys (not acceptable) <<< index as key <<< unique ID (best practise)

//Body Component
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard resData={resList[1]} />
        <RestaurantCard resData={resList[2]} />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));

root.render(<AppLayout />);
