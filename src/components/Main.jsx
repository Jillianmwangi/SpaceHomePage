import "./Main.css";
import React from "react";

function Main({info1, info2, info3}) {
  return (
    <div className="container">
      <div className="leftSide">
        <p className="toptext">{info1}</p>
        <p className="text2">{info2}</p>
        <p className="text3">{info3}</p>
      </div>

          <div className="rightSide">
              <p className="circle">EXPLORE</p>
      </div>
    </div>
  );
}

export default Main;
