import React from "react";
import "./styles.css";
import TemporaryDrawer from "./drawer";
import Button from "../Button";
const Header = () => {
  return (
    <div className="navbar">
      <h1 className="logo">
        CryptoTracker<span style={{ color: "var(--blue)" }}>.</span>
      </h1>
      <div className="links">
        <a href="/">
          <p className="link">Home</p>
        </a>
        <a href="/">
          <p className="link">Compare</p>
        </a>
        <a href="/">
          <p className="link">Watch List</p>
        </a>
        <a href="#">
          <Button
            outlined={true}
            text={"Dashboard"}
            onClick={() => console.log("Btn Clicked")}
          />
        </a>
      </div>
      <div className="mobile-drawer">
        <TemporaryDrawer />
      </div>
    </div>
  );
};

export default Header;
