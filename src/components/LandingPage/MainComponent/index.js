import React from "react";
import "./styles.css";
import Button from "../../Common/Button";

function MainComponent() {
  return (
    <div className="flex-info">
      <div className="left-component">
        <h1 className="track-crypto-heading">Track Crypto</h1>
        <h1 className="real-time-heading">Real Time.</h1>
        <p className="info-text">
          Stay ahead of the market — track real-time crypto prices with live
          data from public APIs. Visit the dashboard to dive in!
        </p>
        <div className="btn-flex">
          <Button text={"Dashboard"} />
          <Button text={"Share"} outlined={true} />
        </div>
      </div>
      <div>phone</div>
    </div>
  );
}

export default MainComponent;
